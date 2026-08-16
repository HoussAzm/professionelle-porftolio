import useReveal from '../hooks/useReveal';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    quote: "Houssam a livré notre plateforme de réservation en avance sur le planning, avec une qualité de code irréprochable. Communication claire du début à la fin.",
    name: 'Sara El Amrani',
    role: 'Fondatrice, MenaraStay',
  },
  {
    quote: "Un vrai partenaire technique plus qu'un simple prestataire. Il a su traduire nos besoins business en solutions techniques concrètes.",
    name: 'Yassine Bennani',
    role: 'CEO, Atlas Boutique',
  },
  {
    quote: "Le site a doublé notre taux de conversion en trois mois. Réactif, rigoureux et force de proposition sur le design.",
    name: 'Laila Fassi',
    role: 'Directrice Marketing, Noor Consulting',
  },
];

export default function Testimonials() {
  const ref = useReveal();

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Avis clients</span>
          <h2>Ce que disent mes clients</h2>
        </div>

        <div ref={ref} className="testimonials-grid reveal">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="testimonial-card card">
              <div className="testimonial-quote">“{t.quote}”</div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.name.charAt(0)}</div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
