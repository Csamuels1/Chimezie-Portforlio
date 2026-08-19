import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function HeroScene() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    mount.appendChild(renderer.domElement)
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(42, mount.clientWidth / mount.clientHeight, 0.1, 100)
    camera.position.z = 7
    const gold = new THREE.LineBasicMaterial({ color: 0xc9972a, transparent: true, opacity: 0.38 })
    const dark = new THREE.MeshBasicMaterial({ color: 0x0f2031, transparent: true, opacity: 0.2 })
    const makeShape = (geometry, position, scale) => {
      const mesh = new THREE.Mesh(geometry, dark)
      mesh.add(new THREE.LineSegments(new THREE.EdgesGeometry(geometry), gold))
      mesh.position.set(...position)
      mesh.scale.setScalar(scale)
      scene.add(mesh)
      return mesh
    }
    const shapes = [
      makeShape(new THREE.IcosahedronGeometry(1.2, 0), [2.5, 0.3, 0], 1.05),
      makeShape(new THREE.OctahedronGeometry(0.9, 0), [-2.9, -1.5, -1], 0.72),
      makeShape(new THREE.TetrahedronGeometry(0.7, 0), [3.4, -2.2, -1], 0.55),
    ]
    const pointCount = window.innerWidth < 768 ? 90 : 180
    const points = new Float32Array(pointCount * 3)
    for (let index = 0; index < pointCount * 3; index += 1) points[index] = (Math.random() - 0.5) * 14
    const pointGeometry = new THREE.BufferGeometry()
    pointGeometry.setAttribute('position', new THREE.BufferAttribute(points, 3))
    const pointMaterial = new THREE.PointsMaterial({ color: 0xe8b84b, size: 0.018, transparent: true, opacity: 0.55 })
    const pointCloud = new THREE.Points(pointGeometry, pointMaterial)
    scene.add(pointCloud)
    let frameId
    let visible = true
    const clock = new THREE.Clock()
    const render = () => {
      if (!visible) return
      const elapsed = clock.getElapsedTime()
      if (!reduceMotion) {
        shapes.forEach((shape, index) => {
          shape.rotation.x = elapsed * (0.07 + index * 0.018)
          shape.rotation.y = elapsed * (0.1 + index * 0.022)
        })
        pointCloud.rotation.y = elapsed * 0.008
      }
      renderer.render(scene, camera)
      frameId = window.requestAnimationFrame(render)
    }
    render()
    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }
    const onVisibility = () => {
      visible = !document.hidden
      if (visible) render()
      else window.cancelAnimationFrame(frameId)
    }
    window.addEventListener('resize', onResize)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVisibility)
      shapes.forEach((shape) => shape.geometry.dispose())
      pointGeometry.dispose()
      pointMaterial.dispose()
      gold.dispose()
      dark.dispose()
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [])

  return <div ref={mountRef} className="hero-scene" aria-hidden="true" />
}
