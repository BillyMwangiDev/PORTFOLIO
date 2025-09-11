'use client'

import { Heart } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <motion.h3
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="text-xl font-bold"
            >
              Billy Mwangi
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-300 text-sm leading-relaxed"
            >
              IT Administrator & Software Engineer passionate about creating efficient 
              IT solutions and innovative software applications.
            </motion.p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <motion.h4
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg font-semibold"
            >
              Quick Links
            </motion.h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5, color: '#3B82F6' }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm inline-block"
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <motion.h4
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg font-semibold"
            >
              Contact
            </motion.h4>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="space-y-2 text-sm text-gray-300"
            >
              <motion.p
                whileHover={{ color: '#3B82F6' }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer"
              >
                billymwangi200@gmail.com
              </motion.p>
              <motion.p
                whileHover={{ color: '#3B82F6' }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer"
              >
                +254 799 656 369
              </motion.p>
              <motion.p
                whileHover={{ color: '#3B82F6' }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer"
              >
                Nairobi, Kenya
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <motion.p
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="text-gray-400 text-sm"
          >
            © {new Date().getFullYear()} Billy Mwangi. All rights reserved. Made with{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="inline w-4 h-4 text-red-500" />
            </motion.span>{' '}
            using Next.js & Tailwind CSS.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
