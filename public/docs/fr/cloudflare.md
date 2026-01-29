# Gestionnaire DNS Cloudflare

Gérez vos enregistrements DNS Cloudflare directement depuis Marix.

## Interface du gestionnaire DNS Cloudflare

![Interface du gestionnaire DNS Cloudflare](/cf.png)

## Configuration

### Étape 1 : Obtenir le jeton API

1. Allez sur le [tableau de bord Cloudflare](https://dash.cloudflare.com)
2. Naviguez vers Profil → Jetons API
3. Cliquez sur « Créer un jeton »
4. Utilisez le modèle « Modifier la zone DNS » ou créez un jeton personnalisé avec :
   - Zone.DNS : Modifier
   - Zone.Zone : Lire
5. Copiez le jeton

### Étape 2 : Configurer dans Marix

1. Allez dans **Paramètres** dans la barre latérale
2. Trouvez la section **« Jeton API Cloudflare »**
3. Cliquez sur **« Ajouter un jeton »**
4. Collez votre jeton
5. Cliquez sur **« Enregistrer »**

## Utiliser le DNS Cloudflare

1. Cliquez sur **« Cloudflare »** dans la barre latérale
2. Vos domaines se chargent dans un menu déroulant
3. Sélectionnez un domaine
4. Les enregistrements DNS de ce domaine apparaissent

## Afficher les enregistrements DNS

Le tableau affiche :

| Colonne | Description |
|---------|-------------|
| Type | Type d'enregistrement (A, AAAA, CNAME, MX, TXT, etc.) |
| Nom | Nom de l'enregistrement/sous-domaine |
| Contenu | Valeur de l'enregistrement (IP, nom d'hôte, texte) |
| TTL | Durée de vie (Auto ou en secondes) |
| Proxy | Proxifié via Cloudflare ou DNS uniquement |

## Ajouter un enregistrement DNS

### Étape 1 : Ouvrir la boîte de dialogue
Cliquez sur le bouton **« Ajouter un enregistrement »**

### Étape 2 : Remplir les détails

| Champ | Description |
|-------|-------------|
| Type | Sélectionnez : A, AAAA, CNAME, MX, TXT, SRV, etc. |
| Nom | Sous-domaine (ex : « www ») ou « @ » pour la racine |
| Contenu | La valeur (IP pour A, nom d'hôte pour CNAME, etc.) |
| TTL | Durée de vie : Auto ou secondes personnalisées |
| Proxy | Activer/désactiver : Proxifié (nuage orange) ou DNS uniquement (gris) |
| Commentaire | Note optionnelle |

### Étape 3 : Créer
Cliquez sur **« Créer »**

## Types d'enregistrements courants

### Enregistrement A
Pointe un domaine vers une adresse IPv4.

| Champ | Exemple |
|-------|---------|
| Type | A |
| Nom | @ (ou www) |
| Contenu | 192.168.1.100 |

### Enregistrement AAAA
Pointe un domaine vers une adresse IPv6.

| Champ | Exemple |
|-------|---------|
| Type | AAAA |
| Nom | @ |
| Contenu | 2001:db8::1 |

### Enregistrement CNAME
Crée un alias vers un autre domaine.

| Champ | Exemple |
|-------|---------|
| Type | CNAME |
| Nom | www |
| Contenu | example.com |

### Enregistrement MX
Spécifie les serveurs de messagerie.

| Champ | Exemple |
|-------|---------|
| Type | MX |
| Nom | @ |
| Contenu | mail.example.com |
| Priorité | 10 |

### Enregistrement TXT
Stocke des données textuelles (SPF, DKIM, vérification).

| Champ | Exemple |
|-------|---------|
| Type | TXT |
| Nom | @ |
| Contenu | v=spf1 include:_spf.google.com ~all |

## Modifier un enregistrement DNS

1. Trouvez l'enregistrement dans le tableau
2. Cliquez sur le bouton **Modifier** (icône de crayon)
3. Modifiez les champs
4. Cliquez sur **« Enregistrer »**

## Supprimer un enregistrement DNS

1. Trouvez l'enregistrement
2. Cliquez sur le bouton **Supprimer** (icône de corbeille)
3. Confirmez la suppression

## Statut du proxy

| Icône | Statut | Effet |
|-------|--------|-------|
| 🟠 Nuage orange | Proxifié | Le trafic passe par le CDN Cloudflare |
| ⚪ Nuage gris | DNS uniquement | Connexion directe à l'origine |

### Quand utiliser le proxy

**Proxifié (Orange) :**
- Serveurs web (HTTP/HTTPS)
- Voulez une protection DDoS
- Voulez la mise en cache CDN

**DNS uniquement (Gris) :**
- Serveurs SSH, FTP, mail
- Services non-HTTP
- Besoin d'une connexion IP directe

## Rafraîchir les enregistrements

Cliquez sur le bouton **Rafraîchir** à côté du menu déroulant des domaines pour recharger les enregistrements.

## Conseils

- **TTL Auto** est recommandé dans la plupart des cas
- **Testez les modifications** en utilisant des outils de recherche DNS
- **Sauvegardez les enregistrements** avant d'effectuer des modifications majeures
- La **propagation** peut prendre jusqu'à 48 heures à l'échelle mondiale
