import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import { newsItems } from '../data/news.js'

export default function News() {
  usePageTitle('News & Updates | Thrive Africa Initiative')

  return (
    <main>
      <section className="page-hero news-hero">
        <div className="container page-hero-copy">
          <span className="eyebrow light">News &amp; updates</span>
          <h1>Field notes, community stories and humanitarian updates.</h1>
          <p>Follow TAI’s work, field experience and selected updates from the humanitarian context in which communities are living and responding.</p>
        </div>
      </section>

      <Reveal as="section">
        <div className="container news-grid">
          {newsItems.map((item, index) => (
            <article className={`news-card${index === 0 ? ' news-card-featured' : ''}`} key={item.slug}>
              <Link className="news-card-image" to={`/news/${item.slug}`} aria-label={`Read ${item.title}`}>
                <img src={item.image} alt={item.alt} loading={index === 0 ? 'eager' : 'lazy'} />
              </Link>
              <div className="news-card-body">
                <div className="news-meta"><span>{item.category}</span><time dateTime={item.isoDate}>{item.date}</time></div>
                <h2><Link to={`/news/${item.slug}`}>{item.title}</Link></h2>
                <p>{item.excerpt}</p>
                <Link className="text-link" to={`/news/${item.slug}`}>Read update <span aria-hidden="true">→</span></Link>
              </div>
            </article>
          ))}
        </div>
      </Reveal>

      <section className="alt news-note">
        <div className="container news-note-inner">
          <div><span className="eyebrow">Editorial standard</span><h2>Clear, factual and grounded in the field.</h2></div>
          <p>News published here distinguishes TAI’s own activities from wider humanitarian context. External reports are credited, and names or quotations are only used when they can be verified.</p>
        </div>
      </section>
    </main>
  )
}
