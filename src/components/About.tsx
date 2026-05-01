'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { stats } from '@/lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
}

export function About() {
  return (
    <section id="about" className="bg-coal py-24 md:py-32 px-6 md:px-14">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="text-dm-label text-ember text-xs mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About
        </motion.p>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          <div>
            <motion.div
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden mb-8 border border-smoke"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src="/billy-mwangi.jpg"
                alt="Billy Mwangi"
                fill
                sizes="(max-width: 768px) 192px, 256px"
                className="object-cover object-top"
                priority
              />
            </motion.div>

            <motion.h2
              className="font-almarai font-bold text-cream-hi text-3xl md:text-4xl mb-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Billy Mwangi
            </motion.h2>
            <motion.p
              className="font-instrument italic text-dusk text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              AI Architect & Software Engineer — Nairobi
            </motion.p>
          </div>

          <div className="flex flex-col gap-8">
            <motion.p
              className="text-stone leading-relaxed text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              I build AI-powered systems and full-stack products for African businesses. With three years of Python and a year specialising in backend architecture, I focus on systems that are reliable, fast, and built for real constraints — offline-capable, low-bandwidth, and cost-conscious.
            </motion.p>
            <motion.p
              className="text-stone leading-relaxed text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              I founded Hekima Labs to bring intelligent automation to SMEs across the continent. My stack spans FastAPI, Django, React, React Native, and Next.js — whatever the problem needs.
            </motion.p>

            <div className="grid grid-cols-2 gap-4 mt-2">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-graphite rounded-xl p-4 border border-smoke/50"
                >
                  <p className="font-almarai font-bold text-ember text-2xl">{stat.value}</p>
                  <p className="text-dm-label text-stone text-[10px] mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
