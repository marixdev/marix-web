# Transfert de fichiers FTP/FTPS

Marix prend en charge les protocoles FTP et FTPS pour se connecter aux serveurs de fichiers qui ne supportent pas SSH.

## Disposition de l'interface

![Interface FTP](/ftp.png)

## Ajouter un serveur FTP

1. Cliquez sur **« Ajouter un nouvel hôte »**
2. Sélectionnez **Protocole** : FTP ou FTPS
3. Remplissez :
   - **Hôte/IP** : Adresse du serveur FTP
   - **Port** : 21 (FTP) ou 990 (FTPS)
   - **Nom d'utilisateur** : Nom d'utilisateur FTP
   - **Mot de passe** : Mot de passe FTP
4. Cliquez sur **Créer**

## FTP vs FTPS

| Fonctionnalité | FTP | FTPS |
|----------------|-----|------|
| Chiffrement | Aucun | TLS/SSL |
| Port par défaut | 21 | 990 |
| Sécurité | Faible | Élevée |
| Cas d'utilisation | Systèmes legacy | Transferts sécurisés |

> **Recommandation** : Utilisez FTPS quand disponible pour des transferts de fichiers chiffrés.

## Se connecter au FTP

1. Double-cliquez sur le serveur FTP dans la liste des hôtes
2. La connexion s'ouvre directement en **mode navigateur de fichiers**
3. Aucun terminal n'est disponible (FTP est pour le transfert de fichiers uniquement)

## Opérations sur les fichiers

Toutes les opérations de fichiers fonctionnent comme pour SFTP :

### Transférer des fichiers
- **Glisser-déposer** pour transférer entre local et distant
- **Clic droit** → Télécharger/Envoyer

### Gestion des fichiers
- **Créer des dossiers** : Clic droit → Nouveau dossier
- **Renommer des fichiers** : Clic droit → Renommer
- **Supprimer des fichiers** : Clic droit → Supprimer

### Navigation
- Utilisez les boutons de la barre d'outils : Précédent, Suivant, Parent, Accueil
- Double-cliquez sur les dossiers pour y entrer
- Utilisez la recherche pour filtrer les fichiers

## Limitations

FTP ne prend pas en charge :
- **chmod** (changement de permissions)
- **Liens symboliques**
- **Édition de fichiers** (doit télécharger, éditer, réenvoyer)

## Mode passif vs actif

Marix utilise le **mode passif** par défaut, qui fonctionne mieux avec :
- Les routeurs NAT
- Les pare-feu
- La plupart des configurations réseau modernes

## Dépannage

### Délai de connexion dépassé
- Vérifiez si le serveur autorise votre IP
- Vérifiez les règles de pare-feu des deux côtés
- Essayez différents ports si configurés

### Échec d'authentification
- Vérifiez le nom d'utilisateur et le mot de passe
- Vérifiez si l'utilisateur FTP est activé sur le serveur
- Certains serveurs nécessitent des formats de connexion spécifiques

### Échec du transfert
- Vérifiez l'espace disque disponible
- Vérifiez les permissions de fichiers sur le serveur
- Les gros fichiers peuvent expirer - vérifiez les limites du serveur
