# Benchmark Serveur

Testez et mesurez les performances de votre serveur directement depuis le terminal SSH avec des benchmarks complets du système, du disque et du réseau.

## Interface de Benchmark Serveur

![Interface de Benchmark Serveur](/benchmark.png)

## Aperçu

La fonctionnalité de Benchmark Serveur fournit une analyse complète des performances de votre serveur distant, incluant :

- **Informations Système** : Détails matériels et logiciels
- **Performances Disque** : Vitesses de lecture/écriture séquentielles, latence I/O et IOPS aléatoires
- **Vitesse Réseau** : Tests de vitesse multi-régions avec mesures de téléchargement, téléversement et latence

## Comment Utiliser

### Démarrer un Benchmark

1. Connectez-vous à un serveur via SSH
2. Cliquez sur le bouton **📊 Benchmark** dans le pied de page du terminal
3. (Optionnel) Cochez **"Upload to paste.dev"** pour partager les résultats en ligne
4. Cliquez sur **Start Benchmark**

### Phases du Benchmark

Le benchmark s'exécute en 4 phases :

| Phase | Description | Durée |
|-------|-------------|-------|
| 1. Info Système | Collecte les infos OS, CPU, RAM, disque | ~2 secondes |
| 2. Test Disque | Exécute les tests dd, ioping et fio | ~45 secondes |
| 3. Test Réseau | Teste la vitesse vers 18 régions mondiales | ~3-5 minutes |
| 4. Terminé | Affiche les résultats et options d'exportation | - |

## Détails du Benchmark

### Informations Système

Les données collectées incluent :

| Champ | Description |
|-------|-------------|
| OS | Nom et version du système d'exploitation |
| Kernel | Version du noyau Linux |
| Architecture | Architecture CPU (x86_64, arm64, etc.) |
| Hostname | Nom d'hôte du serveur |
| CPU Model | Nom et spécifications du processeur |
| CPU Cores | Nombre de cœurs CPU |
| CPU Frequency | Fréquence CPU actuelle |
| Memory | RAM utilisée / totale |
| Swap | Espace swap utilisé / total |
| Disk | Espace disque utilisé / total |
| Uptime | Temps de fonctionnement du serveur |
| Load Average | Moyennes de charge 1/5/15 minutes |
| Virtualization | Type de VM (KVM, VMware, OpenVZ, etc.) |

### Performances Disque

#### Écriture/Lecture Séquentielle (dd)

- **Méthode** : `dd if=/dev/zero of=test bs=64k count=16k conv=fdatasync`
- **Exécutions** : 3 fois, moyennées pour la précision
- **Emplacement du Test** : Répertoire home (pas /tmp pour éviter tmpfs)
- **Mesure** : Débit séquentiel en MB/s ou GB/s

#### Latence I/O (ioping)

- **Méthode** : `ioping -c 10 -q /`
- **Mesure** : Temps de réponse I/O du disque en microsecondes
- **Cible** : Système de fichiers racine pour la latence réelle du disque

#### IOPS Aléatoires 4K (fio)

- **Méthode** : fio avec lecture/écriture aléatoire 4K, profondeur de file 64
- **Durée** : 30 secondes
- **Mesure** :
  - Read IOPS
  - Write IOPS
  - Read Bandwidth
  - Write Bandwidth

> **Note** : Si `fio` ou `ioping` ne sont pas installés, le benchmark tentera de les installer automatiquement.

### Vitesse Réseau

Les tests sont effectués contre les serveurs Speedtest.net dans 18 régions mondiales :

| Région | Emplacements |
|--------|--------------|
| Asie | Singapour, Tokyo, Hong Kong, Séoul, Mumbai |
| Europe | Londres, Francfort, Paris, Amsterdam |
| Amériques | Los Angeles, New York, Chicago, Toronto, São Paulo |
| Océanie | Sydney, Auckland |
| Moyen-Orient/Afrique | Dubaï, Johannesburg |

Pour chaque serveur, le benchmark mesure :
- **Vitesse de Téléchargement** : MB/s ou Gbps
- **Vitesse de Téléversement** : MB/s ou Gbps
- **Latence** : Temps aller-retour en millisecondes

## Options d'Exportation

Après la fin du benchmark, vous pouvez exporter les résultats dans plusieurs formats :

### 🌐 HTML

Fichier HTML autonome avec mise en page stylisée. Fonctionnalités :
- Design thème sombre
- Mise en page responsive
- Toutes les données de benchmark en cartes
- Pied de page avec liens marix.dev et GitHub

### 📋 JSON

Données JSON structurées avec :
- Résultats complets du benchmark
- Horodatages
- Objet meta avec liens site web et GitHub
- Format lisible par machine pour l'automatisation

### 🖼️ PNG

Capture d'écran image haute résolution :
- Échelle 2x pour écrans retina
- Couleurs RGB (compatible html2canvas)
- Toutes les sections incluses
- Pied de page avec branding

### 📄 TXT

Fichier texte formaté en art ASCII :
- Caractères de dessin de boîte pour les tableaux
- Convivial pour copier-coller
- Sortie style terminal
- Pied de page avec liens

## Intégration paste.dev

Partagez vos résultats de benchmark en ligne en un clic :

### Fonctionnement

1. Cochez **"Upload to paste.dev"** avant de démarrer le benchmark
2. Exécutez le benchmark
3. Après la fin, les résultats sont automatiquement téléversés
4. Un lien partageable apparaît avec les boutons **Copy** et **Open**

### Fonctionnalités

- **Téléversement Automatique** : Format TXT téléversé à la fin du benchmark
- **Copier le Lien** : Cliquez sur 📋 Copy pour copier l'URL dans le presse-papiers
- **Ouvrir le Lien** : Cliquez sur 🔗 Open pour voir dans le navigateur
- **Partage Public** : Toute personne avec le lien peut voir les résultats

## Prérequis

### Prérequis Serveur

| Outil | Objectif | Installation Auto |
|-------|----------|-------------------|
| `dd` | Vitesse lecture/écriture disque | Généralement préinstallé |
| `ioping` | Mesure de latence I/O | ✅ Oui |
| `fio` | Test IOPS aléatoires | ✅ Oui |
| `curl` | Tests de vitesse réseau | Généralement préinstallé |

### Gestionnaires de Paquets Supportés

L'installation automatique fonctionne avec :
- **apt** (Debian, Ubuntu)
- **yum** (CentOS, RHEL)
- **dnf** (Fedora)
- **pacman** (Arch Linux)
- **apk** (Alpine Linux)
- **zypper** (openSUSE)

## Dépannage

### Le Test Disque Affiche des Vitesses Irréalistes (5+ GB/s)

**Cause** : `/tmp` est monté en tmpfs (disque RAM)

**Solution** : Le benchmark détecte automatiquement cela et utilise le répertoire home à la place.

### Le Test Réseau Prend Trop de Temps

**Cause** : Certaines régions peuvent être lentes ou inaccessibles

**Solution** : Le benchmark teste plusieurs régions. Les régions lentes auront un timeout après 30 secondes.

### "Permission Denied" lors de l'Installation des Outils

**Cause** : L'utilisateur n'a pas d'accès sudo

**Solution** : Demandez à votre administrateur serveur d'installer `fio` et `ioping` :

```bash
# Debian/Ubuntu
sudo apt install fio ioping

# CentOS/RHEL
sudo yum install fio ioping

# Fedora
sudo dnf install fio ioping
```

### Erreur d'Export PNG "oklch"

**Cause** : html2canvas ne supporte pas le format de couleur oklch

**Solution** : Corrigé dans v1.0.19. PNG utilise maintenant des couleurs RGB hexadécimales.

## Exemple de Sortie

### Exemple Format TXT

```
════════════════════════════════════════════════════════════
  MARIX SERVER BENCHMARK - my-server.com
  1/29/2026, 10:30:45 AM
════════════════════════════════════════════════════════════

┌────────────────────────────────────────────────────────────┐
│                    SYSTEM INFORMATION                      │
└────────────────────────────────────────────────────────────┘
  OS            : Ubuntu 22.04.3 LTS
  CPU           : AMD EPYC 7B13 64-Core Processor
  CPU Cores     : 4
  Memory        : 2.1 GB / 8.0 GB (26%)
  Disk          : 45 GB / 160 GB (28%)
  Virtualization: KVM

┌────────────────────────────────────────────────────────────┐
│                    DISK PERFORMANCE                        │
└────────────────────────────────────────────────────────────┘
  Sequential Write : 580 MB/s
  Sequential Read  : 1.2 GB/s
  I/O Latency      : 227 µs

  Random 4K IOPS (fio):
    Read IOPS   : 45,230
    Write IOPS  : 15,076
    Read BW     : 176.7 MB/s
    Write BW    : 58.9 MB/s

┌────────────────────────────────────────────────────────────┐
│                    NETWORK SPEED                           │
└────────────────────────────────────────────────────────────┘
  Singapore    : ↓ 892 Mbps  ↑ 456 Mbps  (12ms)
  Tokyo        : ↓ 756 Mbps  ↑ 389 Mbps  (45ms)
  Frankfurt    : ↓ 234 Mbps  ↑ 178 Mbps  (156ms)
  ...

────────────────────────────────────────────────────────────
  marix.dev | https://github.com/marixdev/marix
  Generated by Marix SSH Client v1.0.19
────────────────────────────────────────────────────────────
```

## Notes de Sécurité

- Le benchmark exécute des commandes sur le serveur distant via SSH
- Aucune donnée n'est envoyée à des serveurs externes sauf Speedtest.net (pour les tests de vitesse)
- Les téléversements vers paste.dev sont optionnels et initiés par l'utilisateur
- Les fichiers de test temporaires sont automatiquement nettoyés après le benchmark
