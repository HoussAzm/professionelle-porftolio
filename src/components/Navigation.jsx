import { useEffect, useState } from 'react';
import Logo from './Logo';
import './Navigation.css';

const LINKS = [
  { label: 'À propos', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Locations', href: '#rentals' },
  { label: 'Projets', href: '#portfolio' },
  { label: 'Avis', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#top" className="navbar-logo" onClick={(e) => handleNavClick(e, '#top')}>
          <Logo size={34} />
          <span className="logo-text">Houssam Azmour</span>
        </a>

        <nav className={`navbar-links ${menuOpen ? 'is-open' : ''}`}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <button
            className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Ouvrir le menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
