import { useState } from 'react';
import useReveal from '../hooks/useReveal';
import './Contact.css';

const CONTACT_INFO = [
  { label: 'Email', value: 'houssamazmour@gmail.com', href: 'mailto:houssamazmour@gmail.com' },
  { label: 'Localisation', value: 'Marrakech, Maroc' },
  { label: 'Disponibilité', value: 'Ouvert aux missions freelance' },
];

export default function Contact() {
  const ref = useReveal();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div ref={ref} className="contact-grid reveal">
          <div className="contact-info">
            <span className="eyebrow">Contact</span>
            <h2>Travaillons ensemble</h2>
            <p className="contact-lead">
              Un projet web en tête ou une envie de séjour à Marrakech ? Parlez-moi de vos
              objectifs, je reviens vers vous sous 24h.
            </p>

            <div className="contact-list">
              {CONTACT_INFO.map((item) => (
                <div key={item.label} className="contact-item">
                  <span className="contact-label">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className="contact-value">{item.value}</a>
                  ) : (
                    <span className="contact-value">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <form className="contact-form card" onSubmit={handleSubmit}>
            {submitted && <div className="form-success">✓ Message envoyé, merci ! Je vous réponds rapidement.</div>}

            <label className="form-field">
              <span>Nom</span>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Votre nom" required />
            </label>

            <label className="form-field">
              <span>Email</span>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="vous@exemple.com" required />
            </label>

            <label className="form-field">
              <span>Message</span>
              <textarea name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="Parlez-moi de votre projet..." required />
            </label>

            <button type="submit" className="btn btn-primary">Envoyer le message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
