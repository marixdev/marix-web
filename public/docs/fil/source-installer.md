# Source Installer

Ang Source Installer ay nagbibigay-daan sa iyong i-install ang mga PHP at JavaScript framework nang direkta sa remote server.

## Pangkalahatang-ideya

![Source Installer](/source-installer.png)

Mabilis na mag-deploy ng mga popular na framework tulad ng:
- Laravel, Symfony, CodeIgniter (PHP)
- React, Vue, Angular, Next.js (JavaScript)
- At marami pa

## Pag-access sa Source Installer

1. Kumonekta sa isang SSH server
2. Buksan ang SFTP file manager
3. Mag-navigate sa target directory
4. I-right-click → **"Source Installer"**

## Mga Kinakailangan

### Para sa PHP Frameworks

- PHP na naka-install sa server
- Composer na naka-install globally
- Mga kinakailangang PHP extension para sa framework

### Para sa JavaScript Frameworks

- Node.js na naka-install sa server
- npm o yarn package manager
- Sapat na memory para sa installation

## Pag-install ng Framework

### Hakbang 1: Buksan ang Installer

1. Mag-navigate sa gustong installation directory
2. I-right-click at piliin ang **"Source Installer"**
3. Ang installer dialog ay magbubukas

### Hakbang 2: Pumili ng Framework

1. I-browse ang available na mga framework
2. I-filter ayon sa kategorya (PHP, JavaScript, etc.)
3. I-click ang framework na gusto mong i-install

### Hakbang 3: I-configure ang Installation

| Opsyon | Paglalarawan |
|--------|--------------|
| Project Name | Pangalan ng iyong bagong proyekto |
| Directory | Kung saan i-i-install (default: kasalukuyang folder) |
| Version | Bersyon ng framework (pinakabago o partikular) |
| Options | Mga framework-specific na opsyon |

### Hakbang 4: Simulan ang Installation

1. I-review ang mga setting
2. I-click ang **"Install"**
3. Hintaying matapos ang installation
4. Ang progreso ay ipapakita sa terminal output

## Mga Sinusuportahang Framework

### PHP Frameworks

| Framework | Command | Mga Kinakailangan |
|-----------|---------|-------------------|
| Laravel | `composer create-project laravel/laravel` | PHP 8.1+, Composer |
| Symfony | `composer create-project symfony/skeleton` | PHP 8.1+, Composer |
| CodeIgniter | `composer create-project codeigniter4/appstarter` | PHP 7.4+, Composer |
| Yii | `composer create-project yiisoft/yii2-app-basic` | PHP 7.4+, Composer |
| CakePHP | `composer create-project cakephp/app` | PHP 7.4+, Composer |
| Slim | `composer create-project slim/slim-skeleton` | PHP 7.4+, Composer |

### JavaScript Frameworks

| Framework | Command | Mga Kinakailangan |
|-----------|---------|-------------------|
| Next.js | `npx create-next-app` | Node.js 18+ |
| React (Vite) | `npm create vite@latest` | Node.js 18+ |
| Vue.js | `npm create vue@latest` | Node.js 16+ |
| Angular | `npx @angular/cli new` | Node.js 18+ |
| Nuxt | `npx nuxi init` | Node.js 18+ |
| SvelteKit | `npm create svelte@latest` | Node.js 16+ |
| Astro | `npm create astro@latest` | Node.js 18+ |

### Iba Pang Mga Tool

| Tool | Paglalarawan |
|------|--------------|
| WordPress | Popular na CMS |
| Drupal | Enterprise CMS |
| Ghost | Publishing platform |
| Strapi | Headless CMS |

## Post-Installation

Pagkatapos ng installation, maaaring kailangan mong:

### Para sa PHP Projects

```bash
# I-install ang mga dependency
composer install

# I-copy ang environment file
cp .env.example .env

# Mag-generate ng application key (Laravel)
php artisan key:generate

# Patakbuhin ang mga migration
php artisan migrate
```

### Para sa JavaScript Projects

```bash
# I-install ang mga dependency
npm install

# Simulan ang development server
npm run dev

# I-build para sa production
npm run build
```

## Pag-troubleshoot

### Karaniwang mga Problema

**"Composer not found"**
- I-install ang Composer globally: `curl -sS https://getcomposer.org/installer | php`
- I-move sa path: `mv composer.phar /usr/local/bin/composer`

**"npm not found"**
- I-install ang Node.js: `curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -`
- I-install ang npm: `sudo apt install nodejs`

**"Permission denied"**
- Suriin ang mga permiso ng directory
- Gamitin ang `sudo` kung kinakailangan
- I-change ang ownership: `chown -R user:group directory`

**"Out of memory"**
- Dagdagan ang swap space
- Gamitin ang `--no-dev` flag para sa Composer
- Isara ang hindi kinakailangang mga proseso

## Mga Tip

- **Suriin ang mga kinakailangan** bago mag-install ng framework
- **Gumamit ng version control** kaagad pagkatapos ng installation
- **I-secure ang .env files** - huwag i-commit sa repository
- **Mag-set ng tamang mga permiso** para sa web server access
