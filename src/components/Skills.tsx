'use client'

import { useRef } from 'react'
import { m, useInView } from 'framer-motion'
import { skills } from '@/lib/data'

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '0px' })

  return (
    <section ref={sectionRef} id="skills" className="bg-void py-24 md:py-32 px-6 md:px-14">
      <div className="max-w-5xl mx-auto">
        <m.p
          className="text-dm-label text-ember text-xs mb-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </m.p>
        <m.h2
          className="font-almarai font-bold text-cream-hi text-3xl md:text-4xl mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          What I work with
        </m.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((category, i) => (
            <m.div
              key={category.label}
              className="bg-coal rounded-2xl p-6 border border-smoke/50 hover:border-smoke transition-colors duration-200"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <p className="text-dm-label text-ember text-[10px] mb-4">{category.label}</p>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="text-stone text-xs bg-graphite px-3 py-1 rounded-full border border-smoke/40"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
