import { Download, Github, ChevronRight, Shield, Zap, Globe, Loader2, Sparkles, MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useGitHubVersion } from "@/hooks/use-github-version";

const Hero = () => {
  const { t } = useLanguage();
  const { version, loading: versionLoading } = useGitHubVersion();

  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-radial-gradient" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Decorative blobs */}
      <div className="blob w-[500px] h-[500px] -top-48 -left-48 opacity-10" />
      <div className="blob w-[400px] h-[400px] top-1/2 -right-48 opacity-10" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Version Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-10">
            <Sparkles className="w-4 h-4 text-primary" />
            {versionLoading ? (
              <Loader2 className="w-4 h-4 text-primary animate-spin" />
            ) : (
              <span className="text-sm font-medium text-foreground">
                Version <span className="text-primary font-semibold">v{version}</span> — Open Source
              </span>
            )}
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </div>

          {/* Main heading */}
          <h1 className="animate-fade-in-up-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tight">
            <span className="text-foreground">Modern </span>
            <span className="gradient-text">Zero-Knowledge</span>
            <br className="hidden sm:block" />
            <span className="text-foreground"> SSH Client</span>
          </h1>

          {/* Description */}
          <p className="animate-fade-in-up-delay-2 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            {t.hero.description}
          </p>

          {/* Feature Pills */}
          <div className="animate-fade-in-up-delay-2 flex flex-wrap justify-center gap-3 mb-12">
            {[
              { icon: Shield, label: "Argon2id Encryption", color: "text-emerald-500" },
              { icon: Zap, label: "Lightning Fast", color: "text-amber-500" },
              { icon: Globe, label: "14 Languages", color: "text-blue-500" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50"
              >
                <item.icon className={`w-4 h-4 ${item.color}`} />
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#download" className="btn-primary text-base">
              <Download className="w-5 h-5" />
              {t.hero.download}
            </a>
            <a
              href="https://github.com/marixdev/marix"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-base"
            >
              <Github className="w-5 h-5" />
              {t.hero.github}
            </a>
            <a
              href="https://discord.gg/KSenHkCtN6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white transition-all font-medium"
            >
              <MessageCircle className="w-5 h-5" />
              Discord
            </a>
          </div>
        </div>

        {/* Terminal Preview */}
        <div className="mt-20 max-w-5xl mx-auto animate-fade-in-up-delay-4">
          <div className="terminal-window animate-float">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500" />
              <div className="terminal-dot bg-yellow-500" />
              <div className="terminal-dot bg-green-500" />
              <span className="ml-4 text-sm text-gray-400 font-mono">marix — ssh user@server</span>
            </div>
            <div className="p-6 lg:p-8 font-mono text-sm lg:text-base text-gray-300">
              <div className="flex items-start gap-2 mb-3">
                <span className="text-blue-400">➜</span>
                <span className="text-cyan-400">~</span>
                <span className="text-white">ssh user@server.example.com</span>
              </div>
              <div className="text-gray-500 mb-3 pl-6">
                Connecting to server.example.com (203.0.113.42)...
              </div>
              <div className="text-emerald-400 mb-3 pl-6 flex items-center gap-2">
                <span>✓</span>
                <span>Connected successfully via SSH-2.0</span>
              </div>
              <div className="h-px bg-gray-700 my-4" />
              <div className="flex items-start gap-2 mb-3">
                <span className="text-emerald-400">user@server</span>
                <span className="text-gray-500">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-gray-500">$</span>
                <span className="text-white ml-1">ls -la</span>
              </div>
              <div className="text-gray-400 text-xs lg:text-sm space-y-0.5 pl-6 font-mono">
                <div>drwxr-xr-x  5 user user 4096 Jan 25 10:00 <span className="text-blue-400">.</span></div>
                <div>drwxr-xr-x  3 root root 4096 Jan 20 09:00 <span className="text-blue-400">..</span></div>
                <div>-rw-r--r--  1 user user  220 Jan 20 09:00 <span className="text-gray-300">.bashrc</span></div>
                <div>drwx------  2 user user 4096 Jan 22 14:30 <span className="text-yellow-400">.ssh</span></div>
                <div>drwxr-xr-x  4 user user 4096 Jan 25 09:45 <span className="text-blue-400">projects</span></div>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <span className="text-emerald-400">user@server</span>
                <span className="text-gray-500">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-gray-500">$</span>
                <span className="w-2.5 h-5 bg-gray-400 animate-blink ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
