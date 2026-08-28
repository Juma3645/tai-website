import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/images/tai-logo-icon.png'

const NAV_ITEMS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programmes' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <img src={logo} alt="Thrive Africa Initiative logo" />
          <span className="brand-text">
            Thrive Africa
            <br />
            Initiative
          </span>
        </Link>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          ☰ Menu
        </button>

        <nav className={'main-nav' + (open ? ' open' : '')} aria-label="Primary">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => (isActive ? 'active' : undefined)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="nav-donate-item">
              <Link className="nav-donate" to="/contact#support" onClick={() => setOpen(false)}>
                Donate
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
