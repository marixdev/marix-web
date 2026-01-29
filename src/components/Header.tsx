import { useState } from "react";
import { Menu, X, Terminal, Github, MessageCircle, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "@/i18n/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { href: "#features", label: t.menu.features },
    { href: "#screenshots", label: t.menu.screenshots },
    { href: "#download", label: t.menu.download },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Marix
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <Link
              to={`/docs/${t.lang || 'en'}`}
              className="nav-link text-sm font-medium flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4" />
              {t.docs.documentation}
            </Link>
            <a
              href="https://github.com/marixdev/marix"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link text-sm font-medium flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://discord.gg/KSenHkCtN6"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link text-sm font-medium flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              Discord
            </a>
          </div>

          {/* Right Side Controls */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <LanguageSelector />
            <a href="#download" className="btn-primary text-sm px-5 py-2.5">
              {t.hero.download}
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <LanguageSelector />
            <button
              className="p-2 rounded-xl hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in-up">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Link
                to={`/docs/${t.lang || 'en'}`}
                className="px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <FileText className="w-4 h-4" />
                {t.docs.documentation}
              </Link>
              <a
                href="https://github.com/marixdev/marix"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://discord.gg/KSenHkCtN6"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <MessageCircle className="w-4 h-4" />
                Discord
              </a>
              <a
                href="#download"
                className="btn-primary text-sm mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.hero.download}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
