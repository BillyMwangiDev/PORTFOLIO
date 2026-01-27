import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Enhanced rate limiting store (in production, use Redis)
interface RateLimitEntry {
  count: number
  resetTime: number
  blocked: boolean
  blockUntil?: number
}

// In-memory storage (not suitable for production serverless environments)
// TODO: Replace with Redis or database storage for production
const rateLimitStore = new Map<string, RateLimitEntry>()

// Enhanced rate limiting configuration
const RATE_LIMITS = {
  general: { max: 100, windowMs: 15 * 60 * 1000 }, // 100 requests per 15 minutes
  contact: { max: 10, windowMs: 15 * 60 * 1000 },  // 10 contact form submissions per 15 minutes
  auth: { max: 10, windowMs: 15 * 60 * 1000 }      // 10 auth attempts per 15 minutes
}

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  
  const response = NextResponse.next()

  // Always apply core security headers (including for API routes)
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('X-DNS-Prefetch-Control', 'off')
  response.headers.set('X-Download-Options', 'noopen')
  response.headers.set('X-Permitted-Cross-Domain-Policies', 'none')

  // Skip rate limiting and path checks for API routes but keep security headers
  if (path.startsWith('/api/')) {
    return response
  }
  
  // Rate limiting with different rules per route
  const ip = request.headers.get('x-forwarded-for') || 
             request.headers.get('x-real-ip') || 
             request.headers.get('cf-connecting-ip') || 
             'unknown'
  const now = Date.now()
  
  // Determine rate limit based on route (can be extended for per-path rules)
  const rateLimit = RATE_LIMITS.general
  
  const current = rateLimitStore.get(ip)
  
  // Check if IP is blocked
  if (current?.blocked && current.blockUntil && now < current.blockUntil) {
    return new NextResponse('Access Denied - IP Blocked', { 
      status: 403,
      headers: {
        'Retry-After': Math.ceil((current.blockUntil - now) / 1000).toString()
      }
    })
  }
  
  // Rate limiting logic
  if (current && now < current.resetTime) {
    if (current.count >= rateLimit.max) {
      // Block IP for 1 hour if rate limit exceeded
      current.blocked = true
      current.blockUntil = now + (60 * 60 * 1000)
      
      return new NextResponse('Too Many Requests', { 
        status: 429,
        headers: {
          'Retry-After': '3600'
        }
      })
    }
    current.count++
  } else {
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + rateLimit.windowMs,
      blocked: false
    })
  }
  
  // Probabilistic cleanup of old entries to reduce per-request overhead
  if (Math.random() < 0.01) {
    rateLimitStore.forEach((value, key) => {
      if (now > value.resetTime && !value.blocked) {
        rateLimitStore.delete(key)
      }
    })
  }

  // Enhanced bot protection - only block clearly malicious user agents
  const userAgent = request.headers.get('user-agent') || ''
  const maliciousPatterns = [
    /masscan/i, /nmap/i, /sqlmap/i, /nikto/i, /dirb/i, /gobuster/i, /ffuf/i,
    /hydra/i, /medusa/i, /ncrack/i, /john/i, /hashcat/i
  ]
  
  // Block malicious user agents
  if (maliciousPatterns.some(pattern => pattern.test(userAgent))) {
    console.log(`Blocked malicious user agent: ${userAgent} from ${ip}`)
    return new NextResponse('Access Denied', { status: 403 })
  }
  
  // Block requests to sensitive paths
  const sensitivePaths = ['/api/', '/_next/', '/admin/', '/private/', '/.env', '/.git', '/wp-admin']
  if (sensitivePaths.some(sensitivePath => path.startsWith(sensitivePath))) {
    console.log(`Blocked access to sensitive path: ${path} from ${ip}`)
    return new NextResponse('Not Found', { status: 404 })
  }
  
  // Block suspicious query parameters
  const url = request.nextUrl
  const suspiciousParams = ['eval', 'exec', 'system', 'shell', 'cmd', 'bash', 'sh']
  for (const param of suspiciousParams) {
    if (url.searchParams.has(param)) {
      console.log(`Blocked suspicious parameter: ${param} from ${ip}`)
      return new NextResponse('Bad Request', { status: 400 })
    }
  }
  
  // Block only clearly malicious headers (allow development headers)
  const maliciousHeaders = ['x-original-url', 'x-rewrite-url']
  for (const header of maliciousHeaders) {
    if (request.headers.get(header)) {
      console.log(`Blocked malicious header: ${header} from ${ip}`)
      return new NextResponse('Bad Request', { status: 400 })
    }
  }
  
  // response already has core security headers set above

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api/|_next/static|_next/image|favicon.ico).*)',
  ],
}
