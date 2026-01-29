# Bureau à distance RDP

Connectez-vous aux serveurs et ordinateurs Windows en utilisant le protocole Remote Desktop Protocol (RDP).

## Ajouter un serveur RDP

1. Cliquez sur **« Ajouter un nouvel hôte »**
2. Sélectionnez **Protocole** : RDP
3. Remplissez :
   - **Hôte/IP** : Adresse du serveur Windows
   - **Port** : 3389 (par défaut)
   - **Nom d'utilisateur** : Nom d'utilisateur Windows
   - **Mot de passe** : Mot de passe Windows
   - **Domaine** : (optionnel) Nom de domaine Windows
4. Cliquez sur **Créer**

## Importer depuis un fichier .rdp

Vous avez déjà un fichier de configuration RDP ?

1. Dans la boîte de dialogue Ajouter un serveur, cliquez sur **« Importer un fichier .rdp »**
2. Sélectionnez votre fichier `.rdp`
3. Les champs se remplissent automatiquement depuis le fichier
4. Ajustez les paramètres si nécessaire
5. Cliquez sur **Créer**

## Se connecter à RDP

1. Double-cliquez sur le serveur RDP dans la liste des hôtes
2. La fenêtre du bureau à distance s'ouvre dans l'application
3. Vous pouvez interagir avec le bureau Windows normalement

## Contrôles RDP

| Entrée | Comportement |
|--------|--------------|
| **Souris** | Clic, glisser, défilement fonctionnent normalement |
| **Clavier** | Toutes les touches sont transmises au distant |
| **Presse-papiers** | Copier/coller entre local et distant |

## Déconnexion

- Cliquez sur × sur l'onglet de la session
- Ou fermez l'application
- L'état de la session est préservé sur le serveur distant

## Prérequis Linux

Le support RDP sur Linux nécessite FreeRDP. Marix **détecte automatiquement** si FreeRDP est installé.

### Installation automatique

Si FreeRDP n'est pas trouvé :
1. Une notification apparaît lorsque vous essayez de vous connecter
2. Cliquez sur le bouton **« Installer »**
3. Marix installe FreeRDP automatiquement
4. Reconnectez-vous après l'installation

### Installation manuelle

Si vous préférez installer manuellement :

**Ubuntu/Debian**
```bash
sudo apt install freerdp3-x11 xdotool
```

**Fedora**
```bash
sudo dnf install freerdp xdotool
```

**Arch Linux**
```bash
sudo pacman -S freerdp xdotool
```

## Paramètres d'affichage

Les sessions RDP s'adaptent à la taille de votre fenêtre. Pour une meilleure expérience :
- Maximisez la fenêtre pour une expérience bureau complète
- Redimensionnez la fenêtre pour ajuster la résolution distante
- Mode plein écran disponible via les contrôles de fenêtre

## Conseils de performance

- **Réduisez la profondeur des couleurs** pour les connexions lentes
- **Désactivez les effets visuels** côté Windows
- Utilisez une **connexion filaire** pour de meilleures performances
- Fermez les applications inutiles sur la machine distante

## Dépannage

### Connexion refusée
- Vérifiez que le Bureau à distance est activé sur Windows
- Vérifiez que le pare-feu Windows autorise RDP
- Confirmez le bon port (3389 par défaut)

### Écran noir
- Attendez un moment - la connexion initiale peut prendre du temps
- Essayez de vous reconnecter
- Vérifiez que la machine distante n'est pas en veille

### Performances lentes
- Réduisez la résolution d'écran
- Réduisez la profondeur des couleurs
- Vérifiez la vitesse du réseau
- Fermez les applications gourmandes en bande passante

### Échec d'authentification
- Vérifiez le format du nom d'utilisateur :
  - Local : `nomutilisateur`
  - Domaine : `DOMAINE\nomutilisateur` ou `nomutilisateur@domaine.com`
- Vérifiez que le mot de passe est correct
- Assurez-vous que le compte a les droits d'accès Bureau à distance
