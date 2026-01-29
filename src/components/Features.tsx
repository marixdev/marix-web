import { 
  Terminal, 
  FolderOpen, 
  Cloud, 
  Monitor, 
  Database, 
  Globe, 
  Lock, 
  Languages, 
  CloudCog, 
  Send, 
  Code, 
  Network,
  Plug,
  Shield,
  LucideIcon
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface Feature {
  icon: LucideIcon;
  titleKey: 'sshTerminal' | 'sftpManager' | 'ftpFtps' | 'rdpDesktop' | 'databaseClient' | 'websocket' | 'cloudflareDns' | 
            'whoisTools' | 'encryption' | 'multiLanguage' | 'lanTransfer' | 'lanSharing' | 'customHotkeys' | 'appLock';
  gradient: string;
  bgColor: string;
}

const Features = () => {
  const { t } = useLanguage();

  // Features based on CHANGELOG - actual Marix capabilities
  const features: Feature[] = [
    {
      icon: Terminal,
      titleKey: 'sshTerminal',
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: FolderOpen,
      titleKey: 'sftpManager',
      gradient: "from-violet-500 to-purple-600",
      bgColor: "bg-violet-500/10",
    },
    {
      icon: Cloud,
      titleKey: 'ftpFtps',
      gradient: "from-emerald-500 to-green-600",
      bgColor: "bg-emerald-500/10",
    },
    {
      icon: Monitor,
      titleKey: 'rdpDesktop',
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
    },
    {
      icon: Database,
      titleKey: 'databaseClient',
      gradient: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      icon: Plug,
      titleKey: 'websocket',
      gradient: "from-lime-500 to-green-500",
      bgColor: "bg-lime-500/10",
    },
    {
      icon: Globe,
      titleKey: 'cloudflareDns',
      gradient: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500/10",
    },
    {
      icon: Network,
      titleKey: 'whoisTools',
      gradient: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-500/10",
    },
    {
      icon: Lock,
      titleKey: 'encryption',
      gradient: "from-teal-500 to-emerald-500",
      bgColor: "bg-teal-500/10",
    },
    {
      icon: Languages,
      titleKey: 'multiLanguage',
      gradient: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-500/10",
    },
    {
      icon: Send,
      titleKey: 'lanTransfer',
      gradient: "from-indigo-500 to-violet-500",
      bgColor: "bg-indigo-500/10",
    },
    {
      icon: CloudCog,
      titleKey: 'lanSharing',
      gradient: "from-fuchsia-500 to-purple-500",
      bgColor: "bg-fuchsia-500/10",
    },
    {
      icon: Code,
      titleKey: 'customHotkeys',
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Shield,
      titleKey: 'appLock',
      gradient: "from-red-500 to-rose-500",
      bgColor: "bg-red-500/10",
    },
  ];

  return (
    <section id="features" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute inset-0 bg-radial-gradient-bottom opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">{t.features.title}</span>
          </h2>
          <p className="section-subtitle">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((feature, index) => {
            const item = t.features.items[feature.titleKey];
            const Icon = feature.icon;
            return (
              <div
                key={feature.titleKey}
                className="feature-card group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className={`feature-icon bg-gradient-to-br ${feature.gradient}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
