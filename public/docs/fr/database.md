# Client de base de données

Marix inclut un client de base de données intégré pour se connecter et gérer les serveurs de bases de données directement depuis l'application.

## Interface du client de base de données

![Interface du client de base de données](/database.png)

---

## Bases de données supportées

| Base de données | Protocole | Fonctionnalités |
|-----------------|-----------|-----------------|
| **MySQL / MariaDB** | `mysql` | Éditeur de requêtes, navigateur de tables, visualiseur de données, inspecteur de structure |
| **PostgreSQL** | `postgresql` | Éditeur de requêtes, navigateur de tables, visualiseur de données, inspecteur de structure |
| **MongoDB** | `mongodb` | Navigateur de collections, visualiseur de documents, interface de requêtes |
| **Redis** | `redis` | Navigateur clé-valeur, interface de commandes |
| **SQLite** | `sqlite` | Support de fichiers locaux, éditeur SQL complet |

---

## Ajouter un serveur de base de données

1. Cliquez sur le bouton **+ Ajouter** dans la barre latérale
2. Sélectionnez l'onglet **Base de données** (ou l'icône de base de données)
3. Choisissez votre type de base de données

### MySQL / MariaDB / PostgreSQL

| Champ | Description | Exemple |
|-------|-------------|---------|
| Nom | Nom d'affichage | `Production MySQL` |
| Hôte | Nom d'hôte ou IP du serveur | `db.example.com` |
| Port | Port de la base de données | `3306` (MySQL) / `5432` (PostgreSQL) |
| Nom d'utilisateur | Utilisateur de la base de données | `root` |
| Mot de passe | Mot de passe de l'utilisateur | `••••••••` |
| Base de données | Base de données par défaut (optionnel) | `myapp_production` |
| SSL | Activer SSL/TLS | ☑️ Activé |

### MongoDB

| Champ | Description | Exemple |
|-------|-------------|---------|
| Nom | Nom d'affichage | `MongoDB Atlas` |
| Chaîne de connexion | URI MongoDB complète | `mongodb+srv://user:pass@cluster.mongodb.net/` |
| Hôte | Nom d'hôte du serveur | `localhost` |
| Port | Port MongoDB | `27017` |
| Base de données | Base de données par défaut | `myapp` |

### Redis

| Champ | Description | Exemple |
|-------|-------------|---------|
| Nom | Nom d'affichage | `Redis Cache` |
| Hôte | Nom d'hôte du serveur | `redis.example.com` |
| Port | Port Redis | `6379` |
| Mot de passe | Mot de passe d'authentification (optionnel) | `••••••••` |
| Base de données | Numéro de base de données | `0` |

### SQLite

| Champ | Description | Exemple |
|-------|-------------|---------|
| Nom | Nom d'affichage | `SQLite local` |
| Chemin du fichier | Chemin vers le fichier .db | `/home/user/app.db` |

---

## Interface du client de base de données

### 📊 Onglet Données

Parcourez et visualisez les données des tables :

- **Sélectionnez la base de données** dans le menu déroulant (s'il y en a plusieurs)
- **Cliquez sur une table** dans la barre latérale pour voir ses données
- **Pagination** - Naviguez dans les lignes (100 par page par défaut)
- **Tri des colonnes** - Cliquez sur les en-têtes de colonnes pour trier
- **Filtre rapide** - Recherchez dans les données affichées

### ⚡ Onglet Requête

Écrivez et exécutez des requêtes SQL avec :

- **Coloration syntaxique** - Mots-clés SQL, chaînes, nombres
- **Exécuter** - Lancez la requête avec `Ctrl+Entrée` ou le bouton Exécuter
- **Grille de résultats** - Visualisez les résultats dans un tableau
- **Exporter** - Téléchargez les résultats en CSV ou JSON
- **Temps d'exécution** - Voyez combien de temps les requêtes prennent

### 🏗️ Onglet Structure

Inspectez les schémas de tables affichant :

- Noms des colonnes et types de données
- Clés primaires, clés étrangères, contraintes uniques
- Colonnes nullables et valeurs par défaut
- Paramètres d'auto-incrémentation

### 🔗 Onglet ERD

Visualisez le diagramme entité-relation :

- Représentation visuelle des tables et relations
- Connexions de clés étrangères affichées comme des lignes
- Glissez et zoomez pour naviguer dans les grands schémas
- Exportez en image (PNG)

---

## Raccourcis clavier

| Raccourci | Action |
|-----------|--------|
| `Ctrl/Cmd + Entrée` | Exécuter la requête |
| `Ctrl/Cmd + S` | Enregistrer la requête dans un fichier |
| `Ctrl/Cmd + O` | Ouvrir une requête depuis un fichier |
| `Ctrl/Cmd + Shift + F` | Formater le SQL |
| `Échap` | Annuler la requête en cours |

---

## Sécurité de la connexion

### Chiffrement SSL/TLS

Activez la case **SSL** lors de l'ajout du serveur. Pour les certificats personnalisés :

- Chemin du certificat CA
- Chemin du certificat client (optionnel)
- Chemin de la clé client (optionnel)

### Tunnel SSH

Connectez-vous via un tunnel SSH :

1. Ajoutez d'abord un serveur SSH dans Marix
2. Lors de l'ajout de la base de données, activez **Tunnel SSH**
3. Sélectionnez le serveur SSH par lequel tunneliser

---

## Bonnes pratiques

1. **Utilisez des comptes en lecture seule** - Créez des utilisateurs de base de données avec des permissions limitées
2. **Limitez les ensembles de résultats** - Utilisez toujours `LIMIT` pour éviter de charger trop de données
3. **Testez avant d'exécuter** - Pour `UPDATE` ou `DELETE`, exécutez d'abord un `SELECT`
4. **Utilisez les transactions** - Pour les opérations critiques, encadrez-les dans des transactions
