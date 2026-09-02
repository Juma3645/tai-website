import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle.js'

export default function NotFound() {
  usePageTitle('Page not found | Thrive Africa Initiative')

  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-copy">
          <span className="eyebrow light">Page not found</span>
          <h1>We can’t find that page.</h1>
          <p>The page may have moved or the address may be incorrect. You can return to the TAI homepage or browse our work.</p>
          <div className="btn-row" style={{ marginTop: '1.5rem' }}>
            <Link className="btn btn-primary" to="/">Go to homepage</Link>
            <Link className="btn btn-light-outline" to="/programs">Explore our work</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
