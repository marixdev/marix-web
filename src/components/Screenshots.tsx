import { useState } from "react";
import { X, Maximize2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Screenshots = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const screenshots = [
    { id: "terminal", key: 'terminal' as const, image: "/terminal.png" },
    { id: "sftp", key: 'sftp' as const, image: "/sftp.png" },
    { id: "settings", key: 'settings' as const, image: "/settings.png" },
    { id: "database", key: 'database' as const, image: "/database.png" },
    { id: "tools", key: 'tools' as const, image: "/tools.png" },
    { id: "snippets", key: 'snippets' as const, image: "/snippets.png" },
    { id: "knownhosts", key: 'knownhosts' as const, image: "/knownhosts.png" },
    { id: "lookup", key: 'lookup' as const, image: "/lookup.png" },
    { id: "portforward", key: 'portforward' as const, image: "/portfoward.png" },
    { id: "sendfile", key: 'sendfile' as const, image: "/sendfile.png" },
    { id: "applock", key: 'applock' as const, image: "/applock.png" },
    { id: "websocket", key: 'websocket' as const, image: "/websocket.png" },
  ];

  return (
    <section id="screenshots" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">{t.screenshots.title}</span>
          </h2>
          <p className="section-subtitle">
            {t.screenshots.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {screenshots.map((screenshot) => {
            const item = t.screenshots.items[screenshot.key];
            // Skip if translation is missing
            if (!item) return null;
            return (
              <div
                key={screenshot.id}
                className="screenshot-card group relative cursor-pointer"
                onClick={() => setSelectedImage(screenshot.id)}
              >
                <div className="aspect-video relative overflow-hidden rounded-lg">
                  {/* Real screenshot image */}
                  <img 
                    src={screenshot.image} 
                    alt={item.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  
                  {/* Info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/80">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* View button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 shadow-lg">
                      <Maximize2 className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-gray-900">{t.screenshots.viewDetail}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div className="max-w-6xl w-full animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
            <img 
              src={screenshots.find(s => s.id === selectedImage)?.image}
              alt={t.screenshots.items[screenshots.find(s => s.id === selectedImage)?.key || 'terminal'].title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-white">
                {t.screenshots.items[screenshots.find(s => s.id === selectedImage)?.key || 'terminal'].title}
              </h3>
              <p className="text-white/70 mt-1">
                {t.screenshots.items[screenshots.find(s => s.id === selectedImage)?.key || 'terminal'].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Screenshots;
