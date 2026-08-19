import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react'
import { stats } from '../data/portfolio'

const fullName = 'Chimezie Ifeanyi Samuel'
const tagline = "I don't just automate workflows. I build intelligent systems that think, decide, and act - so businesses can scale without the overhead."

export function Hero({ children, isReady }) {
  const [typedName, setTypedName] = useState('')

  useEffect(() => {
    if (!isReady) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const reducedMotionTimer = window.setTimeout(() => setTypedName(fullName), 0)
      return () => window.clearTimeout(reducedMotionTimer)
    }
    let index = 0
    const timer = window.setInterval(() => {
      index += 1
      setTypedName(fullName.slice(0, index))
      if (index >= fullName.length) window.clearInterval(timer)
    }, 1500 / fullName.length)
    return () => window.clearInterval(timer)
  }, [isReady])

  return (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      {children}
      <div className="hero-orbit hero-orbit--one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit--two" aria-hidden="true" />
      <div className="hero-content">
        <div className="availability hero-animate"><span />Available</div>
        <p className="hero-kicker hero-animate">AI systems, engineered for impact.</p>
        <h1 id="hero-title" className="hero-name hero-animate">
          <span className="sr-only">{fullName}</span>
          <span aria-hidden="true">{typedName}<i className="typing-cursor" /></span>
        </h1>
        <div className="hero-title-line hero-animate">AI Systems Engineer <b>·</b> Multi-Agent Architect <b>·</b> LLM Integration Specialist</div>
        <p className="hero-tagline hero-animate" aria-label={tagline}>
          {tagline.split(' ').map((word, index) => <span className="tagline-word" aria-hidden="true" key={`${word}-${index}`}>{word}</span>)}
        </p>
        <div className="hero-actions hero-animate">
          <a className="button button--primary" href="#projects">View my work <ArrowUpRight size={18} /></a>
          <a className="button button--secondary" href="/Chimezie-Ifeanyi-Samuel-CV.pdf" download>Download CV <Download size={17} /></a>
        </div>
        <div className="stats-row hero-animate">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}><strong data-count={stat.count ?? ''}>{stat.value}</strong><span>{stat.label}</span></div>
          ))}
        </div>
      </div>
      <a className="scroll-cue" href="#about"><span>Scroll to explore</span><ArrowDown size={17} /></a>
    </section>
  )
}
