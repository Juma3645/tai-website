import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
    return () => {
      if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'auto'
    }
  }, [])

  useEffect(() => {
    const targetId = hash ? decodeURIComponent(hash.slice(1)) : ''
    const frame = window.requestAnimationFrame(() => {
      if (targetId) {
        const target = document.getElementById(targetId)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
      }
      window.scrollTo(0, 0)
    })

    return () => window.cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}
