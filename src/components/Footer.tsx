import { Terminal, Github, ExternalLink, Heart, MessageCircle, Users, FileText } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Visitor tracking with 24h cache
interface VisitorInfo {
  ip: string;
  isp: string;
  timestamp: number;
}

const VISITOR_CACHE_KEY = "marix_visitor_info";
const VISITOR_COUNT_KEY = "marix_visitor_count_24h";
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const [visitorInfo, setVisitorInfo] = useState<VisitorInfo | null>(null);
  const [visitorCount, setVisitorCount] = useState<number>(0);

  useEffect(() => {
    const fetchVisitorInfo = async () => {
      try {
        // Check cache first
        const cached = localStorage.getItem(VISITOR_CACHE_KEY);
        const now = Date.now();
        
        if (cached) {
          const parsedCache = JSON.parse(cached) as VisitorInfo;
          // If cache is valid (within 24h), use it
          if (now - parsedCache.timestamp < CACHE_DURATION) {
            setVisitorInfo(parsedCache);
            updateVisitorCount(parsedCache.ip, false);
            return;
          }
        }

        // Fetch new IP info
        const response = await fetch('https://ipapi.co/json/');
        if (response.ok) {
          const data = await response.json();
          const newVisitorInfo: VisitorInfo = {
            ip: data.ip || 'Unknown',
            isp: data.org || data.asn || 'Unknown ISP',
            timestamp: now,
          };
          
          // Cache the result
          localStorage.setItem(VISITOR_CACHE_KEY, JSON.stringify(newVisitorInfo));
          setVisitorInfo(newVisitorInfo);
          updateVisitorCount(newVisitorInfo.ip, true);
        }
      } catch (error) {
        console.error('Failed to fetch visitor info:', error);
        setVisitorInfo({ ip: 'Unknown', isp: 'Unknown', timestamp: Date.now() });
      }
    };

    const updateVisitorCount = (ip: string, isNewFetch: boolean) => {
      try {
        const now = Date.now();
        const stored = localStorage.getItem(VISITOR_COUNT_KEY);
        let visitors: { ip: string; timestamp: number }[] = [];
        
        if (stored) {
          visitors = JSON.parse(stored);
          // Filter out entries older than 24h
          visitors = visitors.filter(v => now - v.timestamp < CACHE_DURATION);
        }
        
        // Check if this IP already exists in last 24h
        const existingIndex = visitors.findIndex(v => v.ip === ip);
        if (existingIndex === -1) {
          // New unique visitor in 24h
          visitors.push({ ip, timestamp: now });
        } else if (isNewFetch) {
          // Update timestamp for existing visitor
          visitors[existingIndex].timestamp = now;
        }
        
        localStorage.setItem(VISITOR_COUNT_KEY, JSON.stringify(visitors));
        setVisitorCount(visitors.length);
      } catch (error) {
        console.error('Failed to update visitor count:', error);
      }
    };

    fetchVisitorInfo();
  }, []);

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
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-primary" />
                <span className="font-medium text-foreground">
                  {visitorCount} {t.footer.visitorsToday}
                </span>
              </div>
              {visitorInfo && (
                <div className="text-xs space-y-0.5">
                  <p><span className="text-muted-foreground">IP:</span> {visitorInfo.ip}</p>
                  <p><span className="text-muted-foreground">ISP:</span> {visitorInfo.isp}</p>
                </div>
              )}
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
