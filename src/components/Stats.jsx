import { useLanguage } from '../i18n/LanguageContext';
import useReveal from '../hooks/useReveal';
import './Stats.css';

export default function Stats() {
  const { t } = useLanguage();
  const ref = useReveal();

  return (
    <section className="stats">
      <div className="container">
        <div ref={ref} className="stats-grid reveal">
          {t.stats.items.map((s) => (
            <div key={s.label} className="stat-item">
              <div className="stat-value text-gradient">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
