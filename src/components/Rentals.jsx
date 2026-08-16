import useReveal from '../hooks/useReveal';
import './Rentals.css';

const PROPERTY_TYPES = [
  {
    icon: '🏰',
    title: 'Palais',
    description: 'Demeures royales avec riad intérieur, piscine et service de majordome.',
  },
  {
    icon: '🏡',
    title: 'Villas',
    description: 'Villas modernes avec piscine privée, jardin et vue sur l\'Atlas.',
  },
  {
    icon: '🕌',
    title: 'Riads',
    description: 'Riads traditionnels rénovés au cœur de la médina, authenticité et confort.',
  },
  {
    icon: '🏢',
    title: 'Appartements',
    description: 'Appartements design dans les quartiers de Guéliz et Hivernage.',
  },
];

const FEATURES = [
  'Conciergerie 24/7',
  'Ménage & linge inclus',
  'Transferts aéroport',
  'Réservation flexible',
];

export default function Rentals() {
  const ref = useReveal();

  const scrollToContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="rentals" className="section rentals">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Location de luxe · Marrakech</span>
          <h2>Des séjours d'exception à Marrakech</h2>
          <p>
            En parallèle du développement web, je gère un portefeuille de biens haut de gamme
            en location courte durée — de la réservation à la conciergerie sur place.
          </p>
        </div>

        <div ref={ref} className="rentals-grid reveal">
          {PROPERTY_TYPES.map((type) => (
            <div key={type.title} className="rental-card card">
              <div className="rental-icon">{type.icon}</div>
              <h3>{type.title}</h3>
              <p>{type.description}</p>
            </div>
          ))}
        </div>

        <div className="rentals-footer">
          <ul className="rentals-features">
            {FEATURES.map((f) => (
              <li key={f}>
                <span className="feature-dot" />
                {f}
              </li>
            ))}
          </ul>

          <button className="btn btn-primary" onClick={scrollToContact}>
            Demander une disponibilité
          </button>
        </div>
      </div>
    </section>
  );
}
