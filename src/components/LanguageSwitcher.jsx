import { useLanguage } from '../i18n/LanguageContext';
import { LANGUAGES } from '../i18n/translations';
import './LanguageSwitcher.css';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="lang-switcher" role="group" aria-label="Choisir la langue">
      {LANGUAGES.map((l) => (
        <button
          key={l.code}
          className={`lang-btn ${language === l.code ? 'is-active' : ''}`}
          onClick={() => setLanguage(l.code)}
          aria-pressed={language === l.code}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
