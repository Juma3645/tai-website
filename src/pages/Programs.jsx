import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import bannerGroupImg from '../assets/images/poc-akoka-banner-group.jpg'
import eldersImg from '../assets/images/community-gathering-wide.jpg'
import womenBannerImg from '../assets/images/akoka-women-poc-banner.jpg'
import cornfieldImg from '../assets/images/livelihoods-cornfield.jpg'
import classroomImg from '../assets/images/outdoor-classroom.jpg'
import trainingImg from '../assets/images/training-session-flipchart.jpg'
import familyImg from '../assets/images/shelter-family-under-tree.jpg'

export default function Programs() {
  usePageTitle('Programs | Thrive Africa Initiative')

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: '#B7D6A8' }}>Our Programmes</span>
          <h1>Three connected areas of work</h1>
          <p>
            TAI works across three connected areas — protecting women and girls from
            violence, strengthening livelihoods, and expanding shelter support — so that
            returnee and vulnerable communities can rebuild with dignity.
          </p>
        </div>
      </section>

      <Reveal as="section">
        <div className="container">
          <div className="split" style={{ marginBottom: 'var(--space-4)' }}>
            <div className="split-media">
              <figure className="field-photo">
                <img src={bannerGroupImg} alt="Community protection session in Akoka County with UNMISS-supported banner" />
                <figcaption>Akoka County, Upper Nile State — protection and POC capacity strengthening | Formation of Community Protection Committee</figcaption>
              </figure>
            </div>
            <div className="split-text">
              <span className="tag" style={{ marginBottom: 'var(--space-1)' }}>Active Programme</span>
              <h2>Protection &amp; Gender-Based Violence</h2>
              <p>
                TAI works directly in communities to prevent and respond to gender-based
                violence, particularly for returnee and displaced women and girls. Our work
                includes:
              </p>
              <ul>
                <li>Community-based protection and protection monitoring</li>
                <li>GBV prevention and response, and referral pathways</li>
                <li>Gender-sensitive civic education and community mobilisation</li>
                <li>Capacity strengthening with local and state authorities</li>
              </ul>
              <p>
                Our work has supported safer environments in Akoka and Maiwut counties,
                including improving school safety for girls through infrastructure like
                fencing and solar lighting.
              </p>
            </div>
          </div>

          <div className="photo-row" style={{ marginTop: 'var(--space-3)' }}>
            <figure className="field-photo">
              <img src={eldersImg} alt="Community elders with a Maiwut County protection banner" loading="lazy" />
              <figcaption>Maiwut County — community engagement</figcaption>
            </figure>
            <figure className="field-photo">
              <img src={womenBannerImg} alt="Women in Akoka County holding a protection of civilians program banner" loading="lazy" />
              <figcaption>Akoka County — women's participation in protection programming</figcaption>
            </figure>
            <figure className="field-photo">
              <img src={classroomImg} alt="Outdoor learning session under trees" loading="lazy" />
              <figcaption>Outdoor learning session — supporting safer access to education for girls</figcaption>
            </figure>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="alt">
        <div className="container">
          <div className="split reverse">
            <div className="split-media">
              <figure className="field-photo">
                <img src={cornfieldImg} alt="TAI-supported crop field, part of livelihoods and food security programming" />
                <figcaption>Crop field supported through TAI's livelihoods programming</figcaption>
              </figure>
            </div>
            <div className="split-text">
              <span className="tag" style={{ marginBottom: 'var(--space-1)' }}>Active Programme</span>
              <h2>Livelihoods</h2>
              <p>
                TAI supports women-led farming cooperatives and income-generating activities
                that build household food security and economic independence, reducing
                women's exposure to exploitation and violence in the process.
              </p>
              <p>
                In Renk County, working with FAO in-kind support, we prioritized
                women-headed households and women returnees for seed and tool distribution,
                and integrated GBV risk mitigation directly into farming activities.
              </p>
            </div>
          </div>

          <div className="photo-row" style={{ marginTop: 'var(--space-3)' }}>
            <figure className="field-photo">
              <img src={trainingImg} alt="Community training session under trees in Akoka County" loading="lazy" />
              <figcaption>Akoka County — cooperative and community training session</figcaption>
            </figure>
          </div>
        </div>
      </Reveal>

      <Reveal as="section">
        <div className="container">
          <div className="split">
            <div className="split-media">
              <figure className="field-photo">
                <img src={familyImg} alt="Family and household belongings, part of the community context for shelter and NFI support" />
                <figcaption>Household context — the families TAI's shelter and NFI support reaches</figcaption>
              </figure>
            </div>
            <div className="split-text">
              <span className="tag" style={{ marginBottom: 'var(--space-1)' }}>Active Programme</span>
              <h2>Shelter &amp; Non-Food Items (NFIs)</h2>
              <p>
                TAI supports returnee and displaced families with shelter assistance and
                essential household items, alongside our protection and livelihoods work.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="alt">
        <div className="container" style={{ maxWidth: '68ch' }}>
          <div className="section-head">
            <span className="eyebrow">Field experience</span>
            <h2>Strengthening local capacities for protection and return</h2>
          </div>
          <p>
            <strong>Akoka County, Upper Nile State.</strong> Between July and September 2025,
            with UNMISS support, TAI formed and trained Community Protection Committees with
            strong women's representation, conducted gender sensitivity workshops with state
            and local authorities, and led civic education campaigns on women's right to vote
            and participate in decision-making.
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className="dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Interested in partnering on this work?</h2>
          <p style={{ color: '#D9E4D2', maxWidth: '50ch', margin: '0 auto var(--space-3)' }}>
            We work with local authorities, community structures, and international partners
            to design programs shaped by the communities we serve.
          </p>
          <Link className="btn btn-primary" to="/contact">Contact Us</Link>
        </div>
      </Reveal>
    </main>
  )
}