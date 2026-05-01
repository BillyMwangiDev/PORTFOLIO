import type { Metadata } from 'next'
import { Almarai, DM_Sans, Instrument_Serif } from 'next/font/google'
import './globals.css'

const almarai = Almarai({
  subsets: ['latin'],
  weight: ['300', '700', '800'],
  variable: '--font-almarai',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic'],
  variable: '--font-instrument',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Billy Mwangi — AI Architect & Software Engineer',
  description: 'Nairobi-based AI Architect and Software Engineer. Founder of Hekima Labs. Building intelligent systems for African businesses.',
  keywords: ['AI Engineer', 'Software Engineer', 'FastAPI', 'Next.js', 'Nairobi', 'Hekima Labs'],
  authors: [{ name: 'Billy Mwangi', url: 'https://github.com/billymwangidev' }],
  openGraph: {
    title: 'Billy Mwangi — AI Architect & Software Engineer',
    description: 'Nairobi-based AI Architect and Software Engineer. Founder of Hekima Labs.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`dark ${almarai.variable} ${dmSans.variable} ${instrumentSerif.variable}`}
    >
      <body className="bg-void text-cream font-dm-sans antialiased">
        {children}
      </body>
    </html>
  )
}
