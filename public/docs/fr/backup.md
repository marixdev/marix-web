# Sauvegarde et restauration

Protégez vos données avec des sauvegardes chiffrées. Marix prend en charge 6 fournisseurs de sauvegarde, tous utilisant le chiffrement Argon2id.

> 💡 **Astuce :** Une fois que vous connectez un compte cloud pour la sauvegarde, vous n'avez pas besoin de vous reconnecter pour la restauration sur le même appareil. Votre authentification est enregistrée localement.

## Interface de sauvegarde et restauration

### Sauvegarde
![Interface de sauvegarde](/backup.png)

### Restauration
![Interface de restauration](/restore.png)

## Ce qui est sauvegardé

- Tous les serveurs et identifiants (mots de passe, clés privées)
- Clés SSH du trousseau
- Configurations de redirection de ports
- Secrets 2FA/TOTP
- Paramètres de l'application
- Jeton API Cloudflare

## Exigences du mot de passe

| Exigence | Description |
|----------|-------------|
| Longueur | Au moins 10 caractères |
| Majuscules | Inclure des lettres majuscules |
| Minuscules | Inclure des lettres minuscules |
| Chiffres | Inclure au moins un chiffre |
| Spéciaux | Inclure des caractères spéciaux |

> ⚠️ **Attention :** Nous ne pouvons pas récupérer votre mot de passe. Si vous l'oubliez, votre sauvegarde est définitivement inaccessible.

## Sauvegarde locale

Enregistrez un fichier de sauvegarde chiffré sur votre ordinateur.

### Créer une sauvegarde locale

1. Allez dans **Paramètres** → Cliquez sur **« Créer une sauvegarde »**
2. Sélectionnez l'onglet **Local** (icône de dossier)
3. Entrez un **mot de passe fort** (10+ caractères)
4. Confirmez le mot de passe
5. Cliquez sur **« Créer une sauvegarde »**
6. Choisissez où enregistrer le fichier `.marix`
7. Stockez ce fichier en lieu sûr

### Restaurer depuis une sauvegarde locale

1. Allez dans **Paramètres** → Cliquez sur **« Restaurer une sauvegarde »**
2. Sélectionnez l'onglet **Local**
3. Cliquez sur **« Sélectionner un fichier »** et choisissez votre fichier de sauvegarde `.marix`
4. Entrez le **mot de passe** utilisé lors de la création de la sauvegarde
5. Cliquez sur **« Restaurer »**
6. L'application redémarre avec toutes les données restaurées

## Google Drive

Synchronisez votre sauvegarde sur Google Drive.

### Connexion

1. Sélectionnez l'onglet **Google Drive**
2. Cliquez sur **« Connecter »**
3. Connectez-vous à votre compte Google
4. Accordez l'autorisation à Marix
5. Vous verrez « Connecté » avec votre email

### Créer une sauvegarde

1. Après la connexion, entrez un mot de passe fort
2. Confirmez le mot de passe
3. Cliquez sur **« Créer une sauvegarde »**
4. Le statut affiche : « Sauvegarde créée avec succès »

### Restauration

1. Si déjà connecté, votre compte est mémorisé
2. Si une sauvegarde existe, vous verrez « Dernière sauvegarde : [date] »
3. Entrez le mot de passe
4. Cliquez sur **« Restaurer »**

## GitHub

Stockez votre sauvegarde dans un Gist GitHub privé.

### Connexion

1. Sélectionnez l'onglet **GitHub**
2. Cliquez sur **« Connecter »**
3. Un **code d'appareil** apparaît (ex : `ABCD-1234`)
4. Allez sur : https://github.com/login/device
5. Entrez le code
6. Autorisez Marix

### Créer une sauvegarde

1. Entrez un mot de passe fort
2. Confirmez le mot de passe
3. Cliquez sur **« Créer une sauvegarde »**
4. La sauvegarde est stockée comme un Gist privé

### Restauration

1. Si déjà connecté, votre compte est mémorisé
2. Si une sauvegarde existe, vous verrez « Dernière sauvegarde : [date] »
3. Entrez le mot de passe
4. Cliquez sur **« Restaurer »**

### Où est ma sauvegarde ?

Allez sur https://gist.github.com → Vos gists privés → Cherchez « marix-backup »

## GitLab

Stockez votre sauvegarde dans un Snippet GitLab.

### Connexion

1. Sélectionnez l'onglet **GitLab**
2. Cliquez sur **« Connecter »**
3. Connectez-vous à GitLab
4. Autorisez Marix

### Créer une sauvegarde

1. Entrez un mot de passe fort
2. Confirmez le mot de passe
3. Cliquez sur **« Créer une sauvegarde »**
4. La sauvegarde est stockée comme un Snippet privé

### Restauration

1. Si déjà connecté, votre compte est mémorisé
2. Si une sauvegarde existe, vous verrez « Dernière sauvegarde : [date] »
3. Entrez le mot de passe
4. Cliquez sur **« Restaurer »**

## Box.net

Stockez votre sauvegarde dans le stockage cloud Box.

### Connexion

1. Sélectionnez l'onglet **Box.net**
2. Cliquez sur **« Se connecter à Box.net »**
3. Connectez-vous à votre compte Box.net
4. Autorisez Marix

### Créer une sauvegarde

1. Entrez un mot de passe fort
2. Confirmez le mot de passe
3. Cliquez sur **« Créer une sauvegarde »**

### Restauration

1. Si déjà connecté, votre compte est mémorisé
2. Si une sauvegarde existe, vous verrez « Dernière sauvegarde : [date] »
3. Entrez le mot de passe
4. Cliquez sur **« Restaurer »**

## OneDrive

Synchronisez votre sauvegarde sur Microsoft OneDrive.

### Connexion

1. Sélectionnez l'onglet **OneDrive**
2. Cliquez sur **« Connecter »**
3. Connectez-vous à votre compte Microsoft
4. Accordez l'autorisation à Marix
5. Vous verrez « Connecté » avec votre email

### Créer une sauvegarde

1. Après la connexion, entrez un mot de passe fort
2. Confirmez le mot de passe
3. Cliquez sur **« Créer une sauvegarde »**
4. Le statut affiche : « Sauvegarde créée avec succès »

### Restauration

1. Si déjà connecté, votre compte est mémorisé
2. Si une sauvegarde existe, vous verrez « Dernière sauvegarde : [date] »
3. Entrez le mot de passe
4. Cliquez sur **« Restaurer »**

## Comparaison des fournisseurs

| Fournisseur | Emplacement de stockage | Avantages | Inconvénients |
|-------------|------------------------|-----------|---------------|
| **Local** | Votre ordinateur | Contrôle total, hors ligne | Doit gérer le fichier manuellement |
| **Google Drive** | Cloud Google | Synchronisation automatique, largement utilisé | Nécessite un compte Google |
| **OneDrive** | Cloud Microsoft | Intégré à Windows | Nécessite un compte Microsoft |
| **GitHub** | GitHub Gist | Gratuit, contrôle de version | Nécessite un compte GitHub |
| **GitLab** | GitLab Snippet | Gratuit, option auto-hébergée | Nécessite un compte GitLab |
| **Box.net** | Cloud Box.net | Adapté aux entreprises | Nécessite un compte Box |

## Bonnes pratiques

1. **Utilisez des mots de passe différents** pour différents fournisseurs
2. **Stockez votre mot de passe** dans un gestionnaire de mots de passe
3. **Testez la restauration** périodiquement pour vous assurer que la sauvegarde fonctionne
4. **Gardez une sauvegarde locale** comme option secondaire
5. **Ne partagez pas** les fichiers de sauvegarde - ils contiennent des données sensibles
6. **Mettez à jour les sauvegardes** régulièrement après avoir ajouté de nouveaux serveurs
