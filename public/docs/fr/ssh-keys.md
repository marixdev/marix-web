# Gestionnaire de clés SSH

Marix inclut un **gestionnaire de clés SSH** complet qui vous permet de créer, importer, gérer et utiliser des clés SSH pour l'authentification sécurisée sur vos serveurs.

## Interface du gestionnaire de clés

![Interface du gestionnaire de clés SSH](/ssh-key.png)

## Fonctionnalités

- **Génération de clés** : Créez des paires de clés SSH (RSA, Ed25519, ECDSA)
- **Importation de clés** : Importez des clés existantes depuis des fichiers
- **Gestion des clés** : Organisez et gérez vos clés SSH
- **Association aux serveurs** : Liez des clés spécifiques à des serveurs
- **Support des passphrases** : Protection par mot de passe des clés privées
- **Export de clés** : Exportez des clés pour les utiliser ailleurs

## Types de clés supportés

| Type | Description | Recommandation |
|------|-------------|----------------|
| **Ed25519** | Moderne, compact, très sécurisé | ✅ Recommandé |
| **RSA** | Classique, largement compatible | ✅ 4096 bits minimum |
| **ECDSA** | Courbes elliptiques, compact | ⚠️ Selon le serveur |

## Utilisation

### Accéder au gestionnaire de clés

1. Ouvrez **Paramètres** > **Clés SSH**
2. Ou depuis l'écran d'accueil, appuyez sur **Clés**

### Générer une nouvelle clé

1. Appuyez sur **+** ou **Nouvelle clé**
2. Choisissez le type de clé :
   - **Ed25519** (recommandé)
   - **RSA** (4096 bits)
   - **ECDSA**
3. Entrez un **nom** pour identifier la clé
4. (Optionnel) Entrez une **passphrase** pour protéger la clé
5. Appuyez sur **Générer**

### Importer une clé existante

1. Appuyez sur **Importer**
2. Sélectionnez le fichier de clé privée (ex: `id_rsa`, `id_ed25519`)
3. Entrez la passphrase si la clé est protégée
4. Donnez un nom à la clé
5. Appuyez sur **Importer**

### Exporter la clé publique

1. Sélectionnez une clé dans la liste
2. Appuyez sur **Copier la clé publique**
3. La clé est copiée dans le presse-papiers
4. Collez-la dans le fichier ~/.ssh/authorized_keys du serveur

### Associer une clé à un serveur

1. Modifiez un serveur existant ou créez-en un nouveau
2. Dans la section **Authentification**, sélectionnez **Clé SSH**
3. Choisissez la clé à utiliser dans la liste
4. Enregistrez les modifications

### Supprimer une clé

1. Appuyez longuement sur la clé à supprimer
2. Sélectionnez **Supprimer**
3. Confirmez la suppression

## Configuration du serveur

### Ajouter votre clé publique au serveur

\`\`\`bash
# Copier la clé publique vers le serveur
ssh-copy-id -i ~/.ssh/id_ed25519.pub utilisateur@serveur

# Ou manuellement - ajoutez votre clé publique au fichier authorized_keys
# puis définissez les permissions appropriées
chmod 600 ~/.ssh/authorized_keys
\`\`\`

### Vérifier les permissions

\`\`\`bash
# Dossier .ssh
chmod 700 ~/.ssh

# Fichier authorized_keys
chmod 600 ~/.ssh/authorized_keys

# Clé privée (sur votre appareil)
chmod 600 ~/.ssh/id_ed25519
\`\`\`

## Sécurité des clés

### Bonnes pratiques

- ✅ **Utilisez Ed25519** pour les nouvelles clés
- ✅ **Protégez avec une passphrase** les clés sensibles
- ✅ **Une clé par usage** : séparez les clés personnelles et professionnelles
- ✅ **Révoquez les clés compromises** immédiatement
- ❌ **Ne partagez jamais** votre clé privée

### Passphrase

| Avec passphrase | Sans passphrase |
|-----------------|-----------------|
| Plus sécurisé | Plus pratique |
| Demandée à chaque connexion | Connexion automatique |
| Protection si appareil volé | Risque si appareil compromis |

## Conversion de clés

### Formats supportés

- **OpenSSH** : Format standard Linux/macOS
- **PuTTY (PPK)** : Format Windows PuTTY
- **PKCS#8** : Format standard cryptographique

### Convertir une clé PuTTY

Si vous avez une clé au format PuTTY (.ppk), utilisez puttygen pour la convertir :

\`\`\`bash
# Sur le serveur ou un ordinateur avec puttygen
puttygen cle.ppk -O private-openssh -o id_rsa
\`\`\`

## Dépannage

### Clé refusée par le serveur

1. Vérifiez que la clé publique est dans authorized_keys
2. Vérifiez les permissions (700 pour .ssh, 600 pour authorized_keys)
3. Vérifiez les logs du serveur : tail -f /var/log/auth.log

### Passphrase incorrecte

- Réessayez en vérifiant la casse et les caractères spéciaux
- Si oubliée, vous devrez régénérer une nouvelle clé

### Clé non reconnue

- Assurez-vous d'importer le bon format de clé
- Les clés RSA anciennes peuvent nécessiter une conversion

## Sauvegarde des clés

Les clés SSH sont incluses dans les sauvegardes Marix :

- ✅ **Sauvegarde locale** (recommandée)
- ✅ **Google Drive** (chiffré)
- ✅ **Box** (chiffré)
- ⚠️ Activez le chiffrement pour protéger vos clés

## Raccourcis

| Action | Raccourci |
|--------|-----------|
| Nouvelle clé | Ctrl+N |
| Importer | Ctrl+I |
| Copier clé publique | Ctrl+C |
| Supprimer | Suppr |

## Voir aussi

- [Terminal SSH](ssh-terminal.md)
- [Hôtes connus](known-hosts.md)
- [Sauvegarde](backup.md)
- [Authentification 2FA](2fa.md)
