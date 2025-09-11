import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Billy Mwangi - IT Admin & Software Engineer',
  description: 'Professional portfolio of Billy Mwangi, IT Administrator and Software Engineer specializing in system administration, software development, and IT solutions.',
  keywords: 'Billy Mwangi, IT Admin, Software Engineer, Portfolio, System Administration, Software Development',
  authors: [{ name: 'Billy Mwangi' }],
  creator: 'Billy Mwangi',
  openGraph: {
    title: 'Billy Mwangi - IT Admin & Software Engineer',
    description: 'Professional portfolio showcasing IT administration and software engineering expertise',
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
