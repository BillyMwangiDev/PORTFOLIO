// src/components/Navigation.tsx
'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const ANCHOR_ITEMS = [
  { label: 'About',    anchor: 'about' },
  { label: 'Skills',   anchor: 'skills' },
  { label: 'Projects', anchor: 'projects' },
  { label: 'Contact',  anchor: 'contact' },
]

export function Navigation() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <motion.nav
      className="fixed top-0 left-1/2 -translate-x-1/2 z-50"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
    >
      <div className="bg-coal/90 backdrop-blur-md border border-smoke/40 rounded-b-2xl px-6 py-3 flex items-center gap-1">
        {ANCHOR_ITEMS.map(item => (
          <Link
            key={item.anchor}
            href={isHome ? `#${item.anchor}` : `/#${item.anchor}`}
            className="text-dm-label text-stone text-xs px-4 py-2 rounded-xl hover:text-cream-hi hover:bg-smoke/60 transition-all duration-200"
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/blog"
          className="text-dm-label text-xs px-4 py-2 rounded-xl transition-all duration-200 text-ember hover:text-dusk hover:bg-smoke/60"
        >
          Blog
        </Link>
      </div>
    </motion.nav>
  )
}
