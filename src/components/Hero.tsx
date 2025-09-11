'use client'

import { Download, Mail, ArrowDown } from 'lucide-react'
import Image from 'next/image'
import ParticleBackground from './ParticleBackground'
import { motion } from 'framer-motion'

const Hero = () => {
  const handleDownloadResume = () => {
    // Create a link element to download the PDF
    const link = document.createElement('a')
    link.href = '/Billy_Mwangi.pdf'
    link.download = 'Billy_Mwangi_Resume.pdf'
    link.click()
  }

  const handleContact = () => {
    // Open email client with your email
    window.open('mailto:billymwangi200@gmail.com?subject=Portfolio Inquiry&body=Hi Billy, I saw your portfolio and would like to get in touch!', '_blank')
  }

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 min-h-screen flex items-center relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Unified Content Box with Integrated Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-100/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-200 overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Text Content - Left Side */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex-1 text-center lg:text-left"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
                >
                  Billy Mwangi
                </motion.h1>
                
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 mb-6"
                >
                  Building the Future, One Line of Code at a Time
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8"
                >
                  I&apos;m Billy, a Systems Administrator who fell in love with building things that actually work. For me, there&apos;s something magical about writing code that solves real problems and seeing it run smoothly in production. I care about clean architecture, reliable systems, and finding smarter ways to work, often by using AI tools to speed up development without sacrificing quality. These days, I&apos;m diving deep into backend development with Python and Django, combining my infrastructure know-how with modern web development to create systems that are both robust and scalable.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleContact}
                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer"
                  >
                    <Mail className="mr-3" size={22} />
                    Let&apos;s Connect
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleDownloadResume}
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    <Download className="mr-3" size={22} />
                    Download Resume
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Profile Picture - Integrated into the box */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex-shrink-0"
              >
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                    className="w-64 h-64 lg:w-72 lg:h-72 rounded-full shadow-2xl overflow-hidden border-4 border-blue-200 bg-white relative"
                  >
                    <Image
                      src="/profile-photo.jpg"
                      alt="Billy Mwangi - IT Administrator & Software Engineer"
                      width={288}
                      height={288}
                      className="w-full h-full object-cover"
                      priority
                    />
                    
                    {/* Subtle gradient overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10" />
                  </motion.div>
                  
                  {/* Enhanced decorative elements */}
                  <motion.div
                    animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg border-2 border-white"
                  />
                  <motion.div
                    animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full shadow-lg border-2 border-white"
                  />
                  
                  {/* Additional floating element */}
                  <motion.div
                    animate={{ y: [0, -10, 0], rotate: [0, 180, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 -right-6 w-4 h-4 bg-blue-300/60 rounded-full"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center mt-12"
          >
            <div className="flex items-center justify-center">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="animate-bounce"
              >
                <ArrowDown className="text-blue-600" size={24} />
              </motion.div>
              <span className="ml-3 text-gray-600 text-lg">Scroll to explore</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
