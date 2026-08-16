import './Hero.css';

const STATS = [
  { value: '5+', label: 'Ans d’expérience' },
  { value: '30+', label: 'Projets livrés' },
  { value: '20+', label: 'Clients satisfaits' },
];

export default function Hero() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-badge">💼 IT & Location de luxe à Marrakech</div>

          <h1>
            Développeur Full-Stack et hôte de séjours d'exception à{' '}
            <span className="text-gradient">Marrakech</span>
          </h1>

          <p className="hero-subtitle">
            Je conçois des sites et plateformes web sur mesure, et je gère en parallèle un
            portefeuille de palais, villas, riads et appartements en location courte durée.
            Deux activités, une même exigence de qualité.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => scrollTo('#contact')}>
              Démarrer un projet
            </button>
            <button className="btn btn-secondary" onClick={() => scrollTo('#rentals')}>
              Voir mes locations
            </button>
          </div>

          <div className="hero-stats">
            {STATS.map((s) => (
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
