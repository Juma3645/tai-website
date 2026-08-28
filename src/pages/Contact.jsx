import { useState } from 'react'
import usePageTitle from '../hooks/usePageTitle.js'

// FORM SETUP — read before publishing:
// 1. Go to https://formspree.io and sign up free with info@tafrica.org
// 2. Create a new form, name it "TAI Website Contact Form"
// 3. Formspree gives you a form endpoint like: https://formspree.io/f/xxxxxxxx
// 4. Replace YOUR_FORM_ID below with that ID
// 5. Submit one test message from the live site — Formspree requires a
//    confirmed test submission before it starts forwarding emails to your inbox.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xoeqqjaq'

export default function Contact() {
  usePageTitle('Contact | Thrive Africa Initiative')
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const form = e.target
    const data = new FormData(form)
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" style={{ color: '#B7D6A8' }}>Contact Us</span>
          <h1>Get in touch</h1>
          <p>
            We welcome enquiries from partners, donors, humanitarian organisations, and
            communities interested in working with TAI.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="info-grid">
            <div>
              <ul className="contact-list">
                <li><span>Email</span><a href="mailto:info@tafrica.org">info@tafrica.org</a></li>
                <li><span>Phone</span><a href="tel:+211921400547">+211 921 400 547</a></li>
                <li><span>Address</span>VHJ6+9JF, Juba, South Sudan</li>
                <li><span>Offices</span>Main office in Juba, with field coordination in Akoka County and Malakal</li>
                <li>
                  <span>Social</span>
                  <a href="https://www.facebook.com/share/1Ds5R9tw7D/" target="_blank" rel="noopener noreferrer">Facebook</a>
                  {' · '}
                  <a href="https://x.com/TAInitiative" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
                </li>
              </ul>
            </div>

            <div>
              {status === 'sent' ? (
                <div className="notice">
                  <p style={{ marginBottom: 0 }}>
                    Thank you — your message has been sent. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending…' : 'Send Message'}
                  </button>
                  {status === 'error' && (
                    <p style={{ color: '#9C3B34', marginTop: 'var(--space-2)' }}>
                      Something went wrong sending your message. Please try again, or email us
                      directly.
                    </p>
                  )}
                  <p className="form-note">
                    Messages sent through this form are delivered via Formspree, a third-party
                    form service, before reaching our inbox. Formspree does not publish or
                    share submissions.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="alt" id="support">
        <div className="container">
          <div className="notice clay" style={{ maxWidth: '68ch' }}>
            <span className="eyebrow" style={{ marginBottom: '0.4rem' }}>Support Our Work</span>
            <p>
              TAI does not yet have online payment processing set up — this isn't currently
              available for organizations based in South Sudan through major providers like
              Stripe, PayPal, or Flutterwave.
            </p>
            <p style={{ marginBottom: 0 }}>
              If you'd like to support our work — through a donation, partnership, or in-kind
              contribution — please get in touch directly using the details above and we'll
              walk you through the best way to do that.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
