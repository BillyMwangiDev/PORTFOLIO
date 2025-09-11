'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const strengths = [
    "Full-stack development with Python, Django, and modern web technologies",
    "Enterprise IT infrastructure management and automation",
    "AI/ML model optimization and performance improvement",
    "DevOps practices and system reliability enhancement",
    "Problem-solving mindset with analytical approach",
    "Passion for learning and staying current with technology trends"
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
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
            Bridging IT infrastructure expertise with backend development to create robust, scalable solutions
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
              My Journey
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-gray-600 leading-relaxed"
            >
              With a strong foundation in IT infrastructure and systems administration, I bring a unique perspective to software development. 
              My experience managing enterprise-level systems, troubleshooting complex technical issues, and implementing automation solutions 
              has given me deep insights into how applications perform in real-world environments. This background enables me to build 
              backend systems that are not only functional but also robust, scalable, and maintainable.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-gray-600 leading-relaxed"
            >
              My journey into backend development with Python and Django has been driven by a passion for creating efficient, data-driven 
              solutions. I&apos;ve successfully built full-stack applications, improved AI model accuracy by 20%, and reduced system downtime 
              by 15% through proactive infrastructure management. I thrive on solving complex problems and building systems that not only 
              meet current needs but can scale for future growth. I&apos;m passionate about—and proficient with—AI tools that enhance development efficiency, 
              from rapid prototyping to smarter automation in everyday workflows.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-gray-600 leading-relaxed"
            >
              What drives me is the challenge of turning complex problems into elegant solutions. I love diving deep into system architecture, 
              optimizing performance, and building robust applications that can handle real-world demands. I bring a Systems Administrator mindset 
              to software: observability, automation, and reliability first. And as an aspiring backend developer, I&apos;m always refining how I design 
              APIs, data models, and services that are clear, scalable, and maintainable.
            </motion.p>
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
              My Strengths
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
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    transition={{ duration: 0.3 }}
                    className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-2 flex-shrink-0 group-hover:from-blue-600 group-hover:to-indigo-700 transition-all duration-200"
                  />
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
                &ldquo;Technology is best when it brings people together.&rdquo; - Matt Mullenweg
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
