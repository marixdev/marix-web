import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { FileText, ChevronDown, ChevronUp, Loader2, ExternalLink } from "lucide-react";

const GITHUB_REPO = "marixdev/marix";

const Changelog = () => {
  const { t } = useLanguage();
  const [changelog, setChangelog] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const fetchChangelog = async () => {
      try {
        const response = await fetch(
          `https://raw.githubusercontent.com/${GITHUB_REPO}/main/CHANGELOG.md`
        );
        
        if (!response.ok) {
          throw new Error("Failed to fetch changelog");
        }
        
        const text = await response.text();
        setChangelog(text);
      } catch (err) {
        console.warn("Failed to fetch changelog:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchChangelog();
  }, []);

  // Parse markdown to simple HTML
  const parseMarkdown = (md: string) => {
    // Limit to first 3 versions if not expanded
    let content = md;
    if (!expanded) {
      const versions = md.split(/(?=^## )/gm);
      content = versions.slice(0, 4).join("");
    }

    return content
      .replace(/^### (.+)$/gm, '<h4 class="text-lg font-semibold text-foreground mt-4 mb-2">$1</h4>')
      .replace(/^## (.+)$/gm, '<h3 class="text-xl font-bold text-primary mt-6 mb-3 pb-2 border-b border-border">$1</h3>')
      .replace(/^# (.+)$/gm, '')
      .replace(/^- (.+)$/gm, '<li class="text-muted-foreground ml-4 mb-1">• $1</li>')
      .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground">$1</strong>')
      .replace(/`(.+?)`/g, '<code class="px-1.5 py-0.5 bg-muted rounded text-sm text-primary">$1</code>')
      .replace(/\n\n/g, '<br/>');
  };

  const hasMoreContent = () => {
    const versions = changelog.split(/(?=^## )/gm);
    return versions.length > 4;
  };

  return (
    <section id="changelog" className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <FileText className="w-4 h-4" />
            <span className="text-sm font-medium">Changelog</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">{t.changelog?.title || "What's New"}</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            {t.changelog?.subtitle || "Latest updates and improvements"}
          </p>
        </div>

        <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-6 lg:p-8">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">{t.changelog?.error || "Failed to load changelog"}</p>
              <a
                href={`https://github.com/${GITHUB_REPO}/blob/main/CHANGELOG.md`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                {t.changelog?.viewOnGithub || "View on GitHub"}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ) : (
            <>
              <div 
                className="prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: parseMarkdown(changelog) }}
              />
              
              {hasMoreContent() && (
                <div className="mt-6 pt-6 border-t border-border flex justify-center">
                  <button
                    onClick={() => setExpanded(!expanded)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-muted hover:bg-muted/80 transition-colors font-medium"
                  >
                    {expanded ? (
                      <>
                        {t.changelog?.showLess || "Show less"}
                        <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        {t.changelog?.showMore || "Show all versions"}
                        <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        <div className="mt-6 text-center">
          <a
            href={`https://github.com/${GITHUB_REPO}/blob/main/CHANGELOG.md`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            {t.changelog?.viewFull || "View full changelog on GitHub"}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Changelog;
