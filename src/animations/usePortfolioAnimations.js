import { useLayoutEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function usePortfolioAnimations(enabled) {
  useLayoutEffect(() => {
    if (!enabled) return undefined
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const lenis = reduceMotion ? null : new Lenis({ duration: 1.05, smoothWheel: true, wheelMultiplier: 0.9 })
    let frame
    const raf = (time) => {
      lenis?.raf(time)
      frame = window.requestAnimationFrame(raf)
    }
    if (lenis) frame = window.requestAnimationFrame(raf)

    const context = gsap.context(() => {
      gsap.to('.scroll-progress', { scaleX: 1, ease: 'none', scrollTrigger: { scrub: 0.25, start: 0, end: 'max' } })
      if (reduceMotion) {
        gsap.set('[data-reveal], .hero-animate', { opacity: 1, y: 0 })
        return
      }
      gsap.fromTo('.hero-animate', { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.1, delay: 0.15, ease: 'power4.out' })
      gsap.fromTo('.tagline-word', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.55, stagger: 0.035, delay: 0.85, ease: 'power3.out' })
      document.querySelectorAll('[data-count]').forEach((element) => {
        const target = Number(element.dataset.count)
        if (!target) return
        const counter = { value: 0 }
        gsap.to(counter, { value: target, duration: 1.3, delay: 1.05, ease: 'power3.out', onUpdate: () => { element.textContent = `${Math.round(counter.value)}+` } })
      })
      gsap.utils.toArray('[data-reveal]').forEach((element) => {
        gsap.fromTo(element, { opacity: 0, y: 48 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power4.out', scrollTrigger: { trigger: element, start: 'top 86%', once: true } })
      })
      gsap.fromTo('.timeline-line span', { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '.timeline', start: 'top 75%', end: 'bottom 70%', scrub: true } })
      gsap.fromTo('.timeline-node', { scale: 0 }, { scale: 1, duration: 0.5, ease: 'back.out(2)', scrollTrigger: { trigger: '.timeline-node', start: 'top 80%', once: true } })
      gsap.utils.toArray('[data-project-card]').forEach((card) => {
        gsap.fromTo(card, { opacity: 0, y: 55, rotateX: 5 }, { opacity: 1, y: 0, rotateX: 0, duration: 0.85, ease: 'power4.out', scrollTrigger: { trigger: card, start: 'top 88%', once: true } })
      })
      gsap.utils.toArray('.skill-badges span').forEach((badge, index) => {
        gsap.fromTo(badge, { opacity: 0, scale: 0.82 }, { opacity: 1, scale: 1, duration: 0.45, delay: (index % 6) * 0.04, ease: 'back.out(1.8)', scrollTrigger: { trigger: badge.parentElement, start: 'top 88%', once: true } })
      })
      gsap.utils.toArray('.progress i').forEach((bar) => {
        gsap.fromTo(bar, { width: 0 }, { width: bar.style.getPropertyValue('--progress'), duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: bar, start: 'top 90%', once: true } })
      })
    })

    const magneticCleanups = []
    if (!reduceMotion && window.matchMedia('(pointer: fine)').matches) {
      document.querySelectorAll('.skill-badges span').forEach((badge) => {
        const move = (event) => {
          const rect = badge.getBoundingClientRect()
          gsap.to(badge, { x: (event.clientX - rect.left - rect.width / 2) * 0.13, y: (event.clientY - rect.top - rect.height / 2) * 0.13, duration: 0.35, ease: 'power2.out' })
        }
        const leave = () => gsap.to(badge, { x: 0, y: 0, duration: 0.65, ease: 'elastic.out(1, .45)' })
        badge.addEventListener('pointermove', move)
        badge.addEventListener('pointerleave', leave)
        magneticCleanups.push(() => { badge.removeEventListener('pointermove', move); badge.removeEventListener('pointerleave', leave) })
      })
    }

    ScrollTrigger.refresh()
    return () => {
      context.revert()
      lenis?.destroy()
      window.cancelAnimationFrame(frame)
      magneticCleanups.forEach((cleanup) => cleanup())
    }
  }, [enabled])
}
