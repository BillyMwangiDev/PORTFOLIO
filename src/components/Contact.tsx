'use client'

import { useRef } from 'react'
import { m, useInView } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { socialLinks } from '@/lib/data'

const iconSocials = [
  { label: 'GitHub',   href: socialLinks.github,           Icon: Github },
  { label: 'LinkedIn', href: socialLinks.linkedin,          Icon: Linkedin },
  { label: 'Email',    href: `mailto:${socialLinks.email}`, Icon: Mail },
]

const textSocials = [
  { label: 'X / Twitter', href: socialLinks.x,     symbol: 'X' },
  { label: 'TikTok',      href: socialLinks.tiktok, symbol: '♪' },
]

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '0px' })

  return (
    <section ref={sectionRef} id="contact" className="bg-void py-24 md:py-32 px-6 md:px-14">
      <div className="max-w-5xl mx-auto">
        <m.p
          className="text-dm-label text-ember text-xs mb-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact
        </m.p>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          <div>
            <m.h2
              className="font-almarai font-bold text-cream-hi text-3xl md:text-4xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Let&apos;s build something
            </m.h2>
            <m.p
              className="font-instrument italic text-dusk text-lg mb-6"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              for Africa, from Africa.
            </m.p>
            <m.p
              className="text-stone text-sm leading-relaxed mb-8"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ delay: 0.25, duration: 0.5 }}
            >
              Open to contract work, collaborations, and co-founder conversations. Based in Nairobi, available remotely.
            </m.p>
            <m.a
              href={`mailto:${socialLinks.email}`}
              className="inline-flex items-center gap-3 bg-ember hover:bg-dusk text-void font-dm-sans font-medium text-sm px-6 py-3 rounded-full transition-colors duration-200"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Send me an email
            </m.a>
          </div>

          <m.div
            className="flex flex-col gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {iconSocials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-coal rounded-xl px-5 py-4 border border-smoke/40 hover:border-ember/40 group transition-colors duration-200"
              >
                <Icon size={18} className="text-ember" />
                <span className="text-dm-label text-stone text-xs group-hover:text-cream-hi transition-colors duration-200">
                  {label}
                </span>
              </a>
            ))}
            {textSocials.map(({ label, href, symbol }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-coal rounded-xl px-5 py-4 border border-smoke/40 hover:border-ember/40 group transition-colors duration-200"
              >
                <span className="w-[18px] text-center text-ember font-bold text-sm leading-none">{symbol}</span>
                <span className="text-dm-label text-stone text-xs group-hover:text-cream-hi transition-colors duration-200">
                  {label}
                </span>
              </a>
            ))}
          </m.div>
        </div>
      </div>
    </section>
  )
}
