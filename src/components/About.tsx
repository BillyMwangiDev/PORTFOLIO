'use client'

import { useRef } from 'react'
import { m, useInView } from 'framer-motion'
import Image from 'next/image'
import { stats } from '@/lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
}

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '0px' })

  return (
    <section ref={sectionRef} id="about" className="bg-coal/85 py-24 md:py-32 px-6 md:px-14">
      <div className="max-w-5xl mx-auto">
        <m.p
          className="text-dm-label text-ember text-xs mb-10"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
          variants={fadeUp}
        >
          About
        </m.p>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Profile block */}
          <div className="flex flex-col items-center md:items-start">
            <m.div
              className="relative w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden mb-8 border border-smoke"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Image
                src="/billy-mwangi.jpg"
                alt="Billy Mwangi"
                fill
                sizes="(max-width: 768px) 224px, 256px"
                className="object-cover object-top"
                priority
              />
            </m.div>

            <m.h2
              className="font-almarai font-bold text-cream-hi text-3xl md:text-4xl mb-1 text-center md:text-left"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={0.1}
              variants={fadeUp}
            >
              Billy Mwangi
            </m.h2>
            <m.p
              className="font-instrument italic text-dusk text-base text-center md:text-left"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={0.2}
              variants={fadeUp}
            >
              AI Architect & Software Engineer, Nairobi
            </m.p>
          </div>

          {/* Bio + stats */}
          <div className="flex flex-col gap-8">
            <m.p
              className="text-stone leading-relaxed text-base"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={0.15}
              variants={fadeUp}
            >
              I build AI-powered systems and full-stack products for African businesses. With three years of Python and a year specialising in backend architecture, I focus on systems that are reliable, fast, and built for real constraints: offline-capable, low-bandwidth, and cost-conscious.
            </m.p>
            <m.p
              className="text-stone leading-relaxed text-base"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={0.25}
              variants={fadeUp}
            >
              I founded{' '}
              <a href="https://hekimalabs.tech" target="_blank" rel="noopener noreferrer" className="text-ember hover:text-dusk transition-colors duration-200">
                Hekima Labs
              </a>{' '}
              to bring intelligent automation to SMEs across the continent. My stack spans FastAPI, Django, React, React Native, and Next.js, whatever the problem needs.
            </m.p>

            <div className="grid grid-cols-2 gap-4 mt-2">
              {stats.map((stat, i) => (
                <m.div
                  key={stat.label}
                  className="bg-graphite rounded-xl p-4 border border-smoke/50"
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  custom={0.3 + i * 0.07}
                  variants={fadeUp}
                >
                  <p className="font-almarai font-bold text-ember text-2xl">{stat.value}</p>
                  <p className="text-dm-label text-stone text-[10px] mt-1">{stat.label}</p>
                </m.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
