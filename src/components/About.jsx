import { useLanguage } from '../i18n/LanguageContext';
import Segments from '../i18n/Segments';
import useReveal from '../hooks/useReveal';
import './About.css';

export default function About() {
  const { t } = useLanguage();
  const ref = useReveal();

  return (
    <section id="about" className="section about">
      <div className="container">
        <div ref={ref} className="about-grid reveal">
          <div className="about-text">
            <span className="eyebrow">{t.about.eyebrow}</span>
            <h2>
              <Segments items={t.about.heading} />
            </h2>
            <p className="about-bio">{t.about.bio1}</p>
            <p className="about-bio">{t.about.bio2}</p>

            <div className="about-skills">
              {t.about.skills.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="about-facts">
            {t.about.facts.map((f) => (
              <div key={f.label} className="fact-card card">
                <div className="fact-label">{f.label}</div>
                <div className="fact-value">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
