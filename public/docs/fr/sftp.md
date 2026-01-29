# Gestionnaire de fichiers SFTP

Marix inclut un **gestionnaire de fichiers SFTP** intégré qui vous permet de parcourir, télécharger, téléverser et gérer des fichiers sur des serveurs distants via SFTP (SSH File Transfer Protocol).

## Interface du gestionnaire de fichiers

![Interface du gestionnaire de fichiers SFTP](/sftp.png)

## Fonctionnalités

### Navigation dans les fichiers

- **Vue arborescente** : Parcourez les répertoires distants dans une vue hiérarchique
- **Vue en liste** : Affichez les fichiers avec leurs détails (taille, date de modification, permissions)
- **Tri** : Triez les fichiers par nom, taille, date ou type
- **Fichiers cachés** : Activez/désactivez la visibilité des fichiers cachés (commençant par `.`)

### Opérations sur les fichiers

| Opération | Description |
|-----------|-------------|
| **Télécharger** | Téléchargez des fichiers/dossiers sur votre appareil |
| **Téléverser** | Téléversez des fichiers/dossiers vers le serveur |
| **Créer un fichier** | Créez de nouveaux fichiers texte |
| **Créer un dossier** | Créez de nouveaux répertoires |
| **Renommer** | Renommez des fichiers ou dossiers |
| **Supprimer** | Supprimez des fichiers ou dossiers |
| **Copier** | Copiez des fichiers vers un autre emplacement |
| **Déplacer** | Déplacez des fichiers vers un autre emplacement |
| **Modifier les permissions** | Modifiez les permissions des fichiers (chmod) |

### Édition de fichiers

- **Éditeur intégré** : Modifiez les fichiers texte directement dans l'application
- **Coloration syntaxique** : Support pour de nombreux langages de programmation
- **Enregistrement automatique** : Option d'enregistrement automatique lors de l'édition
- **Encodage** : Support de plusieurs encodages de caractères

## Utilisation

### Connexion via SFTP

1. Depuis l'écran d'accueil, appuyez sur un serveur
2. Sélectionnez **SFTP** comme type de connexion
3. Le gestionnaire de fichiers s'ouvre dans le répertoire d'accueil

### Navigation

- **Appuyez** sur un dossier pour l'ouvrir
- **Appuyez longuement** sur un fichier/dossier pour le sélectionner
- Utilisez la **barre de navigation** en haut pour revenir en arrière
- Appuyez sur **...** pour accéder au répertoire parent

### Téléchargement de fichiers

1. Naviguez vers le fichier à télécharger
2. Appuyez longuement pour sélectionner
3. Appuyez sur l'icône **Télécharger** dans la barre d'outils
4. Choisissez l'emplacement de destination

### Téléversement de fichiers

1. Appuyez sur le bouton **+** ou **Téléverser**
2. Sélectionnez les fichiers depuis votre appareil
3. Le transfert commence automatiquement
4. La progression s'affiche dans la barre de notification

### Création de fichiers/dossiers

1. Appuyez sur le bouton **+** dans la barre d'outils
2. Sélectionnez **Nouveau fichier** ou **Nouveau dossier**
3. Entrez le nom
4. Appuyez sur **Créer**

### Édition de fichiers

1. Appuyez sur un fichier texte pour l'ouvrir dans l'éditeur
2. Modifiez le contenu
3. Appuyez sur **Enregistrer** ou utilisez le raccourci `Ctrl+S`

### Gestion des permissions

1. Sélectionnez un fichier ou dossier
2. Appuyez sur **Permissions** ou **Propriétés**
3. Modifiez les permissions (lecture/écriture/exécution)
4. Appuyez sur **Appliquer**

## Paramètres SFTP

| Paramètre | Description |
|-----------|-------------|
| **Afficher les fichiers cachés** | Affiche/masque les fichiers commençant par `.` |
| **Trier par** | Nom, taille, date ou type |
| **Ordre de tri** | Croissant ou décroissant |
| **Répertoire par défaut** | Répertoire d'ouverture initial |
| **Taille du buffer** | Taille du buffer de transfert |
| **Compression** | Active la compression pour les transferts |

## Transferts en arrière-plan

- Les transferts continuent en arrière-plan
- **Notification** affiche la progression
- **Reprise** automatique en cas d'interruption
- **File d'attente** pour les transferts multiples

## Raccourcis clavier

| Raccourci | Action |
|-----------|--------|
| `Ctrl+R` | Actualiser |
| `Ctrl+N` | Nouveau fichier |
| `Ctrl+Shift+N` | Nouveau dossier |
| `Ctrl+S` | Enregistrer (dans l'éditeur) |
| `Suppr` | Supprimer la sélection |
| `F2` | Renommer |
| `Ctrl+C` | Copier |
| `Ctrl+V` | Coller |
| `Ctrl+X` | Couper |
| `Ctrl+A` | Tout sélectionner |

## Sécurité

- **Chiffrement** : Tous les transferts sont chiffrés via SSH
- **Authentification** : Support des clés SSH et mots de passe
- **Vérification de l'hôte** : Vérification de l'empreinte du serveur

## Dépannage

### Erreur de connexion

- Vérifiez les identifiants du serveur
- Assurez-vous que le service SFTP est activé sur le serveur
- Vérifiez les règles du pare-feu

### Transfert lent

- Activez la compression dans les paramètres
- Vérifiez la qualité de la connexion réseau
- Utilisez des tailles de buffer plus grandes

### Permission refusée

- Vérifiez les permissions du fichier/dossier sur le serveur
- Assurez-vous que l'utilisateur a les droits appropriés

## Voir aussi

- [Terminal SSH](ssh-terminal.md)
- [Clés SSH](ssh-keys.md)
- [Transfert de fichiers LAN](lan-file-transfer.md)
