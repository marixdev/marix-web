# Snippets de commandes

Marix propose une fonctionnalité de **snippets** qui vous permet d'enregistrer et de réutiliser des commandes fréquemment utilisées. C'est idéal pour les commandes longues ou complexes que vous exécutez régulièrement.

## Interface des snippets

![Interface des snippets](/snippet.png)

## Fonctionnalités

- **Bibliothèque de commandes** : Stockez des commandes fréquemment utilisées
- **Organisation par catégories** : Groupez les snippets par type ou projet
- **Exécution rapide** : Exécutez des snippets en un seul tap
- **Variables** : Support des variables dynamiques dans les snippets
- **Synchronisation** : Synchronisez les snippets via la sauvegarde cloud

## Utilisation

### Accéder aux snippets

1. Dans le terminal SSH, appuyez sur l'icône **Snippets** (icône de code)
2. Ou utilisez le raccourci `Ctrl+Shift+S`
3. La liste des snippets s'affiche

### Créer un snippet

1. Appuyez sur le bouton **+** ou **Nouveau snippet**
2. Remplissez les champs :
   - **Nom** : Un nom descriptif pour le snippet
   - **Commande** : La commande à enregistrer
   - **Catégorie** : (Optionnel) Pour organiser vos snippets
   - **Description** : (Optionnel) Notes sur l'utilisation
3. Appuyez sur **Enregistrer**

### Exécuter un snippet

1. Ouvrez la liste des snippets
2. Appuyez sur le snippet à exécuter
3. La commande est insérée dans le terminal
4. Appuyez sur **Entrée** pour exécuter

### Modifier un snippet

1. Appuyez longuement sur un snippet
2. Sélectionnez **Modifier**
3. Apportez vos modifications
4. Appuyez sur **Enregistrer**

### Supprimer un snippet

1. Appuyez longuement sur un snippet
2. Sélectionnez **Supprimer**
3. Confirmez la suppression

## Variables

Les snippets peuvent inclure des variables qui seront remplacées lors de l'exécution.

### Syntaxe des variables

| Variable | Description |
|----------|-------------|
| `${1}`, `${2}`, etc. | Variables numérotées (demandées à l'utilisateur) |
| `${nom}` | Variable nommée (demandée à l'utilisateur) |
| `${date}` | Date actuelle |
| `${time}` | Heure actuelle |
| `${host}` | Nom d'hôte du serveur connecté |
| `${user}` | Nom d'utilisateur actuel |

### Exemples avec variables

**Connexion à une base de données** :
```bash
mysql -u ${utilisateur} -p ${base_de_donnees}
```

**Sauvegarde avec horodatage** :
```bash
tar -czvf backup_${date}.tar.gz /chemin/vers/dossier
```

**Recherche de fichiers** :
```bash
find ${chemin} -name "${motif}" -type f
```

## Organisation

### Catégories suggérées

- **Système** : Commandes de gestion système
- **Base de données** : Commandes MySQL, PostgreSQL, etc.
- **Git** : Commandes de contrôle de version
- **Docker** : Commandes de conteneurs
- **Réseau** : Commandes réseau et diagnostic
- **Logs** : Commandes de visualisation des logs

### Exemple de snippets par catégorie

**Système** :
```bash
# Espace disque
df -h

# Mémoire
free -m

# Processus gourmands
top -o %MEM

# Utilisateurs connectés
who
```

**Base de données** :
```bash
# Sauvegarde MySQL
mysqldump -u root -p --all-databases > backup.sql

# Restauration MySQL
mysql -u root -p < backup.sql

# Liste des bases
mysql -u root -p -e "SHOW DATABASES;"
```

**Docker** :
```bash
# Conteneurs en cours
docker ps

# Tous les conteneurs
docker ps -a

# Images
docker images

# Nettoyage
docker system prune -a
```

## Importation/Exportation

### Exporter des snippets

1. Ouvrez **Paramètres** > **Snippets**
2. Appuyez sur **Exporter**
3. Choisissez le format (JSON)
4. Enregistrez le fichier

### Importer des snippets

1. Ouvrez **Paramètres** > **Snippets**
2. Appuyez sur **Importer**
3. Sélectionnez le fichier JSON
4. Confirmez l'importation

## Raccourcis clavier

| Raccourci | Action |
|-----------|--------|
| `Ctrl+Shift+S` | Ouvrir les snippets |
| `Entrée` | Exécuter le snippet sélectionné |
| `Ctrl+N` | Nouveau snippet |
| `Ctrl+E` | Modifier le snippet |
| `Suppr` | Supprimer le snippet |
| `Échap` | Fermer les snippets |

## Synchronisation

Les snippets sont inclus dans les sauvegardes Marix :

- ✅ **Sauvegarde locale**
- ✅ **Google Drive**
- ✅ **Box**
- ✅ **Chiffrement** (si activé)

## Conseils

- Utilisez des noms descriptifs pour retrouver facilement vos snippets
- Ajoutez des commentaires dans les commandes longues
- Utilisez des variables pour les parties dynamiques
- Organisez par catégories pour une meilleure navigation
- Exportez régulièrement vos snippets comme sauvegarde

## Voir aussi

- [Terminal SSH](ssh-terminal.md)
- [Historique des commandes](command-history.md)
- [Sauvegarde](backup.md)
- [Raccourcis clavier](shortcuts.md)
