import { useEffect, useRef, useState } from 'react'

/**
 * Wraps a section in a subtle fade/slide-in-on-scroll effect.
 *
 * Progressive enhancement by design: content renders fully visible on
 * the very first paint. Only after this component mounts and successfully
 * sets up an IntersectionObserver does it "arm" the hidden starting state.
 * That way, if JS is slow, errors, or an older browser doesn't support
 * IntersectionObserver, visitors still see everything — nothing on this
 * low-bandwidth-focused site should ever depend on JS to be readable.
 */
export default function Reveal({ children, as: Tag = 'div', className = '', ...rest }) {
  const ref = useRef(null)
  const [armed, setArmed] = useState(false)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return

    setArmed(true)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    observer.observe(el)

    // Safety net: guarantee visibility after 4s no matter what.
    const timeout = setTimeout(() => setInView(true), 4000)

    return () => {
      observer.disconnect()
      clearTimeout(timeout)
    }
  }, [])

  const classes = [className, 'reveal', armed ? 'reveal-armed' : '', inView ? 'in-view' : '']
    .filter(Boolean)
    .join(' ')

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  )
}
