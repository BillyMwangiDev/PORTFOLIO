'use client'

import { motion } from 'framer-motion'

interface WordsPullUpProps {
  text: string
  className?: string
  delayOffset?: number
}

export function WordsPullUp({ text, className = '', delayOffset = 0 }: WordsPullUpProps) {
  const words = text.split(' ')
  return (
    <span className={`inline-flex flex-wrap gap-x-[0.2em] ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: delayOffset + i * 0.06,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
