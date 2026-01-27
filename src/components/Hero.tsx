'use client'

import { Download, Mail, ArrowDown, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import ParticleBackground from './ParticleBackground'
import { motion } from 'framer-motion'

const Hero = () => {
  const handleDownloadResume = () => {
    // Create a link element to download the PDF
    const link = document.createElement('a')
    link.href = '/Billy_Mwangi.pdf'
    link.download = 'Billy_Mwangi.pdf'
    link.click()
  }

  const handleContact = () => {
    // Open email client with your email
    window.open('mailto:billymwangi200@gmail.com?subject=Portfolio Inquiry&body=Hi Billy, I saw your portfolio and would like to get in touch!', '_blank')
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 pt-24 pb-16"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <ParticleBackground />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-xl backdrop-blur-sm lg:p-12"
          >
            <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-stretch">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex-1 text-center lg:flex lg:flex-col lg:justify-center lg:text-left"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="mb-4 text-4xl font-semibold leading-tight text-slate-900 md:text-5xl lg:text-6xl"
                >
                  The systems-minded engineer<br className="hidden md:block" /> behind reliable tech
                </motion.h1>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="mb-4 text-lg font-medium text-slate-700 md:text-xl"
                >
                  Reach new heights with an IT admin & backend engineer
                  who cares about uptime, clean code, and real business impact.
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  className="mb-8 max-w-xl text-sm text-slate-600 md:text-base"
                >
                  I blend years of systems administration with modern backend
                  development in Python & Django to build infrastructure-aware
                  applications that are stable, scalable, and easy to operate.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-start"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleContact}
                    className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-slate-800"
                  >
                    <Mail className="mr-3" size={22} />
                    Let&apos;s talk about your next project
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleDownloadResume}
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 px-8 py-3 text-sm font-semibold text-slate-900 transition-colors duration-200 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
                  >
                    <Download className="mr-3" size={22} />
                    Download resume
                  </motion.button>
                </motion.div>

                {/* Feature pills mirroring Tana-style value props */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="mt-8 grid gap-2 text-left text-xs text-slate-600 sm:grid-cols-2 md:text-sm"
                >
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                      <CheckCircle2 size={14} />
                    </span>
                    <span>Tech-savvy across systems, cloud & backend</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <CheckCircle2 size={14} />
                    </span>
                    <span>Clear communication, documentation & handover</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                      <CheckCircle2 size={14} />
                    </span>
                    <span>Timezone aligned with EMEA teams</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                      <CheckCircle2 size={14} />
                    </span>
                    <span>Cost-effective without cutting corners on quality</span>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-1 items-center justify-center lg:justify-end"
              >
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-72 w-72 overflow-hidden rounded-[2.25rem] border border-slate-200 bg-transparent shadow-2xl sm:h-80 sm:w-80 lg:h-96 lg:w-96"
                  >
                    <Image
                      src="/profile-photo.jpg"
                      alt="Billy Mwangi - IT Administrator & Software Engineer"
                      width={384}
                      height={384}
                      className="h-full w-full object-cover"
                      priority
                    />

                    {/* Soft radial + vertical blend so the portrait melts into the page background */}
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,250,252,0.85),_transparent_60%),linear-gradient(to-bottom,rgba(248,250,252,0.9),transparent_55%)] mix-blend-soft-light" />

                    <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/90 p-3 text-left shadow-lg backdrop-blur">
                      <p className="text-xs font-medium text-slate-500">
                        IT Admin • Backend Engineering • DevOps-minded
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-900">
                        Helping teams ship reliable systems faster.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -right-4 -top-4 h-10 w-10 rounded-full border-2 border-white bg-gradient-to-br from-sky-400 to-blue-600 shadow-lg"
                  />
                  <motion.div
                    animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-4 -left-4 h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg"
                  />
                  <motion.div
                    animate={{ y: [0, -10, 0], rotate: [0, 180, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 -right-6 h-5 w-5 rounded-full bg-sky-300/70"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-10 text-center"
          >
            <div className="flex items-center justify-center">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="animate-bounce"
              >
                <ArrowDown className="text-blue-600" size={24} />
              </motion.div>
              <span className="ml-3 text-sm text-slate-500 md:text-base">
                Scroll to explore the work behind the profile
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
