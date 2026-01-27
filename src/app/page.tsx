import Hero from '@/components/Hero'
import About from '@/components/About'
import WhyWorkWithMe from '@/components/WhyWorkWithMe'
import HowIWork from '@/components/HowIWork'
import Services from '@/components/Services'
import AnimatedSkills from '@/components/AnimatedSkills'
import Projects from '@/components/Projects'
import ReadyToWork from '@/components/ReadyToWork'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PortfolioAnalytics from '@/components/PortfolioAnalytics'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-16">
        <Hero />
        <About />
        <WhyWorkWithMe />
        <HowIWork />
        <PortfolioAnalytics />
        <Services />
        <AnimatedSkills />
        <Projects />
        <ReadyToWork />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
