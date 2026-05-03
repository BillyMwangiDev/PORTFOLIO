'use client'

import { m } from 'framer-motion'

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
        <span key={i} className="overflow-hidden inline-block pb-[0.2em] -mb-[0.2em]">
          <m.span
            className="inline-block"
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1],
              delay: delayOffset + i * 0.04,
            }}
          >
            {word}
          </m.span>
        </span>
      ))}
    </span>
  )
}
