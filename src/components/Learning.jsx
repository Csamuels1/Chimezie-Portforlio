import { ArrowUpRight, BookOpen } from 'lucide-react'
import { learning } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

export function Learning() {
  return (
    <section id="learning" className="section learning-section">
      <div className="section-shell">
        <SectionHeading index="05" eyebrow="Currently learning" title="Compounding the fundamentals." description="A deliberate journey from automation engineering into full-stack machine learning systems." />
        <div className="learning-list">
          {learning.map((item) => (
            <article className="learning-card" data-reveal key={item.number}>
              <span className="learning-number">{item.number}</span>
              <div className="learning-icon"><BookOpen size={20} /></div>
              <div className="learning-copy"><h3>{item.title}</h3><p>{item.meta}</p></div>
              <div className="learning-status">
                <span>{item.status}</span>
                {item.progress && <div className="progress" aria-label={`${item.progress}% complete`}><i style={{ '--progress': `${item.progress}%` }} /><b>{item.progress}%</b></div>}
              </div>
            </article>
          ))}
        </div>
        <a className="learning-link" href="https://linkedin.com/in/ifeanyi-chimezie-604001220" target="_blank" rel="noreferrer">Documenting this journey publicly on LinkedIn <ArrowUpRight size={17} /></a>
      </div>
    </section>
  )
}
