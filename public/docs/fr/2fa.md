# Authentification à deux facteurs (2FA/TOTP)

Générateur de codes TOTP intégré, comme Google Authenticator. Stockez vos secrets 2FA et obtenez des codes sans avoir besoin de votre téléphone.

## Interface 2FA

![Interface 2FA](/2fa.png)

## Ouvrir 2FA

Cliquez sur **« 2FA »** dans la barre latérale.

## Ajouter un nouveau compte 2FA

### Étape 1 : Ouvrir la boîte de dialogue
Cliquez sur le bouton **« Ajouter un compte »**

### Étape 2 : Entrer les détails

| Champ | Description | Requis |
|-------|-------------|--------|
| Nom du compte | Libellé pour ce compte (ex : « GitHub », « AWS ») | Non (nommé automatiquement) |
| Clé secrète | Le secret TOTP (depuis la page de configuration du QR code) | Oui |

### Étape 3 : Enregistrer
Cliquez sur **« Ajouter »**

## Comment obtenir la clé secrète

Lors de l'activation de la 2FA sur un site web :

1. Cherchez **« Impossible de scanner le QR code ? »** ou **« Saisie manuelle »**
2. Copiez la clé secrète (généralement des lettres majuscules et des chiffres)
3. Collez-la dans Marix

Exemple de format de clé secrète :
```
JBSWY3DPEHPK3PXP
```

## Utiliser les codes 2FA

1. Trouvez votre compte dans la liste
2. Le code à 6 chiffres s'affiche à côté
3. Un compte à rebours indique les secondes avant le rafraîchissement du code
4. Cliquez sur le bouton **Copier** pour copier le code dans le presse-papiers

### Minuteur
- Les codes se rafraîchissent toutes les **30 secondes**
- Un indicateur de progression circulaire montre le temps restant
- Attendez un nouveau code si l'actuel est sur le point d'expirer

## Modifier le nom du compte

1. Cliquez sur le bouton **Modifier** à côté du compte
2. Entrez le nouveau nom
3. Appuyez sur Entrée ou cliquez sur Enregistrer

## Supprimer un compte 2FA

1. Cliquez sur le bouton **Supprimer** (icône de corbeille)
2. Confirmez la suppression

> ⚠️ **Attention :** La suppression efface le secret. Assurez-vous d'avoir un accès de secours au compte associé avant de supprimer.

## Services courants

Voici quelques services populaires qui prennent en charge TOTP :

| Service | Emplacement des paramètres 2FA |
|---------|-------------------------------|
| GitHub | Paramètres → Mot de passe et authentification |
| AWS | IAM → Informations d'identification de sécurité |
| Google | Compte Google → Sécurité |
| Microsoft | Paramètres de sécurité → Vérification en deux étapes |
| Cloudflare | Profil → Authentification |
| DigitalOcean | Compte → Sécurité |
| Linode | Mon profil → Mot de passe et authentification |

## Bonnes pratiques

1. **Sauvegardez vos secrets** - Stockez les clés secrètes en lieu sûr
2. **Conservez les codes de récupération** - Enregistrez les codes de secours fournis par les services
3. **Utilisez des noms descriptifs** - Facile à identifier rapidement les comptes
4. **Testez les codes avant de vous y fier** - Vérifiez qu'ils fonctionnent immédiatement après les avoir ajoutés
5. **Synchronisation horaire** - Assurez-vous que l'horloge de votre ordinateur est précise

## Dépannage

### Les codes ne fonctionnent pas

1. **Vérifiez la synchronisation horaire** - L'horloge de votre ordinateur doit être précise
2. **Vérifiez la clé secrète** - Ressaisissez-la si elle a été mal copiée
3. **Attendez le prochain code** - Le code actuel peut être en train d'expirer

### Perte d'accès

Si vous perdez l'accès à Marix :
1. Utilisez les **codes de récupération** fournis par le service
2. Contactez le support du service pour récupérer le compte
