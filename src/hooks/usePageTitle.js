import { useEffect } from 'react'

/** Sets document.title for the current route. No dependency needed —
 *  react-helmet etc. would be overkill for four static titles. */
export default function usePageTitle(title) {
  useEffect(() => {
    const prev = document.title
    document.title = title
    return () => {
      document.title = prev
    }
  }, [title])
}
