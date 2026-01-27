'use client'

import { motion } from 'framer-motion'

const ReadyToWork = () => {
  return (
    <section className="bg-slate-900 py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center text-slate-50 sm:flex-row sm:text-left">
        <div>
          <h2 className="text-2xl font-semibold md:text-3xl">
            Ready to ship something reliable together?
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-300 md:text-base">
            If you&apos;re looking for someone who can think about code and infrastructure at the
            same time, I&apos;d love to hear about your team and challenges.
          </p>
        </div>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.96 }}
          className="inline-flex items-center rounded-full bg-slate-50 px-8 py-3 text-sm font-semibold text-slate-900 shadow-md transition-colors duration-200 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        >
          Let&apos;s talk
        </motion.a>
      </div>
    </section>
  )
}

export default ReadyToWork

