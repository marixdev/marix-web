# Redirection de ports (Tunnels SSH)

Les tunnels SSH acheminent le trafic de manière sécurisée via une connexion SSH.

## Interface de redirection de ports

![Interface de redirection de ports](/portfoward.png)

## Types de redirection de ports

| Type | Direction | Cas d'utilisation |
|------|-----------|-------------------|
| **Local** | Distant → Local | Accéder à un service distant via un port local |
| **Distant** | Local → Distant | Exposer un service local au réseau distant |
| **Dynamique** | Proxy SOCKS | Créer un proxy SOCKS via SSH |

## Ouvrir la redirection de ports

Cliquez sur **« Redirection de ports »** dans la barre latérale.

## Créer une redirection de ports

### Étape 1 : Ouvrir la boîte de dialogue
Cliquez sur le bouton **« Ajouter une redirection »**

### Étape 2 : Configurer

| Champ | Description | Exemple |
|-------|-------------|---------|
| Nom | Nom descriptif | « MySQL vers localhost » |
| Type | Local, Distant ou Dynamique | Local |
| Serveur | Serveur SSH pour le tunnel | Mon VPS |
| Hôte local | Adresse de liaison locale | 127.0.0.1 |
| Port local | Numéro de port local | 3307 |
| Hôte distant | Destination distante | 127.0.0.1 |
| Port distant | Port distant | 3306 |

### Étape 3 : Enregistrer
Cliquez sur **« Ajouter »** ou **« Enregistrer »**

## Exemples de cas d'utilisation

### Redirection locale : Accéder à MySQL distant

Accédez à la base de données MySQL de votre serveur depuis votre machine locale :

| Paramètre | Valeur |
|-----------|--------|
| Type | Local |
| Local | 127.0.0.1:3307 |
| Distant | 127.0.0.1:3306 |

**Utilisation :** Connectez-vous à `localhost:3307` pour atteindre MySQL du serveur.

### Redirection distante : Exposer une application locale

Permettre au serveur d'accéder à votre serveur de développement local :

| Paramètre | Valeur |
|-----------|--------|
| Type | Distant |
| Local | 127.0.0.1:3000 |
| Distant | 0.0.0.0:8080 |

**Utilisation :** Le port 8080 du serveur se connecte à votre localhost:3000.

### Dynamique : Proxy SOCKS

Créer un proxy SOCKS5 pour naviguer via le serveur :

| Paramètre | Valeur |
|-----------|--------|
| Type | Dynamique |
| Local | 127.0.0.1:1080 |

**Utilisation :** Configurez les applications pour utiliser le proxy SOCKS5 à `localhost:1080`.

## Gérer les redirections de ports

### Démarrer
1. Trouvez la redirection dans la liste
2. Cliquez sur le bouton **Démarrer** (▶)
3. Le statut passe à « Connecté »

### Arrêter
1. Trouvez la redirection en cours
2. Cliquez sur le bouton **Arrêter** (■)
3. Le statut passe à « Déconnecté »

### Modifier
1. **Arrêtez** la redirection si elle est en cours
2. Cliquez sur le bouton **Modifier** (crayon)
3. Modifiez les paramètres
4. Cliquez sur **Enregistrer**

### Supprimer
1. Arrêtez la redirection si elle est en cours
2. Cliquez sur le bouton **Supprimer** (corbeille)
3. Confirmez la suppression

## Surveiller le statut

La liste affiche :
- **Indicateur de statut** : Vert = connecté, Rouge = erreur
- **Nombre de connexions** : Connexions actives
- **Octets transférés** : Trafic entrant/sortant

## Cas d'utilisation courants

| Service | Port local | Port distant | Type |
|---------|------------|--------------|------|
| MySQL | 3307 | 3306 | Local |
| PostgreSQL | 5433 | 5432 | Local |
| Redis | 6380 | 6379 | Local |
| MongoDB | 27018 | 27017 | Local |
| Application Web | 8080 | 80 | Local |
| Jupyter | 8889 | 8888 | Local |

## Dépannage

### Port déjà utilisé
- Choisissez un port local différent
- Vérifiez si une autre application utilise ce port
- Arrêtez les services en conflit

### Connexion refusée
- Vérifiez que le service distant est en cours d'exécution
- Vérifiez le pare-feu du serveur
- Assurez-vous que l'hôte/port distant est correct

### Le tunnel se déconnecte
- Vérifiez la stabilité de la connexion SSH
- Le serveur peut avoir des paramètres de timeout
- Envisagez d'utiliser keep-alive
