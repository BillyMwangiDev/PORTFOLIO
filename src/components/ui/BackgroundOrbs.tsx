'use client'

import { useEffect, useState } from 'react'
import { m } from 'framer-motion'

const orbs = [
  {
    color: '#D4824A',
    opacity: 0.18,
    size: 700,
    blur: 75,
    duration: 22,
    waypoints: [
      { x: -60, y: -40 },
      { x: 80,  y: 60  },
      { x: 20,  y: -80 },
      { x: -60, y: -40 },
    ],
    initial: { top: '5%', left: '5%' },
  },
  {
    color: '#3D1C0A',
    opacity: 0.45,
    size: 650,
    blur: 65,
    duration: 28,
    waypoints: [
      { x: 60,  y: 40  },
      { x: -80, y: -60 },
      { x: -20, y: 80  },
      { x: 60,  y: 40  },
    ],
    initial: { bottom: '5%', right: '5%', top: 'auto', left: 'auto' },
  },
  {
    color: '#E8A470',
    opacity: 0.10,
    size: 520,
    blur: 85,
    duration: 19,
    waypoints: [
      { x: -100, y: 60  },
      { x: 40,   y: -80 },
      { x: 120,  y: 20  },
      { x: -100, y: 60  },
    ],
    initial: { top: '40%', right: '10%', left: 'auto' },
  },
  {
    color: '#3D1C0A',
    opacity: 0.38,
    size: 820,
    blur: 95,
    duration: 25,
    waypoints: [
      { x: 80,  y: -60 },
      { x: -60, y: 80  },
      { x: 40,  y: 120 },
      { x: 80,  y: -60 },
    ],
    initial: { top: '-10%', right: '-5%', left: 'auto' },
  },
]

export function BackgroundOrbs() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const update = (e: MediaQueryListEvent | MediaQueryList) =>
      setScale(e.matches ? 0.5 : 1)
    update(mq)
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return (
    <div
      aria-hidden
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {orbs.map((orb, i) => (
        <m.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size * scale,
            height: orb.size * scale,
            background: orb.color,
            opacity: orb.opacity,
            filter: `blur(${orb.blur * scale}px)`,
            willChange: 'transform',
            ...orb.initial,
          }}
          animate={{
            x: orb.waypoints.map((p) => p.x),
            y: orb.waypoints.map((p) => p.y),
          }}
          transition={{
            duration: orb.duration,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'loop',
          }}
        />
      ))}
    </div>

  )
}
