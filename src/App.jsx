import { useEffect } from 'react'
import Lenis from 'lenis'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Certificates } from './components/Certificates'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { AnimatedBackground } from './components/AnimatedBackground'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, wheelMultiplier: 1.0, smoothWheel: true })
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
    return () => { lenis.destroy() }
  }, [])

  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Certificates />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
