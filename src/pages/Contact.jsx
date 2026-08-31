import { useState } from 'react'
import usePageTitle from '../hooks/usePageTitle.js'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xoeqqjaq'

export default function Contact() {
  usePageTitle('Contact | Thrive Africa Initiative')
  const [status, setStatus] = useState('idle')

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('sending')
    const form = event.currentTarget
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (!response.ok) throw new Error('Submission failed')
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-copy">
          <span className="eyebrow light">Contact TAI</span>
          <h1>Let’s start a conversation.</h1>
          <p>We welcome enquiries from partners, donors, humanitarian organisations and communities interested in working with TAI.</p>
        </div>
      </section>

      <section>
        <div className="container contact-grid">
          <div className="contact-details">
            <span className="eyebrow">Reach us</span>
            <h2>Talk to the team</h2>
            <p className="contact-intro">For partnerships, programme enquiries, support or general information, use the details below or send us a message.</p>
            <ul className="contact-list">
              <li><span>Email</span><a href="mailto:info@tafrica.org">info@tafrica.org</a></li>
              <li><span>Phone</span><a href="tel:+211921400547">+211 921 400 547</a></li>
              <li><span>Location</span>Juba, South Sudan</li>
              <li><span>Field coordination</span>Akoka County, Upper Nile State and Malakal</li>
              <li><span>Social</span><a href="https://www.facebook.com/share/1Ds5R9tw7D/" target="_blank" rel="noopener noreferrer">Facebook</a><span className="inline-separator">·</span><a href="https://x.com/TAInitiative" target="_blank" rel="noopener noreferrer">X</a></li>
            </ul>
          </div>

          <div className="contact-form-wrap">
            {status === 'sent' ? (
              <div className="success-panel"><span className="success-mark">✓</span><h2>Message received.</h2><p>Thank you for reaching out to Thrive Africa Initiative. We’ll get back to you as soon as we can.</p><button className="btn btn-secondary" type="button" onClick={() => setStatus('idle')}>Send another message</button></div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-heading"><span className="eyebrow">Send a message</span><h2>How can we help?</h2></div>
                <div className="form-field"><label htmlFor="name">Your name</label><input type="text" id="name" name="name" autoComplete="name" required /></div>
                <div className="form-field"><label htmlFor="email">Email address</label><input type="email" id="email" name="email" autoComplete="email" required /></div>
                <div className="form-field"><label htmlFor="message">Message</label><textarea id="message" name="message" rows="6" required /></div>
                <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send message'}</button>
                {status === 'error' && <p className="form-error" role="alert">We couldn’t send the message. Please try again or email info@tafrica.org directly.</p>}
                <p className="form-note">Your message is submitted through Formspree before being forwarded to TAI’s inbox.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="alt" id="support">
        <div className="container support-panel">
          <div><span className="eyebrow">Support our work</span><h2>Interested in supporting TAI?</h2></div>
          <div><p>TAI does not currently have online payment processing set up. If you would like to support our work through a donation, partnership or in-kind contribution, please contact us directly and we will discuss the available options.</p><a className="text-link" href="mailto:info@tafrica.org">Email TAI →</a></div>
        </div>
      </section>
    </main>
  )
}
