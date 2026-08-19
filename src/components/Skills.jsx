import { CircleDot, Sparkles } from 'lucide-react'
import { mastering, skillGroups } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-shell">
        <SectionHeading index="04" eyebrow="Capabilities" title="The stack behind the systems." description="A practical toolkit spanning agent design, integration engineering, automation, and emerging ML infrastructure." />
        <div className="skills-layout">
          {skillGroups.map((group, index) => (
            <article className="skill-group" data-reveal key={group.title}>
              <div className="skill-group__title"><span>{String(index + 1).padStart(2, '0')}</span><h3>{group.title}</h3></div>
              <div className="skill-badges">{group.skills.map((skill) => <span key={skill}><CircleDot size={10} />{skill}</span>)}</div>
            </article>
          ))}
        </div>
        <div className="mastering" data-reveal>
          <div className="mastering-title"><Sparkles size={19} /><div><p className="eyebrow">Currently mastering</p><h3>Building the next layer.</h3></div></div>
          <div className="mastering-grid">{mastering.map((skill) => <span key={skill}>{skill}</span>)}</div>
        </div>
      </div>
    </section>
  )
}
