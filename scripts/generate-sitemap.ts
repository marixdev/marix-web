import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://marix.dev';
const DOCS_DIR = path.join(__dirname, '../public/docs');
const OUTPUT_DIR = path.join(__dirname, '../public');

// Supported languages
const LANGUAGES = ['en', 'vi', 'zh', 'ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'th', 'id', 'ms', 'fil'];

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

function getDocsForLanguage(lang: string): string[] {
  const langDir = path.join(DOCS_DIR, lang);
  
  if (!fs.existsSync(langDir)) {
    return [];
  }
  
  const files = fs.readdirSync(langDir);
  return files
    .filter(file => file.endsWith('.md') && !file.startsWith('_') && file !== 'README.md')
    .map(file => file.replace('.md', ''));
}

function getFileLastModified(filePath: string): string {
  try {
    const stats = fs.statSync(filePath);
    return stats.mtime.toISOString().split('T')[0];
  } catch {
    return new Date().toISOString().split('T')[0];
  }
}

function generateSitemap(): void {
  const urls: SitemapUrl[] = [];
  const today = new Date().toISOString().split('T')[0];

  // Homepage
  urls.push({
    loc: SITE_URL,
    lastmod: today,
    changefreq: 'weekly',
    priority: '1.0'
  });

  // Docs index for each language - /docs/en, /docs/vi, etc.
  LANGUAGES.forEach(lang => {
    urls.push({
      loc: `${SITE_URL}/docs/${lang}`,
      lastmod: today,
      changefreq: 'weekly',
      priority: '0.9'
    });
  });

  // Individual doc pages - /docs/en/rdp, /docs/vi/rdp, etc.
  LANGUAGES.forEach(lang => {
    const docs = getDocsForLanguage(lang);
    docs.forEach(doc => {
      const filePath = path.join(DOCS_DIR, lang, `${doc}.md`);
      const lastmod = getFileLastModified(filePath);
      
      urls.push({
        loc: `${SITE_URL}/docs/${lang}/${doc}`,
        lastmod,
        changefreq: 'monthly',
        priority: '0.8'
      });
    });
  });

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  // Write sitemap.xml
  const sitemapPath = path.join(OUTPUT_DIR, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, xml, 'utf-8');
  
  console.log(`✅ Sitemap generated: ${sitemapPath}`);
  console.log(`   - ${urls.length} URLs total`);
  console.log(`   - ${LANGUAGES.length} languages`);
  
  // Count docs per language
  LANGUAGES.forEach(lang => {
    const count = getDocsForLanguage(lang).length;
    console.log(`   - ${lang}: ${count} docs`);
  });
}

// Run
generateSitemap();
