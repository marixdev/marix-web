import { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Language } from '@/i18n/translations';

const LanguageSelector = () => {
  const { language, setLanguage, languages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const currentLang = languages.find(l => l.code === language);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
    
    // If we're on a docs page, navigate to the same doc in the new language
    const docsMatch = location.pathname.match(/^\/docs\/([a-z]{2,3})(?:\/(.+))?$/);
    if (docsMatch) {
      const currentSlug = docsMatch[2] || '';
      const newPath = currentSlug ? `/docs/${code}/${currentSlug}` : `/docs/${code}`;
      navigate(newPath);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-sm font-medium"
        aria-label="Select language"
      >
        <span className="text-base">{currentLang?.flag}</span>
        <span className="hidden sm:inline">{currentLang?.nativeName}</span>
        <span className="sm:hidden">{currentLang?.code.toUpperCase()}</span>
        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-52 bg-card border border-border rounded-xl shadow-xl overflow-hidden z-50 animate-fade-in-up">
          <div className="max-h-80 overflow-y-auto py-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-sm hover:bg-muted/50 transition-colors ${
                  language === lang.code ? 'text-primary bg-primary/5' : 'text-foreground'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-base">{lang.flag}</span>
                  <span>{lang.nativeName}</span>
                </div>
                {language === lang.code && (
                  <Check className="w-4 h-4 text-primary" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
