import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#000000',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            color: '#D4824A',
            fontSize: 22,
            marginBottom: 32,
            fontFamily: 'sans-serif',
            letterSpacing: 2,
            textTransform: 'uppercase',
          }}
        >
          billymwangi.com
        </div>
        <div
          style={{
            color: '#E1E0CC',
            fontSize: 80,
            fontWeight: 800,
            fontFamily: 'sans-serif',
            lineHeight: 1.05,
            marginBottom: 24,
          }}
        >
          Billy Mwangi
        </div>
        <div
          style={{
            color: '#9CA3AF',
            fontSize: 34,
            fontFamily: 'sans-serif',
            marginBottom: 16,
          }}
        >
          AI Architect & Software Engineer
        </div>
        <div
          style={{
            color: '#6B7280',
            fontSize: 24,
            fontFamily: 'sans-serif',
          }}
        >
          Nairobi, Kenya · Founder of Hekima Labs
        </div>
      </div>
    ),
    { ...size }
  )
}
