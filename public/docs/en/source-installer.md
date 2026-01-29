# Source Installer

The Source Installer allows you to install popular web frameworks and CMS directly on your remote server via SSH.

## Source Installer Interface

![Source Installer Interface](/source.png)

---

## Supported Frameworks

| Category | Frameworks |
|----------|------------|
| **PHP** | Laravel, WordPress, Symfony, CodeIgniter 3/4 |
| **JavaScript** | Express.js, NestJS, Fastify, Vue.js, Nuxt.js, React, Next.js |
| **TypeScript** | TypeScript Node |

---

## Getting Started

### Prerequisites

- **For PHP frameworks**: PHP and Composer installed
- **For JavaScript frameworks**: Node.js and npm installed
- **SSH access** with appropriate permissions

### Accessing the Source Installer

1. Connect to your server via SSH
2. Switch to the **SFTP** tab
3. Navigate to the target directory
4. Right-click and select **"Install Source Code"**

---

## Installation Process

### Step 1: Select Framework

Choose from available frameworks organized by category.

### Step 2: Version Selection

#### PHP Frameworks

- **Detects your server's PHP version** automatically
- **Fetches available versions** from GitHub in real-time
- **Shows compatibility status**:
  - ✅ Compatible - PHP version meets requirements
  - ❌ Incompatible - PHP version too low or too high
  - 🟢 LTS - Long-term support version

#### JavaScript/TypeScript Frameworks

- Versions fetched from npm registry
- Latest stable version selected by default

### Step 3: Configuration

| Option | Description |
|--------|-------------|
| Project Name | Folder name to create |
| Install in current directory | Install files directly in current folder |
| Database Configuration | For frameworks that need it |

### Step 4: Installation

Click **"Install"** to begin. The installer will:

1. Check dependencies (Composer/Node.js/npm)
2. Download the framework
3. Configure the project
4. Display real-time installation logs

---

## Framework Details

### Laravel

| Version | PHP Requirement | Status |
|---------|-----------------|--------|
| Laravel 12 | PHP 8.3+ | Latest |
| Laravel 11 | PHP 8.2+ | LTS |
| Laravel 10 | PHP 8.1+ | LTS |

### WordPress

- Fetches versions from GitHub
- Auto-configures `wp-config.php` with database credentials

### Symfony

| Version | PHP Requirement |
|---------|-----------------|
| Symfony 8.x | PHP 8.3+ |
| Symfony 7.x | PHP 8.2+ |
| Symfony 6.4 | PHP 8.1+ (LTS) |

### Node.js Frameworks

- Express.js, NestJS, Fastify (Node.js 14+)
- Vue.js, Nuxt.js, React, Next.js (Node.js 16+)

---

## Dynamic Version Fetching

The installer fetches available versions in real-time:

| Framework | Source |
|-----------|--------|
| Laravel, CodeIgniter | GitHub Releases API |
| WordPress | GitHub Tags API |
| Symfony | symfony.com API |
| Node.js Frameworks | npm Registry |

When new versions are released, they appear automatically.

---

## Troubleshooting

### "Composer not found"

```bash
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
```

### "Node.js not found"

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install --lts
```

### "PHP version incompatible"

Check and upgrade PHP:

```bash
php -v
sudo add-apt-repository ppa:ondrej/php
sudo apt update
sudo apt install php8.3
```

### "Permission denied"

```bash
sudo chown -R $USER:$USER /var/www/html
```

---

## Best Practices

1. **Use specific versions in production** for reproducible deployments
2. **Check PHP compatibility first** before installing
3. **Configure database before installing** to save time
4. **Install in clean directories** to avoid conflicts
