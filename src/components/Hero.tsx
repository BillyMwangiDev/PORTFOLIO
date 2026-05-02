'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { WordsPullUp } from './ui/WordsPullUp'

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-void overflow-hidden">
      <div
        className="
          absolute inset-3 md:inset-5
          rounded-2xl md:rounded-3xl
          overflow-hidden
          noise-overlay
        "
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% -20%, #2C2C2C, transparent),
            radial-gradient(ellipse 55% 45% at 85% 85%, #3D1C0A, transparent),
            linear-gradient(160deg, #101010 0%, #000000 100%)
          `,
        }}
      >
        <div className="relative z-10 h-full flex flex-col justify-end px-8 pb-16 md:px-14 md:pb-20 pt-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">

            <div className="flex-1">
              <motion.p
                className="text-dm-label text-stone text-xs mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                AI Architect & Software Engineer
              </motion.p>
              <h1 className="font-almarai font-extrabold text-cream-hi leading-[1] text-[13vw] md:text-[8vw]">
                <WordsPullUp text="Billy" delayOffset={0.1} />
                <br />
                <WordsPullUp text="Mwangi" delayOffset={0.22} />
              </h1>
            </div>

            <div className="md:max-w-xs flex flex-col gap-5 md:pb-2">
              <div>
                <p className="font-instrument italic text-dusk text-lg mb-2">
                  Building Africa&apos;s intelligent future
                </p>
                <p className="text-stone text-sm leading-relaxed font-dm-sans">
                  Founder of{' '}
                  <a href="https://hekimalabs.tech" target="_blank" rel="noopener noreferrer" className="text-ember hover:text-dusk transition-colors duration-200">Hekima Labs</a>
                  . Crafting AI systems, automation workflows, and full-stack products for African businesses, from Nairobi, Kenya.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <motion.a
                  href="#projects"
                  className="inline-flex items-center gap-3 bg-ember hover:bg-dusk text-void font-dm-sans font-medium text-sm px-5 py-3 rounded-full transition-colors duration-200"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  View Work
                  <span className="w-6 h-6 rounded-full bg-void/20 flex items-center justify-center">
                    <ArrowUpRight size={13} />
                  </span>
                </motion.a>
                <motion.a
                  href="/resume/Billy_Mwangi.pdf"
                  download
                  className="text-dm-label text-stone text-xs hover:text-cream-hi transition-colors duration-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.85, duration: 0.5 }}
                >
                  Resume
                </motion.a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
