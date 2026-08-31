import { Link } from 'react-router-dom'
import logo from '../assets/images/tai-logo-wordmark.png'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <img src={logo} alt="Thrive Africa Initiative" />
            <p>Working alongside women, returnees and vulnerable communities to strengthen protection, livelihoods and resilience in South Sudan.</p>
          </div>
          <div><h3>Explore</h3><Link to="/">Home</Link><Link to="/about">About</Link><Link to="/programs">Programmes</Link><Link to="/contact">Contact</Link></div>
          <div><h3>Connect</h3><a href="mailto:info@tafrica.org">info@tafrica.org</a><a href="tel:+211921400547">+211 921 400 547</a><a href="https://www.facebook.com/share/1Ds5R9tw7D/" target="_blank" rel="noopener noreferrer">Facebook</a><a href="https://x.com/TAInitiative" target="_blank" rel="noopener noreferrer">X</a></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Thrive Africa Initiative · Registered National NGO, South Sudan</span><span>Juba, South Sudan</span></div>
      </div>
    </footer>
  )
}
