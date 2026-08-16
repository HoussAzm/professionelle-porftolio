import Logo from './Logo';
import './Footer.css';

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Email', href: 'mailto:houssamazmour@gmail.com' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo size={28} />
          <span>Houssam Azmour</span>
        </div>

        <div className="footer-socials">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
          ))}
        </div>

        <p className="footer-copy">© {year} Houssam Azmour. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
