import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Security Policy - Billy Mwangi Portfolio',
  description: 'Security policy and responsible disclosure guidelines for Billy Mwangi\'s portfolio website.',
}

const SecurityPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Security Policy</h1>
          
          <div className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Security Measures</h2>
            <p className="text-gray-600 mb-6">
              This portfolio website implements comprehensive security measures to protect user data and prevent malicious attacks.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Security</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>HTTP Security Headers (XSS, CSRF, Clickjacking protection)</li>
              <li>Content Security Policy (CSP) with strict resource controls</li>
              <li>Rate limiting and DDoS protection</li>
              <li>Input validation and sanitization</li>
              <li>CAPTCHA verification for forms</li>
              <li>Honeypot protection against bots</li>
              <li>HTTPS enforcement (in production)</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Protection</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>No personal data stored on the server</li>
              <li>Form submissions are logged temporarily for security monitoring</li>
              <li>All inputs are validated and sanitized</li>
              <li>No cookies or tracking without consent</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Responsible Disclosure</h2>
            <p className="text-gray-600 mb-6">
              We take security seriously and welcome responsible disclosure of any vulnerabilities found.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Reporting Security Issues</h3>
            <p className="text-gray-600 mb-4">
              If you discover a security vulnerability, please report it to us responsibly:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Email: security@yourdomain.com</li>
              <li>Phone: +254 799 656 369</li>
              <li>Do not publicly disclose the vulnerability</li>
              <li>Provide sufficient details for reproduction</li>
              <li>Allow reasonable time for response and fix</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">What to Include</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Description of the vulnerability</li>
              <li>Steps to reproduce</li>
              <li>Potential impact assessment</li>
              <li>Suggested fix (if any)</li>
              <li>Your contact information</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Security Updates</h2>
            <p className="text-gray-600 mb-6">
              We regularly update our security measures and dependencies to maintain the highest level of protection.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Update Schedule</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>Dependencies: Weekly security updates</li>
              <li>Security headers: Monthly review</li>
              <li>Rate limiting: Continuous monitoring</li>
              <li>Security audit: Quarterly review</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4">
                For security-related inquiries or vulnerability reports:
              </p>
              <div className="space-y-2">
                <p><strong>Security Team:</strong> security@yourdomain.com</p>
                <p><strong>Emergency Contact:</strong> +254 799 656 369</p>
                <p><strong>Response Time:</strong> Within 24 hours for initial response</p>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-800 text-sm">
                <strong>Note:</strong> This security policy is regularly reviewed and updated. 
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecurityPolicy
