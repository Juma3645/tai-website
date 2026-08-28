import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import heroImg from '../assets/images/gender-sensitivity-poc-akoka.jpg'
import protectionImg from '../assets/images/maiwut-banner-notebooks.jpg'
import livelihoodsImg from '../assets/images/livelihoods-cornfield.jpg'
import classroomImg from '../assets/images/shelter-family-under-tree.jpg'

export default function Home() {
  usePageTitle('Thrive Africa Initiative | South Sudan')

  return (
    <main>
      <section className="hero">
        <div className="container">
          <div>
            <span className="eyebrow" style={{ color: '#B7D6A8' }}>South Sudan</span>
            <h1>Where women lead, communities rise.</h1>
            <p className="lede">
              Thrive Africa Initiative (TAI) is a women-led national NGO working with
              vulnerable and conflict-affected communities in South Sudan. Our work focuses
              on protection, gender-based violence prevention and response, livelihoods, and
              shelter and non-food item assistance.
            </p>
            <div className="btn-row">
              <Link className="btn btn-primary" to="/programs">Our Programmes</Link>
              <Link className="btn btn-outline" to="/contact">Get in Touch</Link>
            </div>
          </div>
          <div className="hero-figure">
            <img
              src={heroImg}
              alt="Thrive Africa Initiative team and community members in Akoka County with a UNMISS-supported protection banner"
            />
          </div>
        </div>
      </section>

      <Reveal as="section">
        <div className="container" style={{ maxWidth: '74ch' }}>
          <span className="eyebrow">Who we are</span>
          <h2>Working with communities across South Sudan</h2>
          <p style={{ fontSize: '1.1rem', color: '#2B3B30' }}>
            TAI is a women-constituent-led organization formed by indigenous women in South
            Sudan. We work with returnees, indigenous women, and vulnerable communities to
            strengthen protection, gender equality, and household resilience — grounded in
            community ownership and led at every level by the women closest to the work.
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className="alt tight">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 'var(--space-2)' }}>
            <span className="eyebrow">TAI at a glance</span>
          </div>
          <div className="glance-strip">
            <div className="glance-item">Women-led<br />national NGO</div>
            <div className="glance-item">Protection · GBV<br />Livelihoods · Shelter &amp; NFIs</div>
            <div className="glance-item">Community-based<br />programming</div>
            <div className="glance-item">Registered NGO<br />RRC, South Sudan</div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we do</span>
            <h2>Our programmes</h2>
          </div>

          <div className="split" style={{ marginBottom: 'var(--space-4)' }}>
            <div className="split-media">
              <img src={protectionImg} alt="Community elders with TAI and UNMISS protection banner, Maiwut County" />
            </div>
            <div className="split-text">
              <span className="tag">Active</span>
              <h3>Protection &amp; Gender-Based Violence</h3>
              <p>
                Community-based protection, GBV prevention and response, referral pathways,
                and gender-sensitive civic education — supporting safer environments in Akoka
                and Maiwut counties, including improved school safety for girls.
              </p>
            </div>
          </div>

          <div className="split reverse" style={{ marginBottom: 'var(--space-4)' }}>
            <div className="split-media">
              <img src={livelihoodsImg} alt="Community water point supporting household resilience, Upper Nile State" />
            </div>
            <div className="split-text">
              <span className="tag">Active</span>
              <h3>Livelihoods</h3>
              <p>
                Women-led farming cooperatives and income-generating activities that build
                household food security and economic independence, integrated with GBV risk
                mitigation.
              </p>
            </div>
          </div>

          <div className="split">
            <div className="split-media">
              <img src={classroomImg} alt="Outdoor learning session supporting safer access to education for girls" />
            </div>
            <div className="split-text">
              <span className="tag">Active</span>
              <h3>Shelter &amp; Non-Food Items (NFIs)</h3>
              <p>
                Supporting returnee and displaced families with shelter assistance and
                essential household items, alongside our protection and livelihoods work.
              </p>
            </div>
          </div>

          <p style={{ marginTop: 'var(--space-4)' }}>
            <Link to="/programs">Read more about our programmes →</Link>
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className="alt">
        <div className="container">
          <div className="innovation-feature">
            <div>
              <span className="eyebrow" style={{ color: '#B7D6A8' }}>Innovation</span>
              <h2>Innovation for safer protection programming</h2>
              <p>
                TAI is developing ProtectionSphere, a secure digital platform designed to
                strengthen protection and GBV case management, referrals, information
                management, and programme reporting. It began as an internal response to
                TAI's own paper-based case records, and is now being incubated as a related,
                separately branded initiative.
              </p>
            </div>
            <div className="innovation-visual">ProtectionSphere</div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">On the ground</span>
            <h2>Where we work</h2>
          </div>
          <p style={{ maxWidth: '60ch' }}>
            Main office in Juba, with field coordination across Upper Nile State — including
            Akoka, Maiwut, and Renk counties — and Malakal.
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className="dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Want to partner, support, or learn more?</h2>
          <p style={{ color: '#D9E4D2', maxWidth: '50ch', margin: '0 auto var(--space-3)' }}>
            We'd love to hear from you — whether you're a community member, a donor, or a
            fellow organization.
          </p>
          <Link className="btn btn-primary" to="/contact">Contact Us</Link>
        </div>
      </Reveal>
    </main>
  )
}