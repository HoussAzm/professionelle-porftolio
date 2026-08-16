import { useLanguage } from '../i18n/LanguageContext';
import useReveal from '../hooks/useReveal';
import './Rentals.css';

export default function Rentals() {
  const { t } = useLanguage();
  const ref = useReveal();

  const scrollToContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="rentals" className="section rentals">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t.rentals.eyebrow}</span>
          <h2>{t.rentals.heading}</h2>
          <p>{t.rentals.subtitle}</p>
        </div>

        <div ref={ref} className="rentals-grid reveal">
          {t.rentals.types.map((type) => (
            <div key={type.title} className="rental-card card">
              <div className="rental-icon">{type.icon}</div>
              <h3>{type.title}</h3>
              <p>{type.description}</p>
            </div>
          ))}
        </div>

        <div className="rentals-footer">
          <ul className="rentals-features">
            {t.rentals.features.map((f) => (
              <li key={f}>
                <span className="feature-dot" />
                {f}
              </li>
            ))}
          </ul>

          <button className="btn btn-primary" onClick={scrollToContact}>
            {t.rentals.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
