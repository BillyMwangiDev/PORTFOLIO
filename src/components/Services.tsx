'use client'

import { motion, useInView } from 'framer-motion'
import { ServerCog, Wrench, Lightbulb } from 'lucide-react'
import { useRef } from 'react'

const services = [
  {
    icon: ServerCog,
    title: 'Backend & APIs',
    body: 'Design and implement clean, well‑documented APIs in Python/Django and FastAPI, backed by relational databases that are easy to evolve.',
    points: ['REST & GraphQL APIs', 'Authentication & authorization', 'Database design & migrations'],
  },
  {
    icon: Wrench,
    title: 'Systems & DevOps',
    body: 'Bridge the gap between code and infrastructure with pragmatic automation, observability, and deployment pipelines.',
    points: ['CI/CD pipelines', 'Docker & containerization', 'Monitoring, backups & incident response'],
  },
  {
    icon: Lightbulb,
    title: 'Technical consulting',
    body: 'Help teams reason about trade‑offs, improve reliability, and modernize systems without stopping the business.',
    points: ['Architecture reviews', 'Migration planning', 'Developer enablement & documentation'],
  },
]

const Services = () => {
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
            How I can help your team
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Whether you need someone to own a backend project end‑to‑end or reinforce your
            infrastructure, I slot into existing teams smoothly.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.4, delay: 0.15 * index }}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 text-left shadow-sm"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-slate-50">
                <service.icon size={20} />
              </div>
              <h3 className="mb-2 text-base font-semibold text-slate-900">{service.title}</h3>
              <p className="mb-4 text-sm text-slate-600">{service.body}</p>
              <ul className="mt-auto space-y-1 text-sm text-slate-600">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

