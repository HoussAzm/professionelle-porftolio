import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import './Navigation.css';

export default function Navigation() {
  const { t } = useLanguage();
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
          {t.nav.links.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <LanguageSwitcher />
          <button
            className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={t.nav.menuAriaLabel}
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
