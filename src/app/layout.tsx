// src/app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { Almarai, DM_Sans, Instrument_Serif } from 'next/font/google'
import { BackgroundOrbs } from '@/components/ui/BackgroundOrbs'
import { Navigation } from '@/components/Navigation'
import { SITE_URL } from '@/lib/config'
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
  metadataBase: new URL(SITE_URL),
  title: 'Billy Mwangi | AI Architect & Software Engineer',
  description: 'Nairobi-based AI Architect and Software Engineer. Founder of Hekima Labs. Building intelligent systems for African businesses.',
  keywords: [
    'AI Engineer Kenya',
    'Machine Learning Nairobi',
    'African AI',
    'Hekima Labs',
    'Software Engineer Nairobi',
    'FastAPI',
    'Next.js',
    'Billy Mwangi',
  ],
  authors: [{ name: 'Billy Mwangi', url: SITE_URL }],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Billy Mwangi | AI Architect & Software Engineer',
    description: 'Nairobi-based AI Architect and Software Engineer. Founder of Hekima Labs. Building intelligent systems for African businesses.',
    type: 'website',
    url: SITE_URL,
    siteName: 'Billy Mwangi',
    locale: 'en_KE',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@billymwangidev',
    creator: '@billymwangidev',
    title: 'Billy Mwangi | AI Architect & Software Engineer',
    description: 'Nairobi-based AI Architect and Software Engineer. Founder of Hekima Labs.',
  },
  other: {
    'geo.region': 'KE-110',
    'geo.placename': 'Nairobi, Kenya',
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
  colorScheme: 'dark',
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Billy Mwangi',
  jobTitle: 'AI Architect & Software Engineer',
  url: SITE_URL,
  email: 'billymwangi200@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },
  sameAs: [
    'https://github.com/billymwangidev',
    'https://www.linkedin.com/in/billy-mwangi-5b6b5926a',
    'https://x.com/billymwangidev',
  ],
  knowsAbout: [
    'Artificial Intelligence',
    'Machine Learning',
    'Software Engineering',
    'FastAPI',
    'Next.js',
    'Kenya Tech Ecosystem',
    'African AI',
  ],
  founder: { '@type': 'Organization', name: 'Hekima Labs' },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Hekima Labs',
  url: 'https://hekimalabs.tech',
  description: 'AI solutions for African businesses',
  founder: { '@type': 'Person', name: 'Billy Mwangi' },
  location: {
    '@type': 'Place',
    address: { addressLocality: 'Nairobi', addressCountry: 'KE' },
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Billy Mwangi',
  url: SITE_URL,
  author: { '@type': 'Person', name: 'Billy Mwangi' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`dark ${almarai.variable} ${dmSans.variable} ${instrumentSerif.variable}`}
    >
      <body className="bg-void text-cream font-dm-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <BackgroundOrbs />
        <Navigation />
        {children}
      </body>
    </html>
  )
}
