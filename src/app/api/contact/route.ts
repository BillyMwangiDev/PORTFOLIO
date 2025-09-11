import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

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
    
    // Log contact form submission (in production, send to email service)
    console.log('Contact form submission:', {
      ...sanitizedData,
      message: sanitizedData.message.substring(0, 100) + '...' // Truncate for logging
    })
    
    // In production, you would:
    // 1. Send email using a service like SendGrid, AWS SES, or Resend
    // 2. Store in database if needed
    // 3. Send confirmation email to user
    
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
