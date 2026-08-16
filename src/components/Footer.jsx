import { useLanguage } from '../i18n/LanguageContext';
import Logo from './Logo';
import './Footer.css';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo size={28} />
          <span>Houssam Azmour</span>
        </div>

        <div className="footer-socials">
          {t.footer.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
          ))}
        </div>

        <p className="footer-copy">© {year} Houssam Azmour. {t.footer.rights}</p>
      </div>
    </footer>
  );
}
