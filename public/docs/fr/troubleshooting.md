# Dépannage

Ce guide vous aide à résoudre les problèmes courants que vous pourriez rencontrer lors de l'utilisation de Marix.

## Problèmes de connexion

### Impossible de se connecter au serveur

**Symptômes** : Message d'erreur « Connection refused » ou « Connection timeout »

**Solutions** :

1. **Vérifiez l'adresse du serveur**
   - Assurez-vous que l'IP ou le nom de domaine est correct
   - Vérifiez que le port est correct (22 par défaut pour SSH)

2. **Vérifiez la connectivité réseau**
   - Testez votre connexion Internet
   - Essayez de ping le serveur (si autorisé)
   - Vérifiez si un VPN est nécessaire

3. **Vérifiez le serveur**
   - Le service SSH est-il en cours d'exécution ?
   - Le pare-feu autorise-t-il les connexions SSH ?
   - Le serveur est-il allumé et accessible ?

4. **Vérifiez les paramètres de connexion**
   - Timeout trop court ? Augmentez-le dans les paramètres
   - Essayez de désactiver la compression

### Authentification échouée

**Symptômes** : Message « Authentication failed » ou « Permission denied »

**Solutions** :

1. **Mot de passe**
   - Vérifiez que le mot de passe est correct
   - Attention aux majuscules/minuscules
   - Vérifiez le verrouillage du clavier

2. **Clé SSH**
   - La clé publique est-elle dans authorized_keys ?
   - La clé privée est-elle correcte ?
   - La passphrase est-elle correcte ?
   - Vérifiez les permissions : chmod 600 ~/.ssh/authorized_keys

3. **Utilisateur**
   - Le nom d'utilisateur est-il correct ?
   - L'utilisateur a-t-il accès SSH ?
   - Le compte est-il verrouillé ?

### Déconnexions fréquentes

**Symptômes** : La connexion se ferme après quelques minutes d'inactivité

**Solutions** :

1. **Activez le keepalive**
   - Paramètres > Connexion > Keepalive
   - Réglez sur 30-60 secondes

2. **Vérifiez le réseau**
   - Connexion WiFi instable ?
   - Mode économie d'énergie actif ?

3. **Configuration du serveur**
   - Vérifiez ClientAliveInterval dans sshd_config

## Problèmes d'affichage

### Caractères incorrects ou manquants

**Symptômes** : Caractères spéciaux, emojis ou accents ne s'affichent pas correctement

**Solutions** :

1. **Vérifiez l'encodage**
   - Assurez-vous que le terminal utilise UTF-8
   - Sur le serveur : export LANG=en_US.UTF-8

2. **Police de caractères**
   - Utilisez une police avec support Unicode complet
   - Essayez : Fira Code, JetBrains Mono, ou Nerd Fonts

### Couleurs incorrectes

**Symptômes** : Les couleurs ne s'affichent pas ou sont incorrectes

**Solutions** :

1. **Type de terminal**
   - Vérifiez que TERM=xterm-256color
   - export TERM=xterm-256color

2. **Configuration du thème**
   - Essayez un autre thème de couleurs
   - Vérifiez les paramètres de l'application

### Interface tronquée

**Symptômes** : Les applications TUI (vim, htop, etc.) ne s'affichent pas correctement

**Solutions** :

1. **Redimensionnez le terminal**
   - Fermez et rouvrez la connexion
   - Utilisez la commande : resize

2. **Vérifiez COLUMNS et LINES**
   - echo $COLUMNS $LINES
   - stty columns 80 rows 24

## Problèmes de clavier

### Touches spéciales ne fonctionnent pas

**Symptômes** : Ctrl, Alt, touches de fonction ne répondent pas

**Solutions** :

1. **Vérifiez le clavier**
   - Assurez-vous que le clavier du terminal est visible
   - Essayez de réinitialiser les paramètres du clavier

2. **Mappage de touches**
   - Certaines combinaisons peuvent être interceptées par le système
   - Essayez des alternatives (ex: Ctrl+[ au lieu de Échap)

### Caractères dupliqués

**Symptômes** : Chaque touche apparaît deux fois

**Solutions** :

1. **Désactivez l'écho local**
   - Vérifiez les paramètres de connexion
   - Cela peut indiquer un problème de configuration du serveur

## Problèmes de transfert de fichiers

### SFTP lent

**Symptômes** : Les transferts de fichiers sont très lents

**Solutions** :

1. **Activez la compression**
   - Paramètres > SFTP > Compression

2. **Vérifiez le réseau**
   - Qualité de la connexion
   - Distance du serveur

3. **Taille du buffer**
   - Augmentez la taille du buffer dans les paramètres

### Échec du téléversement

**Symptômes** : Message « Permission denied » ou « Disk full »

**Solutions** :

1. **Permissions**
   - Vérifiez les droits d'écriture sur le dossier de destination
   - Utilisateur a-t-il les permissions nécessaires ?

2. **Espace disque**
   - Vérifiez l'espace disponible : df -h
   - Libérez de l'espace si nécessaire

3. **Quotas**
   - L'utilisateur a-t-il un quota dépassé ?

## Problèmes de sauvegarde

### Sauvegarde échouée

**Symptômes** : La sauvegarde vers Google Drive ou Box échoue

**Solutions** :

1. **Reconnectez le service**
   - Déconnectez-vous du service cloud
   - Reconnectez-vous et réautorisez

2. **Espace de stockage**
   - Vérifiez l'espace disponible sur le cloud

3. **Connexion Internet**
   - Assurez-vous d'avoir une connexion stable

### Restauration impossible

**Symptômes** : Impossible de restaurer une sauvegarde

**Solutions** :

1. **Mot de passe de chiffrement**
   - Avez-vous le bon mot de passe ?
   - Le mot de passe est sensible à la casse

2. **Format de sauvegarde**
   - La sauvegarde est-elle corrompue ?
   - Essayez une sauvegarde plus récente

## Problèmes de performance

### Application lente

**Symptômes** : L'application est lente ou ne répond pas

**Solutions** :

1. **Libérez de la mémoire**
   - Fermez les onglets inutilisés
   - Redémarrez l'application

2. **Videz le cache**
   - Paramètres > Avancé > Vider le cache

3. **Mises à jour**
   - Assurez-vous d'avoir la dernière version

## Logs et diagnostic

### Où trouver les logs ?

- **Android** : Paramètres > À propos > Exporter les logs
- **iOS** : Paramètres > À propos > Exporter les logs

### Informations à fournir pour le support

1. Version de l'application
2. Modèle de l'appareil
3. Version du système d'exploitation
4. Description détaillée du problème
5. Logs de l'application
6. Captures d'écran si pertinent

## Contacter le support

Si vous ne trouvez pas de solution :

1. Consultez la [FAQ](https://marix.app/faq)
2. Recherchez sur les forums communautaires
3. Contactez le support : support@marix.app
4. Ouvrez un ticket sur GitHub (pour les bugs)

## Voir aussi

- [Installation](installation.md)
- [Démarrage rapide](quickstart.md)
- [Terminal SSH](ssh-terminal.md)
- [Clés SSH](ssh-keys.md)
