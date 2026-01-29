# Quellcode-Installer

Der Quellcode-Installer ermöglicht es Ihnen, beliebte Web-Frameworks und CMS direkt auf Ihrem Remote-Server über SSH zu installieren.

## Quellcode-Installer-Oberfläche

![Quellcode-Installer-Oberfläche](/source.png)

---

## Unterstützte Frameworks

| Kategorie | Frameworks |
|-----------|------------|
| **PHP** | Laravel, WordPress, Symfony, CodeIgniter 3/4 |
| **JavaScript** | Express.js, NestJS, Fastify, Vue.js, Nuxt.js, React, Next.js |
| **TypeScript** | TypeScript Node |

---

## Erste Schritte

### Voraussetzungen

- **Für PHP-Frameworks**: PHP und Composer installiert
- **Für JavaScript-Frameworks**: Node.js und npm installiert
- **SSH-Zugang** mit entsprechenden Berechtigungen

### Auf den Quellcode-Installer zugreifen

1. Verbinden Sie sich über SSH mit Ihrem Server
2. Wechseln Sie zum **SFTP**-Tab
3. Navigieren Sie zum Zielverzeichnis
4. Rechtsklicken Sie und wählen Sie **„Quellcode installieren"**

---

## Installationsprozess

### Schritt 1: Framework auswählen

Wählen Sie aus verfügbaren Frameworks, die nach Kategorie organisiert sind.

### Schritt 2: Versionsauswahl

#### PHP-Frameworks

- **Erkennt automatisch die PHP-Version Ihres Servers**
- **Ruft verfügbare Versionen** von GitHub in Echtzeit ab
- **Zeigt Kompatibilitätsstatus**:
  - ✅ Kompatibel - PHP-Version erfüllt Anforderungen
  - ❌ Inkompatibel - PHP-Version zu niedrig oder zu hoch
  - 🟢 LTS - Langzeit-Support-Version

#### JavaScript/TypeScript-Frameworks

- Versionen werden von der npm-Registry abgerufen
- Standardmäßig ist die neueste stabile Version ausgewählt

### Schritt 3: Konfiguration

| Option | Beschreibung |
|--------|--------------|
| Projektname | Zu erstellender Ordnername |
| Im aktuellen Verzeichnis installieren | Dateien direkt im aktuellen Ordner installieren |
| Datenbankkonfiguration | Für Frameworks, die es benötigen |

### Schritt 4: Installation

Klicken Sie auf **„Installieren"** zum Starten. Der Installer wird:

1. Abhängigkeiten prüfen (Composer/Node.js/npm)
2. Das Framework herunterladen
3. Das Projekt konfigurieren
4. Echtzeit-Installationsprotokolle anzeigen

---

## Framework-Details

### Laravel

| Version | PHP-Anforderung | Status |
|---------|-----------------|--------|
| Laravel 12 | PHP 8.3+ | Neueste |
| Laravel 11 | PHP 8.2+ | LTS |
| Laravel 10 | PHP 8.1+ | LTS |

### WordPress

- Ruft Versionen von GitHub ab
- Konfiguriert automatisch `wp-config.php` mit Datenbankanmeldedaten

### Symfony

| Version | PHP-Anforderung |
|---------|-----------------|
| Symfony 8.x | PHP 8.3+ |
| Symfony 7.x | PHP 8.2+ |
| Symfony 6.4 | PHP 8.1+ (LTS) |

### Node.js-Frameworks

- Express.js, NestJS, Fastify (Node.js 14+)
- Vue.js, Nuxt.js, React, Next.js (Node.js 16+)

---

## Dynamisches Versions-Abrufen

Der Installer ruft verfügbare Versionen in Echtzeit ab:

| Framework | Quelle |
|-----------|--------|
| Laravel, CodeIgniter | GitHub Releases API |
| WordPress | GitHub Tags API |
| Symfony | symfony.com API |
| Node.js-Frameworks | npm Registry |

Wenn neue Versionen veröffentlicht werden, erscheinen sie automatisch.

---

## Fehlerbehebung

### „Composer nicht gefunden"

```bash
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
```

### „Node.js nicht gefunden"

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install --lts
```

### „PHP-Version inkompatibel"

PHP prüfen und aktualisieren:

```bash
php -v
sudo add-apt-repository ppa:ondrej/php
sudo apt update
sudo apt install php8.3
```

### „Zugriff verweigert"

```bash
sudo chown -R $USER:$USER /var/www/html
```

---

## Best Practices

1. **Spezifische Versionen in Produktion verwenden** für reproduzierbare Deployments
2. **PHP-Kompatibilität zuerst prüfen** vor der Installation
3. **Datenbank vor Installation konfigurieren** um Zeit zu sparen
4. **In sauberen Verzeichnissen installieren** um Konflikte zu vermeiden
