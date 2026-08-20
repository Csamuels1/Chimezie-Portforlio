import { BrainCircuit, Code2, Network, Workflow } from 'lucide-react'
import headshot from '../assets/portfolio/headshot.jpg'
import { SectionHeading } from './SectionHeading'

const building = ['Multi-agent architectures', 'LLM integrations', 'Voice AI systems', 'Production automation']
const learning = ['Machine Learning', 'Deep Learning', 'NLP & Transformers', 'MLOps & Cloud']

export function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-shell">
        <SectionHeading index="01" eyebrow="About" title="Systems thinking, built into every layer." />
        <div className="about-grid">
          <div className="portrait-wrap" data-reveal>
            <div className="portrait-frame">
              <img src={headshot} alt="Chimezie Ifeanyi Samuel in a black suit" width="960" height="1280" loading="lazy" />
            </div>
            <div className="portrait-label"><span>Based in</span>Port Harcourt, Nigeria</div>
          </div>
          <div className="about-copy" data-reveal>
            <p className="about-lead">I&apos;m a mid-level AI Systems Engineer specialising in multi-agent architectures, LLM integration, and intelligent automation systems.</p>
            <p>I build AI that doesn&apos;t just respond - it reasons, plans, and executes across complex workflows. From autonomous Odoo ERP agents to voice-powered customer service systems, I&apos;ve shipped production AI that businesses actually depend on daily.</p>
            <p>I&apos;m expanding into Machine Learning engineering, Deep Learning, NLP, and MLOps - bridging the gap between AI automation and full-stack ML product development.</p>
            <div className="about-lists">
              <div className="about-list">
                <div className="mini-heading"><Workflow size={17} /> What I&apos;m building with</div>
                {building.map((item) => <span key={item}>{item}</span>)}
              </div>
              <div className="about-list">
                <div className="mini-heading"><BrainCircuit size={17} /> What I&apos;m learning</div>
                {learning.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
            <div className="about-signals" aria-label="Engineering focus">
              <span><Network size={15} /> Architecture first</span>
              <span><Code2 size={15} /> Production minded</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
