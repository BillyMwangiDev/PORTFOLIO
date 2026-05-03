'use client'

import { m } from 'framer-motion'
import { skills } from '@/lib/data'

export function Skills() {
  return (
    <section id="skills" className="bg-void py-24 md:py-32 px-6 md:px-14">
      <div className="max-w-5xl mx-auto">
        <m.p
          className="text-dm-label text-ember text-xs mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </m.p>
        <m.h2
          className="font-almarai font-bold text-cream-hi text-3xl md:text-4xl mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          What I work with
        </m.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((category, i) => (
            <m.div
              key={category.label}
              className="bg-coal rounded-2xl p-6 border border-smoke/50 hover:border-smoke transition-colors duration-200"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
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
