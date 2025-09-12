import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'

// Contact form validation schema
const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long'),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required').max(100, 'Subject too long'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message too long'),
  // Honeypot field - should be empty
  website: z.string().max(0, 'Invalid submission'),
  // CAPTCHA token
  captchaToken: z.string().min(1, 'CAPTCHA verification required')
})

// Rate limiting store for contact form
const contactRateLimit = new Map<string, { count: number; resetTime: number }>()

// Verify CAPTCHA token (Cloudflare Turnstile)
async function verifyCaptcha(token: string, ip: string): Promise<boolean> {
  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY || 'test-secret-key',
        response: token,
        remoteip: ip,
      }),
    })

    const data = await response.json()
    return data.success === true
  } catch (error) {
    console.error('CAPTCHA verification error:', error)
    return false
  }
}

// Sanitize input to prevent XSS
function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim()
}

// Email configuration
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'billymwangi200@gmail.com',
      pass: process.env.EMAIL_PASSWORD || process.env.EMAIL_APP_PASSWORD
    }
  })
}

// Send email function
async function sendEmail(data: {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
  ip: string
  timestamp: string
}) {
  const transporter = createTransporter()
  
  const mailOptions = {
    from: process.env.EMAIL_USER || 'billymwangi200@gmail.com',
    to: 'billymwangi200@gmail.com',
    subject: `Portfolio Contact: ${data.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Contact Details</h3>
          <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <p><strong>Submitted:</strong> ${new Date(data.timestamp).toLocaleString()}</p>
          <p><strong>IP Address:</strong> ${data.ip}</p>
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h3 style="color: #374151; margin-top: 0;">Message</h3>
          <div style="white-space: pre-wrap; line-height: 1.6;">${data.message}</div>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #fef3c7; border-radius: 8px; border-left: 4px solid #f59e0b;">
          <p style="margin: 0; color: #92400e; font-size: 14px;">
            <strong>Note:</strong> This message was sent from your portfolio contact form at billymwangi.com
          </p>
        </div>
      </div>
    `,
    text: `
New Contact Form Submission

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Subject: ${data.subject}
Submitted: ${new Date(data.timestamp).toLocaleString()}
IP Address: ${data.ip}

Message:
${data.message}

---
This message was sent from your portfolio contact form at billymwangi.com
    `
  }

  return await transporter.sendMail(mailOptions)
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 
                request.headers.get('x-real-ip') || 
                'unknown'
    const now = Date.now()
    
    // Rate limiting for contact form
    const rateLimit = contactRateLimit.get(ip)
    if (rateLimit && now < rateLimit.resetTime) {
      if (rateLimit.count >= 5) { // 5 submissions per 15 minutes
        return NextResponse.json(
          { error: 'Too many contact form submissions. Please try again later.' },
          { status: 429, headers: { 'Retry-After': '900' } }
        )
      }
      rateLimit.count++
    } else {
      contactRateLimit.set(ip, {
        count: 1,
        resetTime: now + (15 * 60 * 1000) // 15 minutes
      })
    }
    
    // Clean up old rate limit entries
    for (const [key, value] of contactRateLimit.entries()) {
      if (now > value.resetTime) {
        contactRateLimit.delete(key)
      }
    }
    
    const body = await request.json()
    
    // Validate input
    const validationResult = contactSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid input data', details: validationResult.error.issues },
        { status: 400 }
      )
    }
    
    const { firstName, lastName, email, subject, message, captchaToken } = validationResult.data
    
    // Verify CAPTCHA
    const captchaValid = await verifyCaptcha(captchaToken, ip)
    if (!captchaValid) {
      console.log(`Failed CAPTCHA verification from IP: ${ip}`)
      return NextResponse.json(
        { error: 'CAPTCHA verification failed. Please try again.' },
        { status: 400 }
      )
    }
    
    // Sanitize inputs
    const sanitizedData = {
      firstName: sanitizeInput(firstName),
      lastName: sanitizeInput(lastName),
      email: sanitizeInput(email),
      subject: sanitizeInput(subject),
      message: sanitizeInput(message),
      ip,
      timestamp: new Date().toISOString()
    }
    
    // Send email notification
    try {
      await sendEmail(sanitizedData)
      console.log('Email sent successfully for contact form submission from:', sanitizedData.email)
    } catch (emailError) {
      console.error('Failed to send email:', emailError)
      // Don't fail the request if email fails, but log it
    }
    
    // Log contact form submission
    console.log('Contact form submission:', {
      ...sanitizedData,
      message: sanitizedData.message.substring(0, 100) + '...' // Truncate for logging
    })
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! I will get back to you soon.' 
      },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}

// Block other HTTP methods
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}

export async function PUT() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}

export async function DELETE() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
