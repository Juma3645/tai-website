import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import logo from '../assets/images/tai-logo-wordmark.png'

const NAV_ITEMS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programmes' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location.pathname, location.hash])

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" to="/" aria-label="Thrive Africa Initiative home">
          <img src={logo} alt="Thrive Africa Initiative" />
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="nav-toggle-lines" aria-hidden="true"><i /><i /><i /></span>
          <span>{open ? 'Close' : 'Menu'}</span>
        </button>

        <nav id="primary-navigation" className={`main-nav${open ? ' open' : ''}`} aria-label="Primary navigation">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => (isActive ? 'active' : undefined)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="nav-donate-item">
              <Link className="nav-donate" to="/contact#support">Support our work</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
