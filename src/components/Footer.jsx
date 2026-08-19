import { ArrowUp } from 'lucide-react'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div><a className="brand" href="#home">CIS<span>.</span></a><p>Built with intention. Engineered for impact.</p></div>
        <a className="back-to-top" href="#home">Back to top <ArrowUp size={16} /></a>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Chimezie Ifeanyi Samuel</span>
        <span>AI Systems Engineer</span>
        <nav aria-label="Footer navigation"><a href="#about">About</a><a href="#projects">Projects</a><a href="#contact">Contact</a></nav>
      </div>
    </footer>
  )
}
