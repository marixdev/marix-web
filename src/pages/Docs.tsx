import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider, useLanguage } from "@/i18n/LanguageContext";
import translations, { Language } from "@/i18n/translations";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { 
  Menu, 
  X, 
  ChevronRight, 
  ChevronDown, 
  ChevronLeft,
  Search, 
  Terminal, 
  ExternalLink,
  FileText,
  Home,
  List
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSelector from "@/components/LanguageSelector";

interface SidebarItem {
  title: string;
  slug: string;
  children?: SidebarItem[];
}

interface TocItem {
  id: string;
  text: string;
  level: number;
}

// Helper function to create heading ID that works with Unicode
const createHeadingId = (text: string): string => {
  const cleanText = String(text).replace(/[*_`]/g, '').trim();
  // Use encodeURIComponent for Unicode support, then make it URL-safe
  const encoded = encodeURIComponent(cleanText.toLowerCase())
    .replace(/%20/g, '-')
    .replace(/%/g, '')
    .replace(/[^a-z0-9\u4e00-\u9fff\u3040-\u309f\u30a0-\u30ff\uac00-\ud7af\u0e00-\u0e7f-]/gi, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  
  return encoded || 'heading';
};

// Parse headings from markdown content for Table of Contents
const parseHeadings = (markdown: string): TocItem[] => {
  const headingRegex = /^(#{1,3})\s+(.+)$/gm;
  const headings: TocItem[] = [];
  let match;
  const idCounts: Record<string, number> = {};

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = match[2].replace(/[*_`]/g, '').trim();
    let id = createHeadingId(text);
    
    // Handle duplicate IDs by appending count
    if (idCounts[id] !== undefined) {
      idCounts[id]++;
      id = `${id}-${idCounts[id]}`;
    } else {
      idCounts[id] = 0;
    }
    
    headings.push({ id, text, level });
  }

  return headings;
};

// GitHub URLs
const CHANGELOG_URL = "https://raw.githubusercontent.com/marixdev/marix/main/CHANGELOG.md";
const GITHUB_RELEASES_API = "https://api.github.com/repos/marixdev/marix/releases/latest";

// Parse _sidebar.md content to sidebar structure
const parseSidebarMarkdown = (markdown: string, langFolder: string): SidebarItem[] => {
  const lines = markdown.split('\n');
  const result: SidebarItem[] = [];
  let currentSection: SidebarItem | null = null;
  let sectionIndex = 0;

  for (const line of lines) {
    // Match section header: * **Section Title** or - **Section Title**
    const sectionMatch = line.match(/^[*-]\s+\*\*(.+?)\*\*\s*$/);
    if (sectionMatch) {
      if (currentSection) {
        result.push(currentSection);
      }
      // Use section index to create unique slug for non-ASCII languages
      // First try to create a slug from ASCII characters only
      const asciiOnly = sectionMatch[1].toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
      const baseSlug = asciiOnly.replace(/\s+/g, '-');
      currentSection = {
        title: sectionMatch[1],
        // Use baseSlug only if it has actual content, otherwise use section-index
        slug: baseSlug.length > 0 ? baseSlug : `section-${sectionIndex}`,
        children: [],
      };
      sectionIndex++;
      continue;
    }

    // Match item: * [Title](path) or - [Title](path)
    const itemMatch = line.match(/^\s+[*-]\s+\[(.+?)\]\((.+?)\)\s*$/);
    if (itemMatch && currentSection) {
      const title = itemMatch[1];
      let path = itemMatch[2];
      
      // Remove language folder prefix if present (e.g., "vi/", "zh/")
      if (langFolder && path.startsWith(langFolder)) {
        path = path.substring(langFolder.length);
      }
      
      // Skip external links
      if (path.startsWith('http://') || path.startsWith('https://')) {
        continue;
      }
      
      // Extract slug from path (remove .md extension and handle special cases)
      let slug = path.replace(/\.md$/, '').replace(/\/$/, '');
      
      // Handle root path (/) or empty path - these point to README/Introduction
      if (slug === '' || slug === '/') {
        slug = 'README';
      }

      currentSection.children?.push({ title, slug });
    }
  }

  // Add the last section
  if (currentSection) {
    result.push(currentSection);
  }

  return result;
};

// Default English sidebar structure (fallback)
const defaultSidebarStructure: SidebarItem[] = [
  {
    title: "Getting Started",
    slug: "getting-started",
    children: [
      { title: "Introduction", slug: "README" },
      { title: "Installation", slug: "installation" },
      { title: "Quick Start", slug: "quickstart" },
    ],
  },
  {
    title: "Core Features",
    slug: "core-features",
    children: [
      { title: "SSH Terminal", slug: "ssh-terminal" },
      { title: "SFTP File Manager", slug: "sftp" },
      { title: "FTP/FTPS", slug: "ftp" },
      { title: "RDP Remote Desktop", slug: "rdp" },
    ],
  },
  {
    title: "Security",
    slug: "security",
    children: [
      { title: "SSH Key Manager", slug: "ssh-keys" },
      { title: "Known Hosts", slug: "known-hosts" },
      { title: "2FA/TOTP", slug: "2fa" },
      { title: "Backup & Restore", slug: "backup" },
    ],
  },
  {
    title: "Advanced",
    slug: "advanced",
    children: [
      { title: "Port Forwarding", slug: "port-forwarding" },
      { title: "LAN File Transfer", slug: "lan-file-transfer" },
      { title: "LAN Server Share", slug: "lan-server-share" },
      { title: "Source Installer", slug: "source-installer" },
    ],
  },
  {
    title: "Tools",
    slug: "tools",
    children: [
      { title: "Network Tools", slug: "network-tools" },
      { title: "Cloudflare DNS", slug: "cloudflare" },
      { title: "Database Client", slug: "database" },
    ],
  },
  {
    title: "Reference",
    slug: "reference",
    children: [
      { title: "Keyboard Shortcuts", slug: "shortcuts" },
      { title: "Command Snippets", slug: "snippets" },
      { title: "Troubleshooting", slug: "troubleshooting" },
      { title: "Changelog", slug: "changelog" },
    ],
  },
];

const languageToFolder: Record<string, string> = {
  en: "en",
  vi: "vi",
  zh: "zh",
  ja: "ja",
  ko: "ko",
  de: "de",
  fr: "fr",
  es: "es",
  pt: "pt",
  ru: "ru",
  th: "th",
  id: "id",
  ms: "ms",
  fil: "fil",
};

const DocsContent = () => {
  const { lang, slug } = useParams<{ lang: string; slug: string }>();
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();
  
  // Use lang from URL, fallback to context language, then to 'en'
  const currentLang = lang && languageToFolder[lang] ? lang : 'en';
  const t = translations[currentLang as keyof typeof translations] || translations.en;
  
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [sidebarLoading, setSidebarLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarStructure, setSidebarStructure] = useState<SidebarItem[]>([]);
  const [activeHeading, setActiveHeading] = useState<string>("");
  const [tocOpen, setTocOpen] = useState(true);
  const [latestVersion, setLatestVersion] = useState<string>("1.0.16"); // fallback version

  const currentSlug = slug || "README";
  
  // Sync language context with URL lang
  useEffect(() => {
    if (currentLang !== language) {
      setLanguage(currentLang as Language);
    }
  }, [currentLang, language, setLanguage]);
  
  // Check if current page is changelog
  const isChangelog = currentSlug === "changelog" || currentSlug === "CHANGELOG";

  // Parse headings for TOC
  const tableOfContents = useMemo(() => parseHeadings(content), [content]);

  // Flatten sidebar for prev/next navigation
  const flattenedDocs = useMemo(() => {
    const flat: { title: string; slug: string }[] = [];
    sidebarStructure.forEach(section => {
      if (section.children) {
        section.children.forEach(child => {
          flat.push({ title: child.title, slug: child.slug });
        });
      }
    });
    return flat;
  }, [sidebarStructure]);

  // Get current index and prev/next docs
  const currentIndex = flattenedDocs.findIndex(doc => doc.slug === currentSlug);
  const prevDoc = currentIndex > 0 ? flattenedDocs[currentIndex - 1] : null;
  const nextDoc = currentIndex < flattenedDocs.length - 1 ? flattenedDocs[currentIndex + 1] : null;

  // Fetch latest version from GitHub
  useEffect(() => {
    const fetchLatestVersion = async () => {
      try {
        const response = await fetch(GITHUB_RELEASES_API);
        if (response.ok) {
          const data = await response.json();
          // tag_name is usually "v1.0.16" or "1.0.16"
          const version = data.tag_name?.replace(/^v/, '') || "1.0.16";
          setLatestVersion(version);
        }
      } catch (error) {
        console.error("Failed to fetch latest version:", error);
      }
    };
    
    fetchLatestVersion();
  }, []);

  // Scroll spy for active heading
  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll('h1[id], h2[id], h3[id]');
      let currentActive = "";
      
      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= 100) {
          currentActive = heading.id;
        }
      });
      
      setActiveHeading(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [content]);

  // Fetch sidebar based on language
  useEffect(() => {
    const fetchSidebar = async () => {
      // Reset sidebar state before fetching new one
      setSidebarLoading(true);
      setSidebarStructure([]);
      setExpandedSections([]);
      
      try {
        const langFolder = languageToFolder[currentLang] || "en";
        const sidebarPath = `/docs/${langFolder}/_sidebar.md`;
        
        const response = await fetch(`${sidebarPath}?t=${Date.now()}`);
        
        if (response.ok) {
          const text = await response.text();
          const parsed = parseSidebarMarkdown(text, langFolder);
          if (parsed.length > 0) {
            setSidebarStructure(parsed);
            // Expand only the first section
            setExpandedSections([parsed[0].slug]);
          } else {
            setSidebarStructure(defaultSidebarStructure);
            setExpandedSections(["getting-started"]);
          }
        } else {
          // Fallback to default English sidebar
          setSidebarStructure(defaultSidebarStructure);
          setExpandedSections(["getting-started"]);
        }
      } catch (error) {
        console.error("Failed to fetch sidebar:", error);
        setSidebarStructure(defaultSidebarStructure);
        setExpandedSections(["getting-started"]);
      } finally {
        setSidebarLoading(false);
      }
    };

    fetchSidebar();
  }, [currentLang]);

  useEffect(() => {
    const fetchDoc = async () => {
      setLoading(true);
      try {
        // Special handling for changelog - fetch from GitHub
        if (isChangelog) {
          const response = await fetch(CHANGELOG_URL);
          if (response.ok) {
            const text = await response.text();
            setContent(text);
          } else {
            setContent("# Changelog\n\nFailed to load changelog from GitHub.");
          }
          setLoading(false);
          return;
        }

        const langFolder = languageToFolder[currentLang] || "en";
        const response = await fetch(`/docs/${langFolder}/${currentSlug}.md`);
        
        // Helper to replace version placeholders
        const replaceVersionPlaceholders = (text: string): string => {
          return text.replace(/\{\{VERSION\}\}/g, latestVersion);
        };
        
        if (!response.ok) {
          // Fallback to English
          const fallbackResponse = await fetch(`/docs/en/${currentSlug}.md`);
          if (fallbackResponse.ok) {
            const text = await fallbackResponse.text();
            setContent(replaceVersionPlaceholders(text));
          } else {
            setContent("# Document Not Found\n\nThe requested document could not be found.");
          }
        } else {
          const text = await response.text();
          setContent(replaceVersionPlaceholders(text));
        }
      } catch (error) {
        setContent("# Error\n\nFailed to load document.");
      } finally {
        setLoading(false);
      }
    };

    fetchDoc();
  }, [currentSlug, currentLang, isChangelog, latestVersion]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleSection = (slug: string) => {
    setExpandedSections((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const isActive = (itemSlug: string) => currentSlug === itemSlug;

  const filteredSidebar = sidebarStructure
    .map((section) => ({
      ...section,
      children: section.children?.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((section) => (section.children?.length ?? 0) > 0 || searchQuery === "");

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{`${t.docs.documentation} - Marix`}</title>
        <meta name="description" content={t.seo.description} />
        <meta name="keywords" content={t.seo.keywords} />
        <link rel="canonical" href={`https://marix.dev/docs/${currentLang}`} />
        <meta property="og:title" content={`${t.docs.documentation} - Marix`} />
        <meta property="og:description" content={t.seo.description} />
        <meta property="og:url" content={`https://marix.dev/docs/${currentLang}`} />
      </Helmet>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/90 border-b border-border/50">
        <div className="flex items-center justify-between h-14 px-3 sm:px-4 lg:px-6">
          {/* Left: Menu + Logo */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors shrink-0"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle menu"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Terminal className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-foreground hidden sm:block">Marix</span>
            </Link>
            <span className="text-muted-foreground hidden sm:block">/</span>
            <span className="text-foreground font-medium text-sm sm:text-base truncate hidden sm:block">{t.docs.documentation}</span>
          </div>

          {/* Right: Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <ThemeToggle />
            <LanguageSelector />
            <Link
              to="/"
              className="flex items-center justify-center w-9 h-9 sm:w-auto sm:h-auto sm:px-3 sm:py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors text-sm font-medium"
              aria-label="Home"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline sm:ml-1.5">{t.docs.home}</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="flex pt-14">
        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        
        {/* Sidebar */}
        <aside
          className={`fixed lg:sticky top-14 left-0 z-40 w-72 h-[calc(100vh-3.5rem)] bg-background lg:bg-card/50 backdrop-blur-sm border-r border-border overflow-y-auto transition-transform duration-300 shadow-xl lg:shadow-none ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <div className="p-4">
            {/* Mobile: Logo + Title */}
            <div className="flex lg:hidden items-center gap-2 mb-4 pb-4 border-b border-border">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Terminal className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-bold text-foreground">Marix</div>
                <div className="text-xs text-muted-foreground">{t.docs.documentation}</div>
              </div>
            </div>

            {/* Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder={t.docs.searchDocs}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none text-sm"
              />
            </div>

            {/* Navigation */}
            <nav className="space-y-1" key={`nav-${currentLang}`}>
              {sidebarLoading ? (
                <div className="flex items-center justify-center py-8">
                  <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                </div>
              ) : (
              filteredSidebar.map((section, index) => (
                <div key={`${currentLang}-${section.slug}-${index}`} className="mb-2">
                  <button
                    onClick={() => toggleSection(section.slug)}
                    className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-sm font-semibold text-foreground bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <span>{section.title}</span>
                    {expandedSections.includes(section.slug) ? (
                      <ChevronDown className="w-4 h-4 text-muted-foreground" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    )}
                  </button>
                  {expandedSections.includes(section.slug) && section.children && (
                    <div className="ml-3 mt-1 space-y-0.5 border-l-2 border-border pl-3">
                      {section.children.map((item) => (
                        <Link
                          key={item.slug}
                          to={`/docs/${currentLang}/${item.slug}`}
                          onClick={() => setSidebarOpen(false)}
                          className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                            isActive(item.slug)
                              ? "bg-primary/15 text-primary font-medium border-l-2 border-primary -ml-[14px] pl-[22px]"
                              : "text-foreground/70 hover:text-foreground hover:bg-muted/70"
                          }`}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))
              )}
            </nav>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 min-w-0 p-6 lg:p-10">
          <div className="flex gap-8">
            {/* Article Content */}
            <div className="flex-1 min-w-0 max-w-4xl">
              {loading ? (
                <div className="flex items-center justify-center py-20">
                  <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                </div>
              ) : (
                <article className="prose prose-slate dark:prose-invert max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    components={{
                      h1: ({ children }) => {
                        const id = createHeadingId(String(children));
                        return (
                          <h1 id={id} className="text-3xl font-bold text-foreground mb-6 pb-4 border-b border-border scroll-mt-20">
                            {children}
                          </h1>
                        );
                      },
                      h2: ({ children }) => {
                        const id = createHeadingId(String(children));
                        return (
                          <h2 id={id} className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">
                            {children}
                          </h2>
                        );
                      },
                      h3: ({ children }) => {
                        const id = createHeadingId(String(children));
                        return (
                          <h3 id={id} className="text-xl font-semibold text-foreground mt-8 mb-3 scroll-mt-20">
                            {children}
                          </h3>
                        );
                      },
                      p: ({ children }) => (
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {children}
                        </p>
                      ),
                      a: ({ href, children }) => (
                        <a
                          href={href}
                          target={href?.startsWith("http") ? "_blank" : undefined}
                          rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-primary hover:underline inline-flex items-center gap-1"
                        >
                          {children}
                          {href?.startsWith("http") && <ExternalLink className="w-3 h-3" />}
                        </a>
                      ),
                      code: ({ className, children }) => {
                        const isInline = !className;
                        if (isInline) {
                          return (
                            <code className="px-1.5 py-0.5 bg-muted rounded text-sm text-primary font-mono">
                              {children}
                            </code>
                          );
                        }
                        return (
                          <code className={`${className} block overflow-x-auto`}>
                            {children}
                          </code>
                        );
                      },
                      pre: ({ children }) => (
                        <pre className="bg-muted/50 border border-border rounded-xl p-4 overflow-x-auto my-4">
                          {children}
                        </pre>
                      ),
                      ul: ({ children }) => (
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                          {children}
                        </ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-4">
                          {children}
                        </ol>
                      ),
                      li: ({ children }) => <li className="text-muted-foreground">{children}</li>,
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">
                          {children}
                        </blockquote>
                      ),
                      table: ({ children }) => (
                        <div className="overflow-x-auto my-4">
                          <table className="w-full border-collapse border border-border rounded-lg">
                            {children}
                          </table>
                        </div>
                      ),
                      th: ({ children }) => (
                        <th className="border border-border bg-muted px-4 py-2 text-left font-semibold text-foreground">
                          {children}
                        </th>
                      ),
                      td: ({ children }) => (
                        <td className="border border-border px-4 py-2 text-muted-foreground">
                          {children}
                        </td>
                      ),
                      img: ({ src, alt }) => (
                        <img
                          src={src}
                          alt={alt}
                          className="rounded-xl border border-border my-4 max-w-full"
                        />
                      ),
                    }}
                  >
                    {content}
                  </ReactMarkdown>

                  {/* Previous / Next Navigation */}
                  {(prevDoc || nextDoc) && (
                    <nav className="flex items-center justify-between mt-12 pt-8 border-t border-border">
                      {prevDoc ? (
                        <Link
                          to={`/docs/${currentLang}/${prevDoc.slug}`}
                          className="group flex items-center gap-3 px-4 py-3 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all max-w-[45%]"
                        >
                          <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                          <div className="min-w-0">
                            <div className="text-xs text-muted-foreground mb-1">{t.docs.previous}</div>
                            <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
                              {prevDoc.title}
                            </div>
                          </div>
                        </Link>
                      ) : (
                        <div />
                      )}
                      {nextDoc ? (
                        <Link
                          to={`/docs/${currentLang}/${nextDoc.slug}`}
                          className="group flex items-center gap-3 px-4 py-3 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all max-w-[45%] ml-auto text-right"
                        >
                          <div className="min-w-0">
                            <div className="text-xs text-muted-foreground mb-1">{t.docs.next}</div>
                            <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
                              {nextDoc.title}
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                        </Link>
                      ) : (
                        <div />
                      )}
                    </nav>
                  )}

                </article>
              )}
            </div>

            {/* Table of Contents - Right Sidebar */}
            {tableOfContents.length > 1 && (
              <aside className="hidden xl:block w-64 flex-shrink-0">
                <div className="sticky top-20">
                  <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4">
                    <button
                      onClick={() => setTocOpen(!tocOpen)}
                      className="flex items-center justify-between w-full text-sm font-semibold text-foreground mb-3"
                    >
                      <div className="flex items-center gap-2">
                        <List className="w-4 h-4" />
                        <span>{t.docs.onThisPage}</span>
                      </div>
                      {tocOpen ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                    
                    {tocOpen && (
                      <nav className="space-y-1">
                        {tableOfContents.map((item, index) => (
                          <button
                            key={`${item.id}-${index}`}
                            onClick={() => scrollToHeading(item.id)}
                            className={`block w-full text-left text-sm py-1.5 px-2 rounded-lg transition-colors truncate ${
                              item.level === 1 ? 'font-medium' : ''
                            } ${
                              item.level === 2 ? 'pl-4' : ''
                            } ${
                              item.level === 3 ? 'pl-6 text-xs' : ''
                            } ${
                              activeHeading === item.id
                                ? 'bg-primary/10 text-primary'
                                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                            }`}
                            title={item.text}
                          >
                            {item.text}
                          </button>
                        ))}
                      </nav>
                    )}
                  </div>
                </div>
              </aside>
            )}
          </div>
          
          {/* Footer - Mobile: static center, Desktop: fixed right */}
          <footer className="lg:hidden mt-16 py-6 border-t border-border text-center text-sm text-muted-foreground">
            <p>
              {t.footer.madeWith} ❤️ {t.footer.by}{" "}
              <a
                href="https://github.com/marixdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                marixdev
              </a>
            </p>
          </footer>
        </main>
        
        {/* Footer - Desktop only: fixed right */}
        <footer className="hidden lg:block fixed bottom-4 right-4 text-sm text-muted-foreground">
          <p>
            {t.footer.madeWith} ❤️ {t.footer.by}{" "}
            <a
              href="https://github.com/marixdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              marixdev
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

const Docs = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <DocsContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Docs;
