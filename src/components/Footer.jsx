import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>Thrive Africa Initiative</h4>
            <p style={{ maxWidth: '40ch' }}>
              A women-led national NGO working with vulnerable and conflict-affected
              communities in South Sudan.
            </p>
          </div>
          <div>
            <h4>Site</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/programs">Programmes</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:info@tafrica.org">info@tafrica.org</a></li>
              <li><a href="tel:+211921400547">+211 921 400 547</a></li>
              <li>
                <a href="https://www.facebook.com/share/1Ds5R9tw7D/" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://x.com/TAInitiative" target="_blank" rel="noopener noreferrer">
                  X (Twitter)
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Thrive Africa Initiative. Registered National NGO, South Sudan.</span>
          <span>Juba, South Sudan</span>
        </div>
      </div>
    </footer>
  )
}
