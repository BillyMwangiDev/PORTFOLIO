import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://billymwangi.com'),
  title: 'Billy Mwangi - System Administrator & Backend Developer',
  description:
    'Portfolio of Billy Mwangi, a System Administrator and backend developer in training at ALX, focused on AI-driven and locally tailored solutions that combine system reliability, automation, and modern backend development.',
  keywords:
    'Billy Mwangi, System Administrator, Backend Developer, ALX, Portfolio, Automation, AI-driven solutions, Django, Python',
  authors: [{ name: 'Billy Mwangi' }],
  creator: 'Billy Mwangi',
  openGraph: {
    title: 'Billy Mwangi - System Administrator & Backend Developer',
    description:
      'System Administrator and backend developer in training at ALX, building AI-assisted, reliable and locally relevant solutions for real-world problems.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
