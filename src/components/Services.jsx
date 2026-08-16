import { useLanguage } from '../i18n/LanguageContext';
import useReveal from '../hooks/useReveal';
import './Services.css';

export default function Services() {
  const { t } = useLanguage();
  const ref = useReveal();

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t.services.eyebrow}</span>
          <h2>{t.services.heading}</h2>
          <p>{t.services.subtitle}</p>
        </div>

        <div ref={ref} className="services-grid reveal">
          {t.services.items.map((service) => (
            <div key={service.title} className="service-card card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
