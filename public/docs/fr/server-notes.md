# Notes serveur (Pense-bêtes)

Marix propose une fonctionnalité de **notes serveur** qui vous permet d'attacher des notes personnelles à chaque serveur. C'est utile pour documenter les configurations de serveurs, les rappels de maintenance ou les informations de référence rapide.

## Interface des notes serveur

![Interface des notes serveur](/note.png)

## Fonctionnalités

- **Notes par serveur** : Chaque serveur peut avoir ses propres notes
- **Enregistrement automatique** : Les modifications sont automatiquement enregistrées lors de la saisie (délai de 500ms)
- **Support de texte enrichi** : Texte brut avec sauts de ligne
- **Indicateur visuel** : Les serveurs avec des notes affichent une icône de note remplie
- **Synchronisé avec les données du serveur** : Les notes sont incluses dans les sauvegardes de serveurs

## Utilisation

### Ouvrir les notes

1. Connectez-vous à un serveur (terminal SSH ou SFTP)
2. Cliquez sur le bouton **Notes** dans la barre d'outils supérieure (icône de crayon)
3. Un popup de pense-bête apparaît dans le coin inférieur droit

### Écrire des notes

- Tapez simplement dans la zone de texte
- Les notes sont **enregistrées automatiquement** après 500ms d'inactivité
- L'indicateur « Enregistrement... » s'affiche lorsqu'un enregistrement est en cours
- Appuyez sur `Échap` ou cliquez en dehors pour fermer

### Indicateurs visuels

| État de l'icône | Signification |
|-----------------|---------------|
| Contour (vide) | Pas de notes pour ce serveur |
| Remplie (solide) | Le serveur a des notes |
| Couleur ambre/jaune | Des notes existent |

## Cas d'utilisation

### Configuration du serveur

```
Serveur Web - Production
------------------------
IP : 192.168.1.100
Nginx : /etc/nginx/sites-enabled/
Logs : /var/log/nginx/
Certificat SSL expire : 2026-12-15
```

### Rappels de maintenance

```
À FAIRE :
- [ ] Mettre à jour OpenSSL (CVE-2025-XXXX)
- [ ] Rotation des identifiants de base de données
- [ ] Augmenter le swap à 4 Go
```

### Référence rapide

```
Commandes courantes :
- Redémarrer Nginx : sudo systemctl restart nginx
- Vérifier le disque : df -h
- Voir les connexions : netstat -tuln

Base de données :
- Utilisateur : app_user
- Port : 5432
```

## Stockage des données

- Les notes sont stockées dans la configuration du serveur
- ✅ **Incluses dans les sauvegardes locales** (fonctionnalité de sauvegarde Marix)
- ✅ **Incluses dans les sauvegardes cloud** (Google Drive, Box)
- ✅ **Chiffrées** lors de l'utilisation du chiffrement de sauvegarde

## Raccourcis clavier

| Touche | Action |
|--------|--------|
| `Échap` | Fermer le popup de note |
| Clic en dehors | Fermer le popup de note |

## FAQ

### Les notes sont-elles chiffrées ?

Les notes sont stockées en texte brut dans le fichier de configuration du serveur. Lorsque vous créez une sauvegarde chiffrée, les notes sont chiffrées avec toutes les données du serveur.

### Puis-je utiliser Markdown ?

Les notes sont actuellement en texte brut uniquement. Le rendu Markdown pourrait être ajouté dans une future version.

### Y a-t-il une limite de caractères ?

Il n'y a pas de limite stricte de caractères. Les notes très longues peuvent affecter les performances.
