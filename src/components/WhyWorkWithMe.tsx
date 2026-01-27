'use client'

import { CheckCircle2, ShieldCheck, Zap, Layers } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const valueProps = [
  {
    icon: CheckCircle2,
    title: 'Systems-first mindset',
    body: 'I think like an SRE and a backend engineer at the same time—designing features that are easier to run, monitor, and debug in production.',
  },
  {
    icon: ShieldCheck,
    title: 'Production-grade practices',
    body: 'From backups and security hardening to CI/CD and observability, I bring real-world infrastructure habits into every project.',
  },
  {
    icon: Zap,
    title: 'Bias for automation',
    body: 'If it needs to be done twice, I try to script it—saving time, reducing errors, and leaving teams with tools they can reuse.',
  },
  {
    icon: Layers,
    title: 'Clear communication',
    body: 'I document decisions, explain trade‑offs, and keep stakeholders in the loop so work never feels like a black box.',
  },
]

const WhyWorkWithMe = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Why work with me
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Beyond code, I bring operational experience, steady communication, and a focus on
            shipping systems that stay healthy long after launch.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {valueProps.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.4, delay: 0.15 * index }}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 shadow-sm"
            >
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-slate-50">
                <item.icon size={20} />
              </div>
              <div>
                <h3 className="mb-1 text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyWorkWithMe

