# Hôtes connus

Les hôtes connus stockent les empreintes des serveurs pour détecter si l'identité d'un serveur change (problème de sécurité potentiel).

## Interface des hôtes connus

![Interface des hôtes connus](/knowhosts.png)

## Que sont les hôtes connus ?

Lorsque vous vous connectez pour la première fois à un serveur SSH, celui-ci présente son empreinte. Marix la stocke pour :
- Vérifier l'identité du serveur lors des connexions futures
- Détecter les attaques de l'homme du milieu
- Vous alerter si une clé de serveur change de manière inattendue

## Ouvrir les hôtes connus

Cliquez sur **« Hôtes connus »** dans la barre latérale.

## Afficher les hôtes connus

La liste affiche :

| Colonne | Description |
|---------|-------------|
| Hôte | Nom d'hôte/IP du serveur |
| Port | Port SSH |
| Type de clé | Algorithme de clé SSH (ED25519, RSA, ECDSA) |
| Empreinte | Identifiant unique du serveur |
| Ajouté | Date à laquelle l'hôte a été approuvé |

## Rechercher dans les hôtes connus

1. Utilisez la zone de recherche en haut
2. Recherchez par nom d'hôte, IP ou empreinte

## Filtrer par type de clé

1. Utilisez le filtre déroulant
2. Sélectionnez : Tous, ED25519, RSA ou ECDSA

## Importer un hôte depuis un serveur

Ajoutez manuellement l'empreinte d'un serveur sans vous y connecter :

1. Cliquez sur le bouton **« Importer depuis l'hôte »**
2. Entrez :
   - Nom d'hôte ou IP
   - Port (22 par défaut)
3. Cliquez sur **« Importer »**
4. L'empreinte du serveur est récupérée et stockée

## Supprimer un hôte connu

1. Trouvez l'hôte dans la liste
2. Cliquez sur le bouton **Supprimer** (icône de corbeille)
3. Confirmez la suppression

### Quand supprimer

- Le serveur a été réinstallé et a une nouvelle clé
- L'IP/le nom d'hôte du serveur a changé
- Vous ne vous connectez plus à ce serveur

## Vérification de la clé d'hôte

Lors de la connexion à un nouveau serveur :
1. Marix récupère l'empreinte du serveur
2. On vous demande de la vérifier et de l'approuver
3. Après acceptation, elle est stockée dans les hôtes connus
4. Les connexions futures sont vérifiées automatiquement

## Avertissements de sécurité

### « La clé d'hôte a changé »
Cet avertissement apparaît lorsque l'empreinte d'un serveur diffère de celle stockée.

**Causes possibles :**
- Le serveur a été réinstallé
- La clé SSH du serveur a été régénérée
- ⚠️ **Attaque de l'homme du milieu** (rare mais possible)

**Que faire :**
1. Vérifiez avec l'administrateur du serveur si la clé a changé légitimement
2. Si confirmé, supprimez l'ancienne entrée des hôtes connus
3. Reconnectez-vous et acceptez la nouvelle empreinte
4. En cas de doute, ne vous connectez pas

## Bonnes pratiques

1. **Vérifiez les empreintes** lors de la connexion à de nouveaux serveurs
2. **N'ignorez pas les avertissements** concernant les clés d'hôte modifiées
3. **Révisez régulièrement** votre liste d'hôtes connus
4. **Supprimez les anciennes entrées** pour les serveurs que vous n'utilisez plus
