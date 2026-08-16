import { useLanguage } from '../i18n/LanguageContext';
import useReveal from '../hooks/useReveal';
import './Portfolio.css';

export default function Portfolio() {
  const { t } = useLanguage();
  const ref = useReveal();

  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t.portfolio.eyebrow}</span>
          <h2>{t.portfolio.heading}</h2>
          <p>{t.portfolio.subtitle}</p>
        </div>

        <div ref={ref} className="portfolio-grid reveal">
          {t.portfolio.projects.map((project) => (
            <div key={project.title} className="portfolio-card card">
              <div className="portfolio-thumb">{project.emoji}</div>
              <div className="portfolio-body">
                <span className="portfolio-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="portfolio-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="portfolio-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
