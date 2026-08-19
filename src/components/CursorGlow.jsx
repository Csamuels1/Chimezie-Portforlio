import { useEffect, useRef } from 'react'

export function CursorGlow() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const trailRef = useRef([])

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse), (prefers-reduced-motion: reduce)').matches) return undefined
    const dot = dotRef.current
    const ring = ringRef.current
    let ringX = -100
    let ringY = -100
    let mouseX = -100
    let mouseY = -100
    const trailPositions = Array.from({ length: 6 }, () => ({ x: -100, y: -100 }))
    let frame
    const move = (event) => {
      mouseX = event.clientX
      mouseY = event.clientY
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
    }
    const animate = () => {
      ringX += (mouseX - ringX) * 0.14
      ringY += (mouseY - ringY) * 0.14
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`
      trailPositions.forEach((position, index) => {
        const target = index === 0 ? { x: mouseX, y: mouseY } : trailPositions[index - 1]
        position.x += (target.x - position.x) * (0.22 - index * 0.018)
        position.y += (target.y - position.y) * (0.22 - index * 0.018)
        if (trailRef.current[index]) trailRef.current[index].style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`
      })
      frame = window.requestAnimationFrame(animate)
    }
    const over = (event) => {
      const interactive = event.target.closest('a, button, input, textarea, select, .project-media')
      ring.classList.toggle('cursor-ring--active', Boolean(interactive))
      ring.classList.toggle('cursor-ring--crosshair', Boolean(event.target.closest('.project-media')))
    }
    document.addEventListener('pointermove', move)
    document.addEventListener('pointerover', over)
    animate()
    return () => {
      document.removeEventListener('pointermove', move)
      document.removeEventListener('pointerover', over)
      window.cancelAnimationFrame(frame)
    }
  }, [])

  return <><div ref={dotRef} className="cursor-dot" aria-hidden="true" /><div ref={ringRef} className="cursor-ring" aria-hidden="true" />{Array.from({ length: 6 }, (_, index) => <div className="cursor-trail" ref={(node) => { trailRef.current[index] = node }} style={{ '--trail-size': `${5 - index * 0.45}px`, '--trail-opacity': 0.28 - index * 0.035 }} aria-hidden="true" key={index} />)}</>
}
