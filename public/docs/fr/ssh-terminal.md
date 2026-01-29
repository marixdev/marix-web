# Terminal SSH

Le **terminal SSH** est la fonctionnalité principale de Marix. Il vous permet de vous connecter à des serveurs distants et d'exécuter des commandes via une connexion sécurisée SSH.

## Interface du terminal

![Interface du terminal SSH](/app.png)

## Fonctionnalités

### Émulateur de terminal

- **xterm-256color** : Support complet des couleurs 256 couleurs
- **Unicode** : Support des caractères internationaux et emojis
- **Redimensionnement** : Adaptation automatique à la taille de l'écran
- **Défilement** : Historique de défilement configurable
- **Sélection de texte** : Copiez du texte en sélectionnant

### Connexion

- **SSH-2** : Protocole SSH version 2
- **Authentification par mot de passe**
- **Authentification par clé SSH**
- **Authentification par clé + passphrase**
- **Authentification 2FA** (TOTP)
- **Jump hosts** : Connexion via un serveur intermédiaire

### Interface

- **Clavier adaptatif** : Touches spéciales pour le terminal
- **Gestes tactiles** : Zoom, défilement, sélection
- **Mode plein écran** : Maximisez l'espace de travail
- **Onglets multiples** : Gérez plusieurs sessions

## Utilisation

### Se connecter à un serveur

1. Depuis l'écran d'accueil, appuyez sur un serveur
2. Sélectionnez **Terminal SSH**
3. Attendez l'établissement de la connexion
4. Le terminal s'affiche avec l'invite de commande

### Créer une nouvelle connexion

1. Appuyez sur **+** pour ajouter un serveur
2. Remplissez les informations :
   - **Nom** : Nom d'affichage
   - **Hôte** : Adresse IP ou nom de domaine
   - **Port** : 22 par défaut
   - **Utilisateur** : Nom d'utilisateur SSH
   - **Authentification** : Mot de passe ou clé SSH
3. Appuyez sur **Enregistrer**
4. Appuyez sur le serveur pour vous connecter

### Exécuter des commandes

- Tapez votre commande et appuyez sur **Entrée**
- Utilisez les touches fléchées pour naviguer dans l'historique
- Utilisez **Tab** pour l'auto-complétion

### Copier/Coller

- **Copier** : Sélectionnez le texte avec un appui long, puis **Copier**
- **Coller** : Appui long dans le terminal, puis **Coller**
- Ou utilisez les raccourcis Ctrl+Shift+C / Ctrl+Shift+V

## Paramètres du terminal

### Apparence

| Paramètre | Description |
|-----------|-------------|
| **Thème** | Couleurs du terminal (sombre, clair, personnalisé) |
| **Police** | Type et taille de police |
| **Taille de police** | Ajustez la lisibilité |
| **Curseur** | Style (bloc, ligne, soulignement) |
| **Clignotement du curseur** | Activer/désactiver |

### Comportement

| Paramètre | Description |
|-----------|-------------|
| **Historique de défilement** | Nombre de lignes conservées |
| **Bell** | Son ou vibration pour les alertes |
| **Copie automatique** | Copier la sélection automatiquement |
| **Coller au clic droit** | Coller avec clic droit/appui long |

### Connexion

| Paramètre | Description |
|-----------|-------------|
| **Keepalive** | Intervalle des paquets keepalive |
| **Timeout** | Délai de connexion |
| **Compression** | Activer la compression des données |
| **Agent forwarding** | Transférer l'agent SSH |

## Clavier du terminal

Marix propose un clavier amélioré avec des touches spéciales :

| Touche | Fonction |
|--------|----------|
| **Ctrl** | Touche Control |
| **Alt** | Touche Alt/Meta |
| **Échap** | Touche Escape |
| **Tab** | Tabulation |
| **Flèches** | Navigation |
| **Fn** | Touches de fonction F1-F12 |

### Personnaliser le clavier

1. Ouvrez **Paramètres** > **Clavier**
2. Ajoutez ou supprimez des touches
3. Réorganisez l'ordre des touches
4. Enregistrez vos modifications

## Sessions multiples

### Onglets

- Ouvrez plusieurs connexions dans des onglets
- Balayez pour changer d'onglet
- Appuyez longuement pour fermer un onglet

### Disposition

- **Plein écran** : Un terminal en plein écran
- **Écran partagé** : Deux terminaux côte à côte (tablettes)

## Transfert de port

Vous pouvez configurer des tunnels SSH pour rediriger des ports :

### Port forwarding local

Redirige un port local vers le serveur distant.

### Port forwarding distant

Redirige un port du serveur vers votre appareil.

Voir [Transfert de port](port-forwarding.md) pour plus de détails.

## Dépannage

### Connexion refusée

- Vérifiez l'adresse IP et le port
- Vérifiez que SSH est activé sur le serveur
- Vérifiez les règles du pare-feu

### Timeout de connexion

- Vérifiez votre connexion réseau
- Augmentez le délai de timeout dans les paramètres
- Essayez avec un VPN si le réseau est restreint

### Authentification échouée

- Vérifiez le nom d'utilisateur et le mot de passe
- Vérifiez que la clé SSH est correcte
- Consultez les logs du serveur : /var/log/auth.log

### Affichage incorrect

- Vérifiez le type de terminal (xterm-256color)
- Ajustez la taille de police
- Vérifiez l'encodage des caractères

## Raccourcis clavier

| Raccourci | Action |
|-----------|--------|
| Ctrl+C | Interrompre |
| Ctrl+D | Déconnexion |
| Ctrl+L | Effacer l'écran |
| Ctrl+Z | Suspendre |
| Ctrl+R | Recherche historique |
| Ctrl+Shift+C | Copier |
| Ctrl+Shift+V | Coller |

## Voir aussi

- [Clés SSH](ssh-keys.md)
- [SFTP](sftp.md)
- [Transfert de port](port-forwarding.md)
- [Snippets](snippets.md)
- [Raccourcis](shortcuts.md)
