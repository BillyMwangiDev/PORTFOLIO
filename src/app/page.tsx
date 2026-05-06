import dynamic from 'next/dynamic'
import { Hero } from '@/components/Hero'

// Sections below the fold are lazy-loaded so their JS is split into
// separate chunks. Hero is the LCP element — it stays eagerly loaded.
const About    = dynamic(() => import('@/components/About').then(m => ({ default: m.About })))
const Skills   = dynamic(() => import('@/components/Skills').then(m => ({ default: m.Skills })))
const Projects = dynamic(() => import('@/components/Projects').then(m => ({ default: m.Projects })))
const Contact  = dynamic(() => import('@/components/Contact').then(m => ({ default: m.Contact })))
const Footer   = dynamic(() => import('@/components/Footer').then(m => ({ default: m.Footer })))

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
