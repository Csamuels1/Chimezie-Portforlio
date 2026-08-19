import { lazy, Suspense, useEffect, useState } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { CursorGlow } from './components/CursorGlow'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Learning } from './components/Learning'
import { Loader } from './components/Loader'
import { Navigation } from './components/Navigation'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { usePortfolioAnimations } from './animations/usePortfolioAnimations'
import './App.css'

const HeroScene = lazy(() => import('./components/HeroScene'))

function App() {
  const [isLoading, setIsLoading] = useState(true)

  usePortfolioAnimations(!isLoading)

  useEffect(() => {
    const timeout = window.setTimeout(
      () => setIsLoading(false),
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 250 : 2200,
    )
    return () => window.clearTimeout(timeout)
  }, [])

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Loader isVisible={isLoading} />
      <div className="scroll-progress" aria-hidden="true" />
      <CursorGlow />
      <Navigation />
      <main id="main-content">
        <Hero isReady={!isLoading}>
          <Suspense fallback={<div className="hero-scene-fallback" />}>
            <HeroScene />
          </Suspense>
        </Hero>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Learning />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
