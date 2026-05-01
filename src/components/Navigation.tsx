'use client'

import { motion } from 'framer-motion'

const navItems = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

export function Navigation() {
  return (
    <motion.nav
      className="fixed top-0 left-1/2 -translate-x-1/2 z-50"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
    >
      <div className="bg-coal/90 backdrop-blur-md border border-smoke/40 rounded-b-2xl px-6 py-3 flex items-center gap-1">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-dm-label text-stone text-xs px-4 py-2 rounded-xl hover:text-cream-hi hover:bg-smoke/60 transition-all duration-200"
          >
            {item.label}
          </a>
        ))}
      </div>
    </motion.nav>
  )
}
