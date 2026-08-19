import { GraduationCap } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

export function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="section-shell">
        <SectionHeading index="06" eyebrow="Education" title="Engineering foundations." />
        <article className="education-card" data-reveal>
          <div className="education-icon"><GraduationCap size={28} /></div>
          <div><p className="eyebrow">2021 - 2026</p><h3>Bachelor of Technology - Software Engineering</h3><p>Federal University of Technology, Akure (FUTA)</p></div>
          <span className="education-code">B.TECH / SE</span>
        </article>
      </div>
    </section>
  )
}
