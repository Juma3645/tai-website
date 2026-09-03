import { Link, useParams } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle.js'
import { newsItems } from '../data/news.js'

export default function NewsArticle() {
  const { slug } = useParams()
  const item = newsItems.find((entry) => entry.slug === slug)

usePageTitle(
  item
    ? `${item.title} | Thrive Africa Initiative`
    : 'News & Updates | Thrive Africa Initiative',
  item ? `/news/${item.slug}` : '/news'
)
  if (!item) {
    return (
      <main>
        <section className="page-hero"><div className="container page-hero-copy"><span className="eyebrow light">News &amp; updates</span><h1>Update not found.</h1><p>The page you requested is not available.</p></div></section>
        <section><div className="container"><Link className="btn btn-secondary" to="/news">Back to News &amp; Updates</Link></div></section>
      </main>
    )
  }

  return (
    <main>
      <article className="news-article">
        <header className="news-article-header">
          <div className="container article-narrow">
            <Link className="back-link" to="/news">← News &amp; updates</Link>
            <div className="news-meta"><span>{item.category}</span><time dateTime={item.isoDate}>{item.date}</time></div>
            <h1>{item.title}</h1>
            <p className="article-dek">{item.excerpt}</p>
          </div>
        </header>
        <div className="container article-layout">
          <div className="article-main">
            <figure className="article-figure"><img className="article-image" src={item.image} alt={item.alt} /><figcaption>{item.imageCaption || item.alt}</figcaption></figure>
            {item.body.map((paragraph, index) => (
              <div key={paragraph}>
                <p>{paragraph}</p>
                {item.quote && index === 1 && (
                  <div className="article-quote-wrap">
                    <blockquote>“{item.quote}”</blockquote>
                    <cite>{item.quoteAttribution}</cite>
                  </div>
                )}
              </div>
            ))}
            {item.source && (
              <div className="article-source">
                <strong>Source note</strong>
                <span>{item.source}</span>
                {item.sourceUrl && <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer">View source ↗</a>}
              </div>
            )}
          </div>
          <aside className="article-aside">
            <span className="eyebrow">TAI perspective</span>
            <p>TAI’s work is rooted in community participation, protection, local capacity and practical support for people affected by crisis and displacement.</p>
            <Link className="btn btn-primary" to="/contact">Talk to TAI</Link>
          </aside>
        </div>
      </article>
    </main>
  )
}
