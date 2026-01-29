import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import translations, { Language, Translations, languages } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  languages: typeof languages;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Detect browser language and map to supported language
function detectBrowserLanguage(): Language {
  const browserLang = navigator.language.split('-')[0].toLowerCase();
  const supported: Language[] = ['en', 'vi', 'zh', 'ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'th', 'id', 'ms', 'fil'];
  
  if (supported.includes(browserLang as Language)) {
    return browserLang as Language;
  }
  
  // Map some common variants
  const langMap: Record<string, Language> = {
    'tl': 'fil', // Tagalog -> Filipino
  };
  
  if (langMap[browserLang]) {
    return langMap[browserLang];
  }
  
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Check localStorage first
    const saved = localStorage.getItem('language') as Language;
    if (saved && translations[saved]) {
      return saved;
    }
    // Detect browser language
    return detectBrowserLanguage();
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, languages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
