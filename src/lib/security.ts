// Security utility functions and logging

export interface SecurityEvent {
  type: 'rate_limit' | 'blocked_ip' | 'suspicious_ua' | 'form_spam' | 'captcha_fail' | 'xss_attempt'
  ip: string
  userAgent?: string
  path?: string
  details?: string
  timestamp: Date
}

export interface RateLimitInfo {
  ip: string
  count: number
  resetTime: number
  blocked: boolean
  blockUntil?: number
}

// Security logging
export function logSecurityEvent(event: SecurityEvent): void {
  const logEntry = {
    ...event,
    timestamp: event.timestamp.toISOString(),
    severity: getEventSeverity(event.type)
  }
  
  // In production, send to security monitoring service
  console.log(`[SECURITY] ${event.type.toUpperCase()}:`, logEntry)
  
  // You can also send to:
  // - Security Information and Event Management (SIEM)
  // - Log aggregation service (ELK Stack, Splunk)
  // - Security monitoring dashboard
  // - Email/Slack alerts for critical events
}

function getEventSeverity(eventType: SecurityEvent['type']): 'low' | 'medium' | 'high' | 'critical' {
  switch (eventType) {
    case 'rate_limit':
      return 'medium'
    case 'blocked_ip':
      return 'high'
    case 'suspicious_ua':
      return 'medium'
    case 'form_spam':
      return 'low'
    case 'captcha_fail':
      return 'medium'
    case 'xss_attempt':
      return 'high'
    default:
      return 'low'
  }
}

// IP reputation tracking
const ipReputation = new Map<string, { score: number; events: SecurityEvent[]; lastSeen: Date }>()

export function updateIPReputation(ip: string, event: SecurityEvent): void {
  const current = ipReputation.get(ip) || { score: 100, events: [], lastSeen: new Date() }
  
  // Deduct points based on event type
  const deductions: Record<SecurityEvent['type'], number> = {
    rate_limit: 10,
    blocked_ip: 50,
    suspicious_ua: 20,
    form_spam: 15,
    captcha_fail: 25,
    xss_attempt: 40
  }
  
  current.score = Math.max(0, current.score - deductions[event.type])
  current.events.push(event)
  current.lastSeen = new Date()
  
  // Keep only last 100 events per IP
  if (current.events.length > 100) {
    current.events = current.events.slice(-100)
  }
  
  ipReputation.set(ip, current)
  
  // Log if IP reputation is getting low
  if (current.score < 30) {
    console.log(`[SECURITY] IP ${ip} has low reputation score: ${current.score}`)
  }
}

export function getIPReputation(ip: string): { score: number; events: SecurityEvent[]; lastSeen: Date } | undefined {
  return ipReputation.get(ip)
}

// Input sanitization utilities
export function sanitizeHTML(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .replace(/data:/gi, '') // Remove data: protocol
    .replace(/vbscript:/gi, '') // Remove vbscript: protocol
    .trim()
}

export function sanitizeSQL(input: string): string {
  // Basic SQL injection prevention
  const sqlPatterns = [
    /(\b(union|select|insert|update|delete|drop|create|alter|exec|execute|script)\b)/gi,
    /(\b(or|and)\b\s+\d+\s*=\s*\d+)/gi,
    /(\b(or|and)\b\s+['"]?\w+['"]?\s*=\s*['"]?\w+['"]?)/gi
  ]
  
  let sanitized = input
  sqlPatterns.forEach(pattern => {
    sanitized = sanitized.replace(pattern, '[REDACTED]')
  })
  
  return sanitized
}

// Rate limiting utilities
export function isRateLimited(ip: string, limit: number): boolean {
  const now = Date.now()
  const key = `rate_limit:${ip}`
  
  // In production, use Redis for distributed rate limiting
  const current = getRateLimitInfo(key)
  
  if (current && now < current.resetTime) {
    return current.count >= limit
  }
  
  return false
}

export function incrementRateLimit(ip: string, limit: number, windowMs: number): void {
  const now = Date.now()
  const key = `rate_limit:${ip}`
  
  const current = getRateLimitInfo(key) || { 
    ip, 
    count: 0, 
    resetTime: now + windowMs, 
    blocked: false 
  }
  current.count++
  
  // Store rate limit info (in production, use Redis)
  setRateLimitInfo(key, current)
}

// Mock storage functions (replace with Redis in production)
const rateLimitStore = new Map<string, RateLimitInfo>()

function getRateLimitInfo(key: string): RateLimitInfo | undefined {
  return rateLimitStore.get(key)
}

function setRateLimitInfo(key: string, info: RateLimitInfo): void {
  rateLimitStore.set(key, info)
}

// Security headers validation
export function validateSecurityHeaders(headers: Headers): boolean {
  const requiredHeaders = [
    'X-Frame-Options',
    'X-Content-Type-Options',
    'X-XSS-Protection',
    'Content-Security-Policy'
  ]
  
  return requiredHeaders.every(header => headers.has(header))
}

// Threat detection
export function detectThreats(request: Request): SecurityEvent[] {
  const events: SecurityEvent[] = []
  const url = new URL(request.url)
  const userAgent = request.headers.get('user-agent') || ''
  
  // Check for suspicious query parameters
  const suspiciousParams = ['eval', 'exec', 'system', 'shell', 'cmd', 'bash', 'sh', 'php', 'python']
  suspiciousParams.forEach(param => {
    if (url.searchParams.has(param)) {
      events.push({
        type: 'xss_attempt',
        ip: 'unknown', // Will be set by middleware
        path: url.pathname,
        details: `Suspicious parameter: ${param}`,
        timestamp: new Date()
      })
    }
  })
  
  // Check for suspicious user agents
  const suspiciousUAPatterns = [
    /masscan/i, /nmap/i, /sqlmap/i, /nikto/i, /dirb/i, /gobuster/i, /ffuf/i,
    /hydra/i, /medusa/i, /ncrack/i, /john/i, /hashcat/i
  ]
  
  suspiciousUAPatterns.forEach(pattern => {
    if (pattern.test(userAgent)) {
      events.push({
        type: 'suspicious_ua',
        ip: 'unknown',
        userAgent,
        details: `Suspicious user agent pattern: ${pattern.source}`,
        timestamp: new Date()
      })
    }
  })
  
  return events
}

// Cleanup old data
export function cleanupOldData(): void {
  const now = Date.now()
  const oneHourAgo = now - (60 * 60 * 1000)
  
  // Clean up old rate limit entries
  for (const [key, value] of rateLimitStore.entries()) {
    if (value.resetTime < oneHourAgo) {
      rateLimitStore.delete(key)
    }
  }
  
  // Clean up old IP reputation data (older than 24 hours)
  const oneDayAgo = now - (24 * 60 * 60 * 1000)
  for (const [ip, data] of ipReputation.entries()) {
    if (data.lastSeen.getTime() < oneDayAgo) {
      ipReputation.delete(ip)
    }
  }
}

// Run cleanup every hour
setInterval(cleanupOldData, 60 * 60 * 1000)
