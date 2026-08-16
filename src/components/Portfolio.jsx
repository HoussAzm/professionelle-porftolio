import useReveal from '../hooks/useReveal';
import './Portfolio.css';

const PROJECTS = [
  {
    emoji: '🏛️',
    title: 'MenaraStay',
    category: 'Plateforme de réservation',
    description: 'Plateforme développée pour mon activité de location de palais, villas et riads à Marrakech : gestion multi-propriétés et paiement en ligne.',
    tags: ['React', 'Node.js', 'Stripe'],
  },
  {
    emoji: '🛍️',
    title: 'Atlas Boutique',
    category: 'E-commerce',
    description: 'Boutique en ligne pour une marque d\'artisanat marocain, du catalogue à la logistique.',
    tags: ['Next.js', 'Laravel', 'MySQL'],
  },
  {
    emoji: '📊',
    title: 'PalmDash',
    category: 'Outil interne',
    description: "Tableau de bord d'administration pour piloter réservations, revenus et occupation en temps réel.",
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    emoji: '🏢',
    title: 'Noor Consulting',
    category: 'Site vitrine',
    description: "Site corporate pour un cabinet de conseil, optimisé pour la génération de leads.",
    tags: ['React', 'Tailwind CSS'],
  },
];

export default function Portfolio() {
  const ref = useReveal();

  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Projets</span>
          <h2>Une sélection de mes réalisations</h2>
          <p>Quelques projets représentatifs de ma manière de travailler : design soigné, code propre, résultats mesurables.</p>
        </div>

        <div ref={ref} className="portfolio-grid reveal">
          {PROJECTS.map((project) => (
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
