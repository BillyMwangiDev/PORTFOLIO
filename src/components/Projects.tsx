'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/data'

export function Projects() {
  return (
    <section id="projects" className="bg-coal py-24 md:py-32 px-6 md:px-14">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="text-dm-label text-ember text-xs mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.p>
        <motion.h2
          className="font-almarai font-bold text-cream-hi text-3xl md:text-4xl mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Things I&apos;ve{' '}
          <span className="font-instrument italic text-dusk">built</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              className="group bg-graphite rounded-2xl p-6 border border-smoke/40 hover:border-ember/40 transition-colors duration-300 flex flex-col gap-4"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-start justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-dm-sans font-medium text-ember bg-char/60 px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-smoke group-hover:text-ember transition-colors duration-200 shrink-0 mt-0.5"
                />
              </div>

              <div className="flex-1">
                <h3 className="font-almarai font-bold text-cream-hi text-lg mb-2">{project.title}</h3>
                <p className="text-stone text-sm leading-relaxed">{project.description}</p>
              </div>

              <p className="text-dm-label text-slate text-[9px]">{project.role}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
