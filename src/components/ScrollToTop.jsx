import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Fixes a real bug: without this, navigating between routes (e.g. from
 * halfway down /programs to /contact) preserved the old scroll position
 * instead of starting the new page at the top.
 *
 * Also handles link-with-hash navigation (e.g. the header's Donate button,
 * which points at /contact#support) — those should land on that section,
 * not get forced back to the top by this same fix.
 *
 * Deliberately NOT smooth-scrolling on plain route changes — an instant
 * jump is standard, expected behavior. Smooth scroll is used only for the
 * hash-targeted case, where a small scroll animation helps the visitor
 * see where they landed and why.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // wait a tick for the new page's content to mount before measuring it
      const id = hash.replace('#', '')
      requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
        }
      })
      return
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}
