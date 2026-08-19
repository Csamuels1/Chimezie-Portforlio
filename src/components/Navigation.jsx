import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navigation } from '../data/portfolio'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-35% 0px -55%', threshold: 0 },
    )
    document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section))
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen)
    return () => document.body.classList.remove('menu-open')
  }, [isOpen])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <a className="brand" href="#home" aria-label="Chimezie Ifeanyi Samuel, home">CIS<span>.</span></a>
      <nav className={`nav-links ${isOpen ? 'nav-links--open' : ''}`} aria-label="Primary navigation">
        {navigation.map((item, index) => (
          <a key={item.href} className={active === item.href.slice(1) ? 'active' : ''} href={item.href} onClick={() => setIsOpen(false)} style={{ '--nav-order': index }}>
            <span className="nav-dot" />{item.label}
          </a>
        ))}
        <a className="nav-cta" href="#contact" onClick={() => setIsOpen(false)}>Let&apos;s talk</a>
      </nav>
      <button className="menu-toggle" type="button" onClick={() => setIsOpen((value) => !value)} aria-expanded={isOpen} aria-label={isOpen ? 'Close navigation' : 'Open navigation'}>
        {isOpen ? <X /> : <Menu />}
      </button>
    </header>
  )
}
