import { useState } from 'react'
import { BriefcaseBusiness, Check, CodeXml, LoaderCircle, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

const encode = (data) => new URLSearchParams(data).toString()

export function Contact() {
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const submitForm = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      setStatus('error')
      setMessage('Please complete the required fields before sending.')
      return
    }
    setStatus('submitting')
    setMessage('')
    const formData = Object.fromEntries(new FormData(form))
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'portfolio-contact', ...formData }),
      })
      if (!response.ok) throw new Error('Submission failed')
      form.reset()
      setStatus('success')
      setMessage('Message sent. I will get back to you within 24 hours.')
    } catch {
      setStatus('error')
      setMessage('The message could not be sent. Please retry or email me directly.')
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="section-shell">
        <SectionHeading index="07" eyebrow="Contact" title="Let&apos;s build something intelligent." description="Building something that needs intelligent AI integration? Let&apos;s talk." />
        <div className="contact-grid">
          <div className="contact-details" data-reveal>
            <div className="availability availability--large"><span />Available now</div>
            <p className="response-time">Usually responds within 24 hours</p>
            <div className="contact-list">
              <a href="mailto:ichimezie7@gmail.com"><Mail size={19} /><span><small>Email</small>ichimezie7@gmail.com</span></a>
              <a href="tel:+2347046803829"><Phone size={19} /><span><small>Phone</small>+234 70 4680 3829</span></a>
              <div><MapPin size={19} /><span><small>Location</small>Port Harcourt, Nigeria · Remote-first</span></div>
            </div>
            <div className="social-links" aria-label="Social links">
              <a href="https://linkedin.com/in/ifeanyi-chimezie-604001220" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BriefcaseBusiness /></a>
              <a href="https://github.com/Csamuels1" target="_blank" rel="noreferrer" aria-label="GitHub"><CodeXml /></a>
              <a href="mailto:ichimezie7@gmail.com" aria-label="Email"><Mail /></a>
              <a href="https://wa.me/2349074593435" target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle /></a>
            </div>
          </div>
          <form className="contact-form" name="portfolio-contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={submitForm} data-reveal>
            <input type="hidden" name="form-name" value="portfolio-contact" />
            <p className="form-hidden"><label>Do not fill this out: <input name="bot-field" /></label></p>
            <div className="form-row">
              <label><span>Name *</span><input type="text" name="name" autoComplete="name" required placeholder="Your name" /></label>
              <label><span>Email *</span><input type="email" name="email" autoComplete="email" required placeholder="you@company.com" /></label>
            </div>
            <div className="form-row form-row--single">
              <label><span>Company</span><input type="text" name="company" autoComplete="organization" placeholder="Company or team" /></label>
            </div>
            <label><span>Message *</span><textarea name="message" required rows="6" placeholder="Tell me what you&apos;re building and where AI needs to fit." /></label>
            <button className={`button button--primary submit-button ${status === 'success' ? 'success' : ''}`} type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? <>Sending <LoaderCircle className="spin" size={18} /></> : status === 'success' ? <>Message sent <Check size={18} /></> : <>Send message <Send size={18} /></>}
            </button>
            <p className={`form-status form-status--${status}`} role="status">{message}</p>
          </form>
        </div>
      </div>
    </section>
  )
}
