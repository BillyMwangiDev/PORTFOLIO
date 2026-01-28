'use client'

import { useMemo, useSyncExternalStore } from 'react'

interface ParticleStyle {
  left: string
  top: string
  animationDelay: string
  animationDuration: string
}

// Simple subscription for client-side detection
const emptySubscribe = () => () => {}
const getClientSnapshot = () => true
const getServerSnapshot = () => false

// Generate stable random values for particles using seeded random
const generateParticleStyles = (count: number, seed: number): ParticleStyle[] => {
  const seededRandom = (index: number) => {
    const x = Math.sin(seed + index) * 10000
    return x - Math.floor(x)
  }

  return Array.from({ length: count }).map((_, i) => ({
    left: `${seededRandom(i * 4) * 100}%`,
    top: `${seededRandom(i * 4 + 1) * 100}%`,
    animationDelay: `${seededRandom(i * 4 + 2) * 2}s`,
    animationDuration: `${2 + seededRandom(i * 4 + 3) * 3}s`,
  }))
}

const generateFloatStyles = (count: number, seed: number): ParticleStyle[] => {
  const seededRandom = (index: number) => {
    const x = Math.sin(seed + index + 1000) * 10000
    return x - Math.floor(x)
  }

  return Array.from({ length: count }).map((_, i) => ({
    left: `${seededRandom(i * 4) * 100}%`,
    top: `${seededRandom(i * 4 + 1) * 100}%`,
    animationDelay: `${seededRandom(i * 4 + 2) * 3}s`,
    animationDuration: `${3 + seededRandom(i * 4 + 3) * 2}s`,
  }))
}

// Use a fixed seed for consistent hydration
const PARTICLE_SEED = 12345

const ParticleBackground = () => {
  // Use useSyncExternalStore for client-side detection without setState in effect
  const isClient = useSyncExternalStore(emptySubscribe, getClientSnapshot, getServerSnapshot)

  // Memoize particle styles with fixed seed
  const particleStyles = useMemo(() => generateParticleStyles(50, PARTICLE_SEED), [])
  const floatStyles = useMemo(() => generateFloatStyles(20, PARTICLE_SEED), [])

  if (!isClient) {
    return null
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Animated particles using CSS */}
      {particleStyles.map((style, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
          style={style}
        />
      ))}

      {/* Floating elements */}
      {floatStyles.map((style, i) => (
        <div
          key={`float-${i}`}
          className="absolute w-1 h-1 bg-blue-300/20 rounded-full animate-bounce"
          style={style}
        />
      ))}

      {/* Connecting lines effect */}
      <div className="absolute inset-0 opacity-20">
        <svg className="h-full w-full">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#3B82F6" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  )
}

export default ParticleBackground
