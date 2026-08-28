import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import usePageTitle from '../hooks/usePageTitle.js'

export default function About() {
  usePageTitle('About Thrive Africa Initiative | South Sudan')

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: '#B7D6A8' }}>About Us</span>
          <h1>"Where Women Lead, Communities Rise."</h1>
        </div>
      </section>

      <Reveal as="section">
        <div className="container" style={{ maxWidth: '74ch' }}>
          <span className="eyebrow">Who we are</span>
          <h2>Thrive Africa Initiative</h2>
          <p style={{ fontSize: '1.1rem', color: '#2B3B30' }}>
            Thrive Africa Initiative (TAI) is a women-led national NGO formed by indigenous
            women in South Sudan to work with vulnerable and conflict-affected communities.
            We work with returnees, indigenous women, and vulnerable communities to strengthen
            gender equality, protection, and sustainable development.
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className="alt">
        <div className="container">
          <div className="info-grid">
            <div>
              <span className="eyebrow">Our Mission</span>
              <p style={{ fontSize: '1.05rem', color: '#2B3B30' }}>
                To empower women, returnees, and vulnerable communities through capacity
                building, protection, livelihood support, and civic engagement — promoting
                gender equality and indigenous leadership for sustainable peace and
                development.
              </p>
            </div>
            <div>
              <span className="eyebrow">Our Vision</span>
              <p style={{ fontSize: '1.05rem', color: '#2B3B30' }}>
                A peaceful, inclusive, and resilient society where women, youth, and returnees
                thrive as equal partners in development and nation-building.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What guides us</span>
            <h2>Our Values</h2>
          </div>
          <ul className="value-list">
            <li><strong>Gender Equality</strong>Centering women and girls in all programs.</li>
            <li><strong>Inclusivity</strong>Ensuring diverse voices, especially indigenous communities, are heard.</li>
            <li><strong>Accountability</strong>Maintaining transparency in service delivery and partnerships.</li>
            <li><strong>Peace &amp; Resilience</strong>Promoting coexistence, protection, and conflict resolution.</li>
            <li><strong>Community Ownership</strong>Strengthening grassroots-led solutions.</li>
          </ul>
        </div>
      </Reveal>

      <Reveal as="section" className="alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Governance</span>
            <h2>Leadership &amp; Governance</h2>
          </div>
          <div className="info-grid">
            <div>
              <span className="eyebrow">Board</span>
              <p>
                Governed by a five-member Board of Directors (3 women, 2 men), chaired by{' '}
                <strong>Poni Annet</strong>.
              </p>
            </div>
            <div>
              <span className="eyebrow">Staffing</span>
              <p>
                60% of TAI's staff are women, including key leadership roles in Gender and
                Protection.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How we work</span>
            <h2>Community-led, protection-centred, partnership-driven</h2>
          </div>
          <div className="info-grid">
            <div>
              <h3>Community-led</h3>
              <p>
                We work with communities to identify priorities and develop responses that
                reflect local realities.
              </p>
            </div>
            <div>
              <h3>Protection-centred</h3>
              <p>
                We place safety, dignity, inclusion, and the rights of affected people at the
                centre of our programmes.
              </p>
            </div>
          </div>
          <div className="info-grid" style={{ marginTop: 'var(--space-3)' }}>
            <div>
              <h3>Partnership-driven</h3>
              <p>
                We work with local structures, government, humanitarian partners — including
                UNMISS — and other stakeholders to strengthen sustainable solutions.
              </p>
            </div>
            <div>
              <h3>Registered &amp; accountable</h3>
              <p>
                TAI is a registered National NGO under the Relief and Rehabilitation
                Commission (RRC) of South Sudan.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="alt">
        <div className="container">
          <div className="notice" style={{ maxWidth: '68ch' }}>
            <span className="eyebrow" style={{ marginBottom: '0.4rem' }}>Innovation</span>
            <p style={{ marginBottom: 0 }}>
              TAI is also developing <strong>ProtectionSphere</strong>, a digital platform to
              strengthen protection and GBV case management — read more on the{' '}
              <Link to="/">homepage</Link> or at{' '}
              <a href="https://protectionsphere.org" target="_blank" rel="noopener noreferrer">
                protectionsphere.org
              </a>.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal as="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Where we work</span>
            <h2>Juba, Akoka, Maiwut, Renk, and Malakal</h2>
          </div>
          <p style={{ maxWidth: '60ch' }}>
            Main office in Juba, with field coordination across Upper Nile State and Malakal.
          </p>
        </div>
      </Reveal>
    </main>
  )
}
