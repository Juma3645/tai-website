import { useEffect } from 'react'

const SITE_URL = 'https://www.tafrica.org'

export default function usePageTitle(title, path = '/') {
  useEffect(() => {
    document.title = title

    const canonicalUrl = `${SITE_URL}${path === '/' ? '/' : path}`

    let canonical = document.querySelector('link[rel="canonical"]')

    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }

    canonical.setAttribute('href', canonicalUrl)
  }, [title, path])
}