import { Building2, CalendarDays, MapPin } from 'lucide-react'
import { experience } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-shell">
        <SectionHeading index="02" eyebrow="Experience" title="Production work." description="AI systems designed for real operations, real users, and real consequences." />
        <div className="timeline">
          <div className="timeline-line"><span /></div>
          <div className="timeline-node" aria-hidden="true"><span /></div>
          <article className="experience-card" data-reveal>
            <div className="experience-topline">
              <div>
                <p className="eyebrow">{experience.type}</p>
                <h3>{experience.role}</h3>
                <h4><Building2 size={17} /> {experience.company}</h4>
              </div>
              <div className="experience-meta">
                <span><CalendarDays size={15} /> {experience.period}</span>
                <span><MapPin size={15} /> {experience.location}</span>
              </div>
            </div>
            <ul className="impact-list">
              {experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
            <div className="tech-list" aria-label="Technologies used">
              {experience.tech.map((tech) => <span key={tech}>{tech}</span>)}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
