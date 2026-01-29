# Installateur de sources

Marix inclut un **installateur de sources** intégré qui facilite l'installation de logiciels courants sur vos serveurs Linux. Cette fonctionnalité simplifie le processus d'installation de stacks web, bases de données et autres outils essentiels.

## Interface de l'installateur

![Interface de l'installateur de sources](/source-installer.png)

## Fonctionnalités

- **Installation en un clic** : Installez des logiciels populaires rapidement
- **Scripts automatisés** : Scripts d'installation testés et maintenus
- **Multi-distributions** : Support pour Ubuntu, Debian, CentOS, Rocky Linux, etc.
- **Personnalisation** : Options de configuration disponibles
- **Logs d'installation** : Suivi détaillé du processus d'installation

## Catégories de logiciels

### Serveurs Web

| Logiciel | Description |
|----------|-------------|
| **Nginx** | Serveur web haute performance |
| **Apache** | Serveur HTTP populaire |
| **Caddy** | Serveur web avec HTTPS automatique |
| **OpenLiteSpeed** | Serveur web léger et rapide |

### Langages de programmation

| Logiciel | Description |
|----------|-------------|
| **PHP** | Avec plusieurs versions (7.4, 8.0, 8.1, 8.2, 8.3) |
| **Node.js** | Runtime JavaScript avec npm |
| **Python** | Avec pip et virtualenv |
| **Ruby** | Avec RubyGems et Bundler |
| **Go** | Langage de programmation Go |

### Bases de données

| Logiciel | Description |
|----------|-------------|
| **MySQL** | Base de données relationnelle |
| **MariaDB** | Fork de MySQL |
| **PostgreSQL** | Base de données relationnelle avancée |
| **MongoDB** | Base de données NoSQL |
| **Redis** | Store clé-valeur en mémoire |
| **SQLite** | Base de données légère |

### Outils de développement

| Logiciel | Description |
|----------|-------------|
| **Git** | Contrôle de version |
| **Docker** | Conteneurisation |
| **Docker Compose** | Orchestration de conteneurs |
| **Composer** | Gestionnaire de dépendances PHP |
| **npm/yarn** | Gestionnaires de paquets Node.js |

### Panneaux de contrôle

| Logiciel | Description |
|----------|-------------|
| **phpMyAdmin** | Interface web pour MySQL |
| **Adminer** | Gestionnaire de base de données léger |
| **Webmin** | Panneau d'administration système |
| **Cockpit** | Interface d'administration serveur |

### Sécurité

| Logiciel | Description |
|----------|-------------|
| **Certbot** | Certificats SSL Let's Encrypt |
| **UFW** | Pare-feu simplifié |
| **Fail2Ban** | Protection contre les intrusions |

## Utilisation

### Accéder à l'installateur

1. Connectez-vous à un serveur via SSH
2. Appuyez sur l'icône **Installateur** dans la barre d'outils
3. Ou utilisez le menu **Outils** > **Installateur de sources**

### Installer un logiciel

1. Parcourez les catégories ou recherchez un logiciel
2. Appuyez sur le logiciel à installer
3. Configurez les options si disponibles (version, paramètres)
4. Appuyez sur **Installer**
5. Suivez la progression dans le terminal

### Options d'installation

Certains logiciels offrent des options :

- **Version** : Choisissez la version à installer
- **Configuration** : Paramètres de base (port, mot de passe)
- **Extensions** : Modules ou plugins additionnels
- **Démarrage automatique** : Activer le service au démarrage

## Exemples d'installation

### Stack LEMP (Linux, Nginx, MySQL, PHP)

1. Installez **Nginx**
2. Installez **MySQL** ou **MariaDB**
3. Installez **PHP** avec les extensions nécessaires
4. Installez **phpMyAdmin** (optionnel)

### Stack Node.js

1. Installez **Node.js** (version LTS recommandée)
2. Installez **PM2** pour la gestion des processus
3. Installez **Nginx** comme reverse proxy

### Stack Docker

1. Installez **Docker**
2. Installez **Docker Compose**
3. Configurez les permissions utilisateur

## Logs et dépannage

### Voir les logs d'installation

- Les logs s'affichent en temps réel dans le terminal
- Les logs sont également sauvegardés dans `/var/log/` sur le serveur

### Problèmes courants

| Problème | Solution |
|----------|----------|
| Permission refusée | Assurez-vous d'avoir les droits sudo |
| Paquet non trouvé | Mettez à jour les sources : `apt update` |
| Conflit de version | Désinstallez la version existante d'abord |
| Dépendances manquantes | L'installateur les gère automatiquement |

## Scripts personnalisés

### Ajouter un script personnalisé

1. Allez dans **Paramètres** > **Installateur**
2. Appuyez sur **Ajouter un script**
3. Entrez le nom et le contenu du script
4. Enregistrez

### Format des scripts

```bash
#!/bin/bash
# Nom: Mon script personnalisé
# Description: Installation de mon logiciel
# Distribution: ubuntu,debian

# Mise à jour des paquets
apt update

# Installation
apt install -y mon-logiciel

# Configuration
echo "Configuration terminée"
```

## Sécurité

- ⚠️ **Vérifiez toujours** les scripts avant l'exécution
- ⚠️ **Sauvegardez** votre serveur avant les installations majeures
- ⚠️ **Testez** sur un environnement de développement d'abord
- ✅ Les scripts officiels sont vérifiés et maintenus

## Distributions supportées

| Distribution | Versions |
|--------------|----------|
| Ubuntu | 20.04, 22.04, 24.04 |
| Debian | 10, 11, 12 |
| CentOS | 7, 8, Stream |
| Rocky Linux | 8, 9 |
| AlmaLinux | 8, 9 |
| Fedora | 38, 39, 40 |

## Voir aussi

- [Terminal SSH](ssh-terminal.md)
- [Base de données](database.md)
- [Dépannage](troubleshooting.md)
