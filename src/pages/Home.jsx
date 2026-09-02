import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import heroImg from '../assets/images/gender-sensitivity-poc-akoka.jpg'
import protectionImg from '../assets/images/poc-akoka-banner-group.jpg'
import livelihoodsImg from '../assets/images/livelihoods-cornfield.jpg'
import shelterImg from '../assets/images/shelter-family-under-tree.jpg'
import fieldImg from '../assets/images/community-gathering-wide.jpg'
import womenImg from '../assets/images/akoka-women-poc-banner.jpg'
import akokaNewsImg from '../assets/News/Community and CPC Engagement.jpg'

const programmes = [
  {
    number: '01',
    title: 'Protection & GBV',
    text: 'Community-based protection, GBV prevention and response, referrals, gender-sensitive civic education, and local capacity strengthening.',
    image: protectionImg,
    alt: 'Community members participating in protection work in Akoka County',
  },
  {
    number: '02',
    title: 'Livelihoods',
    text: 'Women-led farming and income-generating activities that strengthen food security, household resilience, and economic independence.',
    image: livelihoodsImg,
    alt: 'Agricultural field supporting livelihoods programming',
  },
  {
    number: '03',
    title: 'Shelter & NFIs',
    text: 'Support for returnee and displaced families with essential shelter assistance and household items, linked to protection needs.',
    image: shelterImg,
    alt: 'Family and household context relevant to shelter and NFI support',
  },
]

export default function Home() {
  usePageTitle('Thrive Africa Initiative | South Sudan')

  return (
    <main>
      <section className="hero">
        <div className="hero-shape" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="eyebrow light">South Sudan · Community-led action</span>
            <h1>Where women lead, communities rise.</h1>
            <p className="hero-lede">
              Thrive Africa Initiative is a women-led NGO working with women, returnees and vulnerable communities
              to strengthen protection, livelihoods and resilience.
            </p>
            <div className="btn-row">
              <Link className="btn btn-primary" to="/programs">Explore our work</Link>
              <Link className="btn btn-light-outline" to="/contact">Work with TAI</Link>
            </div>
            <p className="hero-note">Registered National NGO · Relief and Rehabilitation Commission (RRC), South Sudan</p>
          </div>
          <figure className="hero-figure">
            <img src={heroImg} alt="TAI team and community members during protection work in Akoka County" />
            <figcaption>Akoka County, Upper Nile State</figcaption>
          </figure>
        </div>
      </section>

      <Reveal as="section" className="intro-section">
        <div className="container intro-grid">
          <div>
            <span className="eyebrow">Who we are</span>
            <h2>Local leadership. Practical action. Dignity first.</h2>
          </div>
          <div>
            <p className="intro-lede">
              Thrive Africa Initiative (TAI) works alongside communities affected by conflict,
              displacement and vulnerability. Our approach is grounded in local leadership,
              women’s participation and solutions shaped by the people closest to the work.
            </p>
            <Link className="text-link" to="/about">Learn more about TAI <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="facts-section">
        <div className="container">
          <div className="facts-grid">
            <div className="fact"><strong>Women-led</strong><span>National NGO</span></div>
            <div className="fact"><strong>3</strong><span>Connected programme areas</span></div>
            <div className="fact"><strong>Upper Nile</strong><span>Field coordination and programming</span></div>
            <div className="fact"><strong>Community</strong><span>Led and locally grounded</span></div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section">
        <div className="container">
          <div className="section-intro">
            <div>
              <span className="eyebrow">What we do</span>
              <h2>Three connected areas of work</h2>
            </div>
            <p>Our programmes respond to immediate protection needs while supporting households and communities to rebuild with dignity.</p>
          </div>

          <div className="programme-grid">
            {programmes.map((programme) => (
              <article className="programme-card" key={programme.number}>
                <div className="programme-image">
                  <img src={programme.image} alt={programme.alt} loading="lazy" />
                </div>
                <div className="programme-body">
                  <span className="programme-number">{programme.number}</span>
                  <h3>{programme.title}</h3>
                  <p>{programme.text}</p>
                  <Link className="text-link" to="/programs">View programme <span aria-hidden="true">→</span></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="story-section">
        <div className="container story-grid">
          <div className="story-images">
            <img className="story-main" src={fieldImg} alt="Community engagement activity supported by TAI" loading="lazy" />
            <img className="story-small" src={womenImg} alt="Women participating in protection programming in Akoka County" loading="lazy" />
          </div>
          <div className="story-copy">
            <span className="eyebrow">On the ground</span>
            <h2>Building local capacity for safer communities</h2>
            <p>
              In Akoka County, TAI formed and trained Community Protection Committees with strong women’s
              representation, working with local authorities and communities to strengthen protection
              awareness, gender sensitivity, civic participation and referral pathways.
            </p>
            <p>
              The work reflects our wider approach: build local capacity, listen to communities,
              and connect protection with the everyday conditions that help people recover.
            </p>
            <Link className="btn btn-secondary" to="/programs">See our field work</Link>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="innovation-section">
        <div className="container">
          <div className="innovation-feature">
            <div className="innovation-copy">
              <span className="eyebrow light">TAI innovation</span>
              <h2>ProtectionSphere</h2>
              <p className="innovation-lede">
                TAI is developing ProtectionSphere, a digital platform designed to strengthen
                protection and GBV case management, referrals, information management and reporting.
              </p>
              <p>
                It grew from a practical need inside humanitarian work: protecting sensitive case
                information while making follow-up and programme management more consistent.
              </p>
              <a className="btn btn-primary" href="https://protectionsphere.org" target="_blank" rel="noopener noreferrer">
                Visit ProtectionSphere
              </a>
            </div>
            <div className="innovation-panel" aria-label="ProtectionSphere digital innovation">
              <span>Digital protection</span>
              <strong>Built from field experience.</strong>
              <small>Separate product · TAI innovation</small>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="news-home-section">
        <div className="container">
          <div className="section-intro">
            <div><span className="eyebrow">News &amp; updates</span><h2>From the field and the wider humanitarian context</h2></div>
            <p>Selected updates on TAI’s work, community protection and the realities shaping humanitarian response.</p>
          </div>
          <div className="news-home-grid">
            <article className="news-home-feature">
              <img src={akokaNewsImg} alt="Community and Community Protection Committee engagement in Akoka County" loading="lazy" />
              <div><span className="news-label">TAI field update · September 2025</span><h3>Community priorities for sustainable return and reintegration in Akoka</h3><p>Community discussions identified practical priorities around water, livelihoods, safety, land concerns, food security and protection.</p><Link className="text-link" to="/news/community-priorities-sustainable-return-akoka-county">Read the update <span aria-hidden="true">→</span></Link></div>
            </article>
            <div className="news-home-list">
              <article><span className="news-label">Protection &amp; GBV · 2025</span><h3>Gender sensitivity and protection in Maiwut</h3><Link className="text-link" to="/news/gender-sensitivity-protection-maiwut">Read update <span aria-hidden="true">→</span></Link></article>
              <article><span className="news-label">Return &amp; reintegration · 2025</span><h3>Building local capacity to support returnees in Maiwut</h3><Link className="text-link" to="/news/local-capacity-return-reintegration-maiwut">Read update <span aria-hidden="true">→</span></Link></article>
            </div>
          </div>
          <Link className="btn btn-secondary news-home-button" to="/news">See all news &amp; updates</Link>
        </div>
      </Reveal>

      <Reveal as="section">
        <div className="container locations-section">
          <div>
            <span className="eyebrow">Where we work</span>
            <h2>Our field presence</h2>
          </div>
          <div className="locations-copy">
            <p>
              TAI’s main office is in Juba, with field coordination and programme experience across
              Akoka, Maiwut, Renk and Malakal.
            </p>
            <div className="location-list" aria-label="TAI locations">
              <span>Juba</span><span>Akoka</span><span>Maiwut</span><span>Renk</span><span>Malakal</span>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="cta-section">
        <div className="container cta-inner">
          <span className="eyebrow light">Partner with us</span>
          <h2>Let’s build practical solutions with communities.</h2>
          <p>For partnerships, programme enquiries, support or collaboration, get in touch with the TAI team.</p>
          <Link className="btn btn-primary" to="/contact">Contact TAI</Link>
        </div>
      </Reveal>
    </main>
  )
}
