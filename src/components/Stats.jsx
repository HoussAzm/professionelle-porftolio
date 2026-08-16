import useReveal from '../hooks/useReveal';
import './Stats.css';

const STATS = [
  { value: '30+', label: 'Projets livrés' },
  { value: '20+', label: 'Clients accompagnés' },
  { value: '5+', label: "Années d'expérience" },
  { value: '98%', label: 'Taux de satisfaction' },
];

export default function Stats() {
  const ref = useReveal();

  return (
    <section className="stats">
      <div className="container">
        <div ref={ref} className="stats-grid reveal">
          {STATS.map((s) => (
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
