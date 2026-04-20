import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'About',      href: '#about'      },
  { label: 'Membership', href: '#membership'  },
  { label: 'Trainers',   href: '#trainers'    },
  { label: 'Gallery',    href: '#gallery'     },
  { label: 'Contact',    href: '#contact'     },
]

function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)
  const [activeLink,  setActiveLink]  = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setActiveLink(href)
    setMenuOpen(false)
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <a href="#" className="navbar__logo" onClick={() => handleNav('')}>
          <span className="navbar__logo-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <polygon points="14,2 26,8 26,20 14,26 2,20 2,8" stroke="#ff6b00" strokeWidth="2" fill="none"/>
              <polygon points="14,7 21,11 21,17 14,21 7,17 7,11" fill="#ff6b00" opacity="0.8"/>
            </svg>
          </span>
          <span className="navbar__logo-text">
            INFINITE<span className="navbar__logo-accent"> SPORTS CLUB</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="navbar__links" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar__link ${activeLink === link.href ? 'navbar__link--active' : ''}`}
              onClick={() => handleNav(link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#membership" className="navbar__cta btn btn-primary">
          Join Now
        </a>

        {/* Hamburger */}
        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="navbar__mobile-link"
            onClick={() => handleNav(link.href)}
          >
            {link.label}
          </a>
        ))}
        <a href="#membership" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
          Join Now
        </a>
      </div>
    </header>
  )
}

export default Navbar
