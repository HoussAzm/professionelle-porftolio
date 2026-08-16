import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from './translations';

const LanguageContext = createContext(null);

function detectDefaultLanguage() {
  const stored = localStorage.getItem('language');
  if (stored && translations[stored]) return stored;

  const browserLang = navigator.language?.slice(0, 2);
  if (browserLang === 'en') return 'en';
  if (browserLang === 'es') return 'es';
  return 'fr';
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(detectDefaultLanguage);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
