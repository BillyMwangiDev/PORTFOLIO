'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'
import { socialLinks } from '@/lib/data'

const navLinks = [
  { label: 'About',    href: '/#about' },
  { label: 'Skills',   href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact',  href: '/#contact' },
  { label: 'Blog',     href: '/blog' },
]

const socials = [
  { label: 'GitHub',      href: socialLinks.github,            icon: <Github size={14} /> },
  { label: 'LinkedIn',    href: socialLinks.linkedin,           icon: <Linkedin size={14} /> },
  { label: 'Email',       href: `mailto:${socialLinks.email}`,  icon: <Mail size={14} /> },
  { label: 'X / Twitter', href: socialLinks.x,                  icon: <span className="text-xs font-bold leading-none">X</span> },
  { label: 'TikTok',      href: socialLinks.tiktok,             icon: <span className="text-xs font-bold leading-none">♪</span> },
]

export function Footer() {
  return (
    <footer className="bg-coal border-t border-smoke/30">
      <div className="max-w-5xl mx-auto px-6 md:px-14 pt-14 pb-8">

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 pb-12 border-b border-smoke/30">

          {/* Brand */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <Image
                src="/bm-logo.png"
                alt="Billy Mwangi"
                width={36}
                height={36}
                className="opacity-90 invert mix-blend-screen"
              />
              <div className="flex flex-col">
                <span className="text-dm-label text-cream-hi text-xs">Billy Mwangi</span>
                <span className="text-dm-label text-slate text-[10px] mt-0.5">Hekima Labs</span>
              </div>
            </div>
            <p className="font-instrument italic text-stone text-sm leading-relaxed">
              Building Africa&apos;s intelligent future — from Nairobi.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <p className="text-dm-label text-ember text-[10px] mb-5">Navigate</p>
            <ul className="flex flex-col gap-3">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-dm-label text-stone text-xs hover:text-cream-hi transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            <p className="text-dm-label text-ember text-[10px] mb-5">Connect</p>
            <ul className="flex flex-col gap-3">
              {socials.map(({ label, href, icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-dm-label text-stone text-xs hover:text-cream-hi transition-colors duration-200 group"
                  >
                    <span className="text-ember group-hover:text-dusk transition-colors duration-200 w-4 flex items-center justify-center">
                      {icon}
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6">
          <span className="text-slate text-xs font-dm-sans">
            © 2026 Billy Mwangi · Hekima Labs
          </span>
          <a
            href="/resume/Billy_Mwangi.pdf"
            download
            className="text-dm-label text-stone text-xs hover:text-ember transition-colors duration-200"
          >
            Download Resume
          </a>
        </div>

      </div>
    </footer>
  )
}
