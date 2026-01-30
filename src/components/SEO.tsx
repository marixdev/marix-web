import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/i18n/LanguageContext';

interface SEOProps {
  page?: 'home' | 'docs';
  docTitle?: string;
}

const SEO = ({ page = 'home', docTitle }: SEOProps) => {
  const { language, t } = useLanguage();
  
  const seo = t.seo;
  const title = docTitle ? `${docTitle} | Marix` : seo.title;
  const description = seo.description;
  const keywords = seo.keywords;
  
  const baseUrl = 'https://marix.dev';
  const currentUrl = page === 'docs' ? `${baseUrl}/docs/${language}` : baseUrl;
  
  // Alternate language links for SEO
  const languageCodes = ['en', 'vi', 'zh', 'ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'th', 'id', 'ms', 'fil'];
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="marixdev" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={`${baseUrl}/banner.png`} />
      <meta property="og:image:alt" content="Marix SSH Client" />
      <meta property="og:site_name" content="Marix" />
      <meta property="og:locale" content={language} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}/banner.png`} />
      
      {/* Alternate Language Links for SEO */}
      {languageCodes.map((lang) => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={lang}
          href={page === 'docs' ? `${baseUrl}/docs/${lang}` : `${baseUrl}?lang=${lang}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={baseUrl} />
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#0ea5e9" />
      <meta name="application-name" content="Marix" />
      <meta name="apple-mobile-web-app-title" content="Marix" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Marix",
          "description": description,
          "applicationCategory": "DeveloperApplication",
          "operatingSystem": "Windows, macOS, Linux",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "author": {
            "@type": "Organization",
            "name": "marixdev",
            "url": "https://github.com/marixdev"
          },
          "softwareVersion": "latest",
          "downloadUrl": "https://github.com/marixdev/marix/releases/latest",
          "screenshot": `${baseUrl}/terminal.png`,
          "featureList": [
            "SSH Terminal",
            "SFTP File Manager",
            "FTP/FTPS Support",
            "RDP Remote Desktop",
            "Database Client",
            "Zero-Knowledge Encryption",
            "Client-Side Encryption",
            "Multi-Language Support"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
