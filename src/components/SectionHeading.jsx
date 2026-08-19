export function SectionHeading({ index, eyebrow, title, description }) {
  return (
    <div className="section-heading" data-reveal>
      <div className="section-index" aria-hidden="true">{index}</div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
    </div>
  )
}
