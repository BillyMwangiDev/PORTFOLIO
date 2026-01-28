'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const strengths = [
    'Backend development with Python, Django, and REST APIs',
    'Systems administration, automation, and reliability in production environments',
    'AI-assisted development and creative problem solving',
    'DevOps practices: Docker, CI/CD concepts, and infrastructure scripting',
    'Backup, recovery and virtualization with Nutanix & Veeam',
    'Designing practical, ethical, and locally relevant tech solutions',
  ]

  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            System Administrator and backend developer in training at ALX, combining reliability, automation, and AI-driven problem solving to ship practical solutions.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-2xl font-semibold text-gray-900"
            >
              Mission & Journey
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-gray-600 leading-relaxed space-y-4"
            >
              <p>
                I&apos;m a System Administrator and backend developer in training at <strong>ALX</strong>, passionate about creating AI-driven and locally tailored solutions that address real African challenges.
              </p>
              <p>
                My mission is to use technology and creativity to design practical, ethical, and sustainable systems that make a real difference in people&apos;s lives. I enjoy combining system reliability with innovative development to build tools that improve performance, automate workflows, and make technology more accessible.
              </p>
              <p>
                Over time, I&apos;ve grown from fixing day-to-day issues to designing and building the platforms behind them: APIs, automation scripts, backup playbooks, and operational tools that help teams move faster and break less.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Strengths */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-2xl font-semibold text-gray-900"
            >
              Core Skills
            </motion.h3>
            
            <div className="space-y-4">
              {strengths.map((strength, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  className="flex items-start space-x-3 group"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-2 flex-shrink-0 group-hover:from-blue-600 group-hover:to-indigo-700 transition-all duration-200 group-hover:scale-110 group-hover:rotate-180" />
                  <span className="text-gray-600 group-hover:text-gray-800 transition-colors duration-200">{strength}</span>
                </motion.div>
              ))}
            </div>

            {/* Additional highlight box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="mt-6 p-6 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <p className="text-blue-800 text-sm font-medium">
                &ldquo;Technology is best when it connects people and solves real problems.&rdquo; - Billy Mwangi
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
