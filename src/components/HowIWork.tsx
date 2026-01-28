'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Search, Workflow, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Discover',
    body: 'Clarify goals, constraints, and the real problem behind the feature. I translate business context into a simple technical plan.',
  },
  {
    icon: Workflow,
    title: 'Design & build',
    body: 'Design APIs, data models, and deployment flows that are easy to reason about, test, and operate. Small, reviewable increments.',
  },
  {
    icon: Rocket,
    title: 'Ship & iterate',
    body: 'Deploy, observe, and improve. I measure impact, watch logs and metrics, and fold learning back into the system.',
  },
]

const HowIWork = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">How I work</h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            A simple, repeatable flow that keeps projects moving forward while staying kind to
            infrastructure and the people running it.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.4, delay: 0.15 * index }}
              className="flex flex-col items-start rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-slate-50">
                <step.icon size={20} />
              </div>
              <h3 className="mb-2 text-base font-semibold text-slate-900">{step.title}</h3>
              <p className="text-sm text-slate-600">{step.body}</p>
              <span className="mt-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                Step {index + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowIWork

