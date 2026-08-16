import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import useReveal from '../hooks/useReveal';
import './Contact.css';

export default function Contact() {
  const { t } = useLanguage();
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
            <span className="eyebrow">{t.contact.eyebrow}</span>
            <h2>{t.contact.heading}</h2>
            <p className="contact-lead">{t.contact.lead}</p>

            <div className="contact-list">
              {t.contact.info.map((item) => (
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
            {submitted && <div className="form-success">{t.contact.form.success}</div>}

            <label className="form-field">
              <span>{t.contact.form.nameLabel}</span>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder={t.contact.form.namePlaceholder} required />
            </label>

            <label className="form-field">
              <span>{t.contact.form.emailLabel}</span>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={t.contact.form.emailPlaceholder} required />
            </label>

            <label className="form-field">
              <span>{t.contact.form.messageLabel}</span>
              <textarea name="message" value={formData.message} onChange={handleChange} rows="5" placeholder={t.contact.form.messagePlaceholder} required />
            </label>

            <button type="submit" className="btn btn-primary">{t.contact.form.submit}</button>
          </form>
        </div>
      </div>
    </section>
  );
}
