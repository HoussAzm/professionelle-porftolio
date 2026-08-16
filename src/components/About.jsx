import useReveal from '../hooks/useReveal';
import './About.css';

const SKILLS = [
  'React', 'Next.js', 'JavaScript / TypeScript', 'Node.js', 'Laravel', 'PHP',
  'MySQL / PostgreSQL', 'Tailwind CSS', 'REST APIs', 'Git', 'Figma',
];

const FACTS = [
  { label: 'Basé à', value: 'Marrakech, Maroc' },
  { label: 'Activités', value: 'Développement web & Location de luxe' },
  { label: 'Expérience', value: '5+ ans' },
  { label: 'Langues', value: 'FR · EN · AR' },
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="section about">
      <div className="container">
        <div ref={ref} className="about-grid reveal">
          <div className="about-text">
            <span className="eyebrow">À propos</span>
            <h2>
              Deux domaines, une même exigence : <span className="text-gradient">le détail</span> et <span className="text-gradient">l'expérience</span>.
            </h2>
            <p className="about-bio">
              Développeur full-stack depuis plus de 5 ans, j'accompagne des marques et des
              entrepreneurs dans la création de sites vitrines, plateformes e-commerce et outils
              internes sur mesure. Mon approche : comprendre l'objectif business avant d'écrire
              la moindre ligne de code, puis livrer une interface rapide, accessible et facile à
              faire évoluer.
            </p>
            <p className="about-bio">
              En parallèle, je gère un portefeuille de biens d'exception en location courte durée
              à Marrakech — palais, villas, riads et appartements. De l'accueil des voyageurs à la
              conciergerie, j'applique la même rigueur que dans mes projets web : chaque détail
              compte dans l'expérience vécue.
            </p>

            <div className="about-skills">
              {SKILLS.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="about-facts">
            {FACTS.map((f) => (
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
