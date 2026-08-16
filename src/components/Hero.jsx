import { useLanguage } from '../i18n/LanguageContext';
import Segments from '../i18n/Segments';
import './Hero.css';

export default function Hero() {
  const { t } = useLanguage();
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-badge">{t.hero.badge}</div>

          <h1>
            <Segments items={t.hero.heading} />
          </h1>

          <p className="hero-subtitle">{t.hero.subtitle}</p>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => scrollTo('#contact')}>
              {t.hero.ctaPrimary}
            </button>
            <button className="btn btn-secondary" onClick={() => scrollTo('#rentals')}>
              {t.hero.ctaSecondary}
            </button>
          </div>

          <div className="hero-stats">
            {t.hero.stats.map((s) => (
              <div key={s.label} className="hero-stat">
                <div className="hero-stat-value">{s.value}</div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-glow" />
          <div className="hero-code">
            <div className="hero-code-dots">
              <span /><span /><span />
            </div>
            <pre>{`const houssam = {
  name: 'Houssam Azmour',
  roles: ['Full-Stack Developer', 'Host & Property Manager'],
  stack: ['React', 'Node.js', 'Laravel'],
  properties: ['Palais', 'Villas', 'Riads', 'Appartements'],
  based: 'Marrakech, MA',
  available: true,
};`}</pre>
          </div>
        </div>
      </div>
    </section>
  );
}
