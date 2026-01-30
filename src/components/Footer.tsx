import { Terminal, Github, ExternalLink, Heart, MessageCircle, Users, FileText } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { FreeVisitorCounter } from '@rundevelrun/free-visitor-counter';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 lg:py-20 border-t border-border bg-card/50">
      {/* Background */}
      <div className="absolute inset-0 bg-radial-gradient-bottom opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
                <Terminal className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-foreground">Marix</span>
            </a>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-4">
              {t.footer.description}
            </p>
            
            {/* Visitor Stats */}
            <div className="mt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <FreeVisitorCounter
                  todayCountPrefix=""
                  todayCountSuffix={` ${t.footer.visitorsToday}`}
                  totalCountPrefix=""
                  totalCountSuffix=""
                  separator=""
                  showTotalFirst={false}
                  className="font-medium text-foreground"
                />
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-5 text-lg">{t.footer.links}</h3>
            <div className="space-y-4">
              <a href="#features" className="block text-muted-foreground hover:text-primary transition-colors">
                {t.menu.features}
              </a>
              <a href="#screenshots" className="block text-muted-foreground hover:text-primary transition-colors">
                {t.menu.screenshots}
              </a>
              <a href="#download" className="block text-muted-foreground hover:text-primary transition-colors">
                {t.menu.download}
              </a>
              <Link
                to={`/docs/${t.lang || 'en'}`}
                className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                {t.docs.documentation}
              </Link>
              <a
                href="https://github.com/marixdev/marix"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://discord.gg/KSenHkCtN6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
              >
                Discord
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Project Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-5 text-lg">{t.footer.project}</h3>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">{t.footer.author}:</span>{" "}
                <a
                  href="https://github.com/marixdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Đạt Vũ
                </a>
              </p>
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">{t.footer.license}:</span>{" "}
                Open Source (GPL v3)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              {t.footer.copyright.replace('2025', String(currentYear))}
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1.5">
              {t.footer.madeWith} <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Marix.dev
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
