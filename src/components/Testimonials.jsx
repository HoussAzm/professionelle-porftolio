import { useLanguage } from '../i18n/LanguageContext';
import useReveal from '../hooks/useReveal';
import './Testimonials.css';

export default function Testimonials() {
  const { t } = useLanguage();
  const ref = useReveal();

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t.testimonials.eyebrow}</span>
          <h2>{t.testimonials.heading}</h2>
        </div>

        <div ref={ref} className="testimonials-grid reveal">
          {t.testimonials.items.map((item) => (
            <div key={item.name} className="testimonial-card card">
              <div className="testimonial-quote">“{item.quote}”</div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{item.name.charAt(0)}</div>
                <div>
                  <div className="testimonial-name">{item.name}</div>
                  <div className="testimonial-role">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
