import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import aboutImg from '../assets/images/community-gathering-women.jpg'
import presenceImg from '../assets/News/Community Engagement.jpg'

const values = [
  ['Gender equality', 'Centering women and girls in programmes, decisions and community life.'],
  ['Inclusivity', 'Making space for diverse voices, especially people and communities facing exclusion.'],
  ['Accountability', 'Being transparent, responsible and responsive to the people and partners we serve.'],
  ['Peace & resilience', 'Promoting coexistence, protection and practical ways to recover from crisis.'],
  ['Community ownership', 'Strengthening solutions that communities can lead, adapt and sustain.'],
]

export default function About() {
  usePageTitle('About Thrive Africa Initiative | South Sudan')

  return (
    <main>
      <section className="page-hero page-hero-about">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow light">About TAI</span>
            <h1>Women’s leadership at the centre of community action.</h1>
            <p>Thrive Africa Initiative is a women-led national NGO working with vulnerable and conflict-affected communities in South Sudan.</p>
          </div>
          <img src={aboutImg} alt="Women and community members participating in TAI-supported activities" />
        </div>
      </section>

      <Reveal as="section">
        <div className="container about-lead">
          <span className="eyebrow">Who we are</span>
          <h2>Rooted in South Sudan. Working alongside communities.</h2>
          <p>
            Thrive Africa Initiative (TAI) was formed by indigenous women in South Sudan to work
            with returnees, women and other vulnerable communities. We combine protection,
            livelihoods and humanitarian support with community mobilisation and local capacity building.
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className="alt">
        <div className="container mission-grid">
          <article className="statement-card">
            <span className="eyebrow">Our mission</span>
            <h2>Empower people to shape safer, more resilient communities.</h2>
            <p>
              To empower women, returnees and vulnerable communities through capacity building,
              protection, livelihood support and civic engagement — promoting gender equality and
              indigenous leadership for sustainable peace and development.
            </p>
          </article>
          <article className="statement-card dark-card">
            <span className="eyebrow light">Our vision</span>
            <h2>A peaceful, inclusive and resilient society.</h2>
            <p>
              A society where women, youth and returnees thrive as equal partners in development
              and nation-building.
            </p>
          </article>
        </div>
      </Reveal>

      <Reveal as="section">
        <div className="container">
          <div className="section-intro compact">
            <div><span className="eyebrow">What guides us</span><h2>Our values</h2></div>
            <p>These principles shape how we work with communities, partners and each other.</p>
          </div>
          <div className="values-grid">
            {values.map(([title, text], index) => (
              <article className="value-card" key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="alt">
        <div className="container governance-grid">
          <div>
            <span className="eyebrow">Governance</span>
            <h2>Accountable leadership</h2>
            <p>
              TAI is governed by a five-member Board of Directors (three women and two men),
              chaired by Poni Annet. Women make up 60% of TAI’s staff, including key leadership roles in Gender and Protection.
            </p>
          </div>
          <div className="governance-facts">
            <div><strong>5</strong><span>Board members</span></div>
            <div><strong>3 / 2</strong><span>Women / men on the Board</span></div>
            <div><strong>60%</strong><span>Women across staff</span></div>
            <div><strong>RRC</strong><span>Registered National NGO</span></div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section">
        <div className="container approach-section">
          <div className="section-intro compact">
            <div><span className="eyebrow">Our approach</span><h2>Community-led and protection-centred</h2></div>
          </div>
          <div className="approach-grid">
            <article><span>01</span><h3>Community-led</h3><p>We work with communities to identify priorities and develop responses that reflect local realities.</p></article>
            <article><span>02</span><h3>Protection-centred</h3><p>Safety, dignity, inclusion and the rights of affected people remain central to our programmes.</p></article>
            <article><span>03</span><h3>Partnership-driven</h3><p>We work with local structures, authorities, humanitarian partners and other stakeholders to strengthen sustainable solutions.</p></article>
            <article><span>04</span><h3>Locally accountable</h3><p>As a registered National NGO under the Relief and Rehabilitation Commission, we are grounded in South Sudanese leadership and context.</p></article>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="innovation-mini">
        <div className="container innovation-mini-inner">
          <div><span className="eyebrow">Digital innovation</span><h2>ProtectionSphere</h2></div>
          <div><p>TAI is developing a separate digital protection and GBV case-management platform informed by real operational needs.</p><a className="text-link" href="https://protectionsphere.org" target="_blank" rel="noopener noreferrer">Visit ProtectionSphere →</a></div>
        </div>
      </Reveal>

      <Reveal as="section">
        <div className="container presence-section">
          <div className="presence-copy"><span className="eyebrow">Field presence</span><h2>Our field presence</h2><p>TAI’s main office is in Juba, with field coordination and programme experience in Akoka, Maiwut, Renk and Malakal.</p></div>
          <figure className="presence-photo"><img src={presenceImg} alt="Community engagement activity in Akoka County" loading="lazy" /><figcaption>Community engagement · Akoka County</figcaption></figure>
        </div>
      </Reveal>

      <Reveal as="section" className="cta-section small-cta">
        <div className="container cta-inner"><h2>Want to know more about TAI?</h2><p>We welcome conversations with communities, partners, donors and organisations working for a safer South Sudan.</p><Link className="btn btn-primary" to="/contact">Get in touch</Link></div>
      </Reveal>
    </main>
  )
}
