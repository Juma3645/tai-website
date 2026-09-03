import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import usePageTitle from '../hooks/usePageTitle.js'
import bannerGroupImg from '../assets/images/poc-akoka-banner-group.jpg'
import maiwutCommunityImg from '../assets/images/maiwut-community-banner.jpg'
import maiwutEngagementImg from '../assets/images/maiwut-community-engagement.jpg'
import cornfieldImg from '../assets/images/livelihoods-cornfield.jpg'
import trainingImg from '../assets/images/gender-sensitivity-poc-akoka.jpg'
import familyImg from '../assets/images/shelter-family-under-tree.jpg'

export default function Programs() {
usePageTitle(
  'Programmes | Thrive Africa Initiative',
  '/programs'
)
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-copy">
          <span className="eyebrow light">Our programmes</span>
          <h1>Practical support, connected across protection and recovery.</h1>
          <p>TAI’s work connects protection, livelihoods and shelter support so that returnee and vulnerable communities can rebuild with dignity.</p>
        </div>
      </section>

      <Reveal as="section">
        <div className="container programme-detail">
          <div className="detail-media"><img src={bannerGroupImg} alt="Community protection session in Akoka County with UNMISS-supported banner" /></div>
          <div className="detail-copy">
            <span className="tag">Programme area</span>
            <span className="eyebrow">01 · Protection</span>
            <h2>Protection &amp; Gender-Based Violence</h2>
            <p>TAI works directly with communities to prevent and respond to protection risks and gender-based violence, particularly for women and girls affected by conflict and displacement.</p>
            <ul className="check-list">
              <li>Community-based protection and protection monitoring</li>
              <li>GBV prevention, response and referral pathways</li>
              <li>Gender-sensitive civic education and mobilisation</li>
              <li>Capacity strengthening with local and state authorities</li>
            </ul>
            <p>In Akoka, TAI formed and trained Community Protection Committees and conducted gender-sensitivity and protection activities. In Maiwut, TAI strengthened the capacity of Customs and Immigration officials, RRC representatives and traditional chiefs supporting returnees from Sudan and Ethiopia.</p>
          </div>
        </div>
        <div className="container photo-row programme-gallery">
          <figure className="field-photo"><img src={maiwutCommunityImg} alt="TAI and UNMISS-supported community activity in Maiwut County" loading="lazy" /><figcaption>Maiwut County · local capacity strengthening</figcaption></figure>
          <figure className="field-photo"><img src={maiwutEngagementImg} alt="Community members participating in a TAI-supported discussion in Maiwut County" loading="lazy" /><figcaption>Maiwut County · community engagement</figcaption></figure>
          <figure className="field-photo"><img src={trainingImg} alt="Participants at a gender-sensitivity and protection activity in Akoka County" loading="lazy" /><figcaption>Akoka County · gender sensitivity and protection</figcaption></figure>
        </div>
      </Reveal>

      <Reveal as="section" className="alt">
        <div className="container programme-detail reverse-detail">
          <div className="detail-media"><img src={cornfieldImg} alt="Agricultural field supporting livelihoods programming" /></div>
          <div className="detail-copy">
            <span className="tag">Programme area</span>
            <span className="eyebrow">02 · Livelihoods</span>
            <h2>Livelihoods</h2>
            <p>TAI supports women-led farming cooperatives and income-generating activities that build household food security and economic independence.</p>
            <p>In Renk County, working with FAO in-kind support, we prioritised women-headed households and women returnees for seed and tool distribution and integrated GBV risk mitigation into farming activities.</p>
            <Link className="text-link" to="/contact">Discuss partnership opportunities →</Link>
          </div>
        </div>
      </Reveal>

      <Reveal as="section">
        <div className="container programme-detail">
          <div className="detail-media"><img src={familyImg} alt="Household context for shelter and NFI support" /></div>
          <div className="detail-copy">
            <span className="tag">Programme area</span>
            <span className="eyebrow">03 · Humanitarian support</span>
            <h2>Shelter &amp; Non-Food Items (NFIs)</h2>
            <p>TAI supports returnee and displaced families with shelter assistance and essential household items, alongside protection and livelihoods work. In Maiwut, field activities have included households living with significant shelter needs.</p>
            <p>Our aim is practical assistance that responds to immediate household needs while keeping safety, dignity and vulnerability in view.</p>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="alt field-story">
        <div className="container field-story-grid">
          <div><span className="eyebrow">Field experience · 2025</span><h2>Strengthening local capacities for protection and return</h2></div>
          <div><p><strong>Akoka County, Upper Nile State.</strong> With UNMISS support, TAI formed and trained Community Protection Committees with strong women’s representation, conducted gender sensitivity workshops with state and local authorities, and led civic education on women’s right to participate in decision-making.</p><p>The experience reflects TAI’s focus on locally led protection systems that can continue beyond a single activity or project.</p></div>
        </div>
      </Reveal>

      <Reveal as="section" className="cta-section small-cta">
        <div className="container cta-inner"><h2>Let’s work together.</h2><p>Talk to us about programme partnerships, community engagement or support for our work.</p><Link className="btn btn-primary" to="/contact">Contact TAI</Link></div>
      </Reveal>
    </main>
  )
}
