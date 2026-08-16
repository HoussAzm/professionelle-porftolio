import useReveal from '../hooks/useReveal';
import './Services.css';

const SERVICES = [
  {
    icon: '🎨',
    title: 'Design & UI/UX',
    description: "Interfaces modernes, cohérentes et pensées pour guider l'utilisateur vers l'action.",
  },
  {
    icon: '⚛️',
    title: 'Développement Frontend',
    description: 'Applications React / Next.js rapides, accessibles et responsive sur tous les écrans.',
  },
  {
    icon: '🔧',
    title: 'Développement Backend',
    description: 'APIs et architectures robustes avec Node.js et Laravel, pensées pour évoluer.',
  },
  {
    icon: '🛒',
    title: 'E-commerce',
    description: 'Boutiques en ligne performantes, du catalogue produit au paiement sécurisé.',
  },
  {
    icon: '🏨',
    title: 'Plateformes de réservation',
    description: "Systèmes de réservation sur mesure pour l'hôtellerie et la location de biens.",
  },
  {
    icon: '🚀',
    title: 'Consulting technique',
    description: "Audit, choix technologiques et accompagnement pour lancer ou faire évoluer un produit.",
  },
];

export default function Services() {
  const ref = useReveal();

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Services</span>
          <h2>Ce que je peux faire pour vous</h2>
          <p>De la première maquette à la mise en production, je couvre l'ensemble du cycle de développement.</p>
        </div>

        <div ref={ref} className="services-grid reveal">
          {SERVICES.map((service) => (
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
