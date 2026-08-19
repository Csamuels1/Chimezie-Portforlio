import { useState } from 'react'
import { ArrowUpRight, Check, Layers3 } from 'lucide-react'
import { projectFilters, projects } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

function ProjectMedia({ project }) {
  const [activeImage, setActiveImage] = useState(0)
  if (project.images) {
    return (
      <div className="project-media project-gallery">
        <img src={project.images[activeImage].src} alt={project.images[activeImage].alt} width="1920" height="844" loading="lazy" />
        <div className="gallery-tabs" role="group" aria-label={`${project.title} screenshots`}>
          {project.images.map((image, index) => (
            <button type="button" className={index === activeImage ? 'active' : ''} onClick={() => setActiveImage(index)} key={image.label}>{image.label}</button>
          ))}
        </div>
      </div>
    )
  }
  if (project.image) {
    return <div className="project-media"><img src={project.image.src} alt={project.image.alt} width="1920" height="910" loading="lazy" /></div>
  }
  return null
}

function ProjectCard({ project }) {
  const onTilt = (event) => {
    if (window.matchMedia('(pointer: coarse), (prefers-reduced-motion: reduce)').matches) return
    const card = event.currentTarget
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--rotate-x', `${((event.clientY - rect.top) / rect.height - 0.5) * -4}deg`)
    card.style.setProperty('--rotate-y', `${((event.clientX - rect.left) / rect.width - 0.5) * 5}deg`)
  }
  const resetTilt = (event) => {
    event.currentTarget.style.setProperty('--rotate-x', '0deg')
    event.currentTarget.style.setProperty('--rotate-y', '0deg')
  }

  return (
    <article className={`project-card ${project.featured ? 'project-card--featured' : ''}`} onMouseMove={onTilt} onMouseLeave={resetTilt} data-project-card>
      <ProjectMedia project={project} />
      <div className="project-body">
        <div className="project-topline"><p className="eyebrow">{project.eyebrow}</p><span className="status"><i />{project.status}</span></div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.capabilities && (
          <div className="capability-grid">
            {project.capabilities.map((item) => <span key={item}><Check size={14} />{item}</span>)}
          </div>
        )}
        <div className="tech-list">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
        <a className="project-link" href={`#case-${project.id}`} aria-label={`Read ${project.title} project summary`}>System brief <ArrowUpRight size={16} /></a>
        <span id={`case-${project.id}`} className="anchor-target" />
      </div>
    </article>
  )
}

export function Projects() {
  const [filter, setFilter] = useState('All')
  const visibleProjects = filter === 'All' ? projects : projects.filter((project) => project.category.includes(filter))

  return (
    <section id="projects" className="section projects-section">
      <div className="section-shell">
        <SectionHeading index="03" eyebrow="Selected systems" title="Intelligence that leaves the lab." description="Production architectures built to reason, coordinate, and act across business-critical workflows." />
        <div className="project-filter" role="group" aria-label="Filter projects by category">
          <Layers3 size={17} aria-hidden="true" />
          {projectFilters.map((item) => <button type="button" key={item} className={filter === item ? 'active' : ''} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}</button>)}
        </div>
        <div className="projects-grid" aria-live="polite">
          {visibleProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    </section>
  )
}
