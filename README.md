<p align="center">
  <img src="public/marix.svg" alt="Marix Logo" width="120">
</p>

<h1 align="center">Marix Website</h1>

<p align="center">
  Official website for <strong>Marix</strong> - A Modern, Zero-Knowledge SSH Client
</p>

<p align="center">
  <a href="https://marix.dev">🌐 Live Website</a> •
  <a href="https://github.com/marixdev/marix">📦 Main Repository</a> •
  <a href="https://discord.gg/KSenHkCtN6">💬 Discord</a>
</p>

---

## About

This repository contains the source code for the **Marix official website** ([marix.dev](https://marix.dev)).

For information about the Marix SSH Client itself, please visit the [main repository](https://github.com/marixdev/marix).

## Tech Stack

| Technology | Purpose |
|------------|---------|
| ⚡ **Vite** | Fast build tool & dev server |
| ⚛️ **React 19** | UI library |
| 🎨 **Tailwind CSS** | Utility-first styling |
| 🧩 **shadcn/ui** | UI components |
| 📘 **TypeScript** | Type safety |
| 🌍 **i18n** | 14 languages |

## Features

- 🌙 **Dark/Light mode** - System-aware theme switching
- 🌐 **Multi-language** - EN, VI, ZH, JA, KO, DE, FR, ES, PT, RU, TH, ID, MS, FIL
- 📖 **Documentation** - Full docs with Markdown support
- 📱 **Responsive** - Mobile-first design
- ⚡ **Fast** - Optimized performance

## Development

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## Project Structure

```
src/
├── components/     # React components (Header, Footer, Hero, etc.)
├── pages/          # Page components (Index, Docs, NotFound)
├── i18n/           # Translations for 14 languages
├── hooks/          # Custom React hooks
├── contexts/       # React contexts (Theme)
├── lib/            # Utilities

public/
├── docs/           # Documentation (Markdown)
│   ├── en/         # English
│   ├── vi/         # Tiếng Việt
│   ├── zh/         # 中文
│   ├── ja/         # 日本語
│   ├── ko/         # 한국어
│   └── ...         # 9 more languages
```

## Related

- 📦 **[Marix](https://github.com/marixdev/marix)** - Main SSH client repository
- 📖 **[Documentation](https://marix.dev/docs)** - Full documentation

## License

GPL V3 © [Marix](https://github.com/marixdev)
