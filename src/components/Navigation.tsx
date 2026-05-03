// src/components/Navigation.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const ANCHOR_ITEMS = [
  { label: 'About',    anchor: 'about' },
  { label: 'Skills',   anchor: 'skills' },
  { label: 'Projects', anchor: 'projects' },
  { label: 'Contact',  anchor: 'contact' },
]

export function Navigation() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [open, setOpen] = useState(false)

  return (
    <motion.nav
      className="fixed top-0 left-1/2 -translate-x-1/2 z-50"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
    >
      {/* Pill */}
      <div className="bg-coal/90 backdrop-blur-md border border-smoke/40 rounded-b-2xl px-4 py-3 flex items-center gap-1">
        {/* Desktop links */}
        {ANCHOR_ITEMS.map(item => (
          <Link
            key={item.anchor}
            href={isHome ? `#${item.anchor}` : `/#${item.anchor}`}
            className="hidden md:block text-dm-label text-stone text-xs px-4 py-2 rounded-xl hover:text-cream-hi hover:bg-smoke/60 transition-all duration-200"
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/blog"
          className="hidden md:block text-dm-label text-xs px-4 py-2 rounded-xl transition-all duration-200 text-ember hover:text-dusk hover:bg-smoke/60"
        >
          Blog
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center gap-2 text-stone hover:text-cream-hi transition-colors duration-200 px-3 py-1.5 rounded-xl hover:bg-smoke/60"
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className="text-dm-label text-xs text-ember">Menu</span>
          {open ? <X size={14} /> : <Menu size={14} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-1 w-44 bg-coal/95 backdrop-blur-md border border-smoke/40 rounded-2xl px-2 py-2 flex flex-col"
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            {ANCHOR_ITEMS.map(item => (
              <Link
                key={item.anchor}
                href={isHome ? `#${item.anchor}` : `/#${item.anchor}`}
                onClick={() => setOpen(false)}
                className="text-dm-label text-stone text-xs px-4 py-2.5 rounded-xl hover:text-cream-hi hover:bg-smoke/60 transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/blog"
              onClick={() => setOpen(false)}
              className="text-dm-label text-xs px-4 py-2.5 rounded-xl transition-all duration-200 text-ember hover:text-dusk hover:bg-smoke/60"
            >
              Blog
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
