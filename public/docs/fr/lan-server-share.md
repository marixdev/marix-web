# Partage de serveurs LAN

Partagez vos configurations de serveurs avec d'autres utilisateurs Marix sur le même réseau local.

## Interface de partage de serveurs LAN

![Interface de partage de serveurs LAN](/servershare.png)

## Prérequis

> ⚠️ **Important :** L'expéditeur et le destinataire doivent avoir la **découverte LAN activée**.
> 
> Cliquez sur le bouton 🌐 dans la barre d'en-tête ou utilisez `Ctrl+Shift+L` pour basculer.

- Les deux appareils sur le même réseau (WiFi/LAN)
- Découverte LAN activée sur les deux appareils
- Marix en cours d'exécution sur les deux appareils

## Cas d'utilisation

- Partager l'accès aux serveurs avec les membres de l'équipe
- Configurer rapidement un nouvel ordinateur
- Transférer des configurations entre appareils
- Intégrer de nouveaux membres de l'équipe

## Ouvrir le partage de serveurs

### Méthode 1 : Menu clic droit
1. Dans la liste des hôtes, faites un clic droit sur un serveur
2. Sélectionnez **« Partager sur LAN »**

### Méthode 2 : Multi-sélection
1. Maintenez `Ctrl` (ou `⌘` sur Mac) et cliquez sur plusieurs serveurs
2. Cliquez sur le bouton **« Partager »** qui apparaît
3. Ou faites un clic droit et sélectionnez **« Partager sur LAN »**

## Partager des serveurs (Expéditeur)

### Étape 1 : Activer la découverte LAN
Cliquez sur l'icône **🌐** (globe) dans la barre d'en-tête.

### Étape 2 : Sélectionner les serveurs
- Clic droit → « Partager sur LAN » pour un seul serveur
- Ou multi-sélection de serveurs puis cliquez sur Partager

### Étape 3 : Modal de sélection des serveurs
- Vérifiez les serveurs sélectionnés
- Cliquez sur **« Tout sélectionner »** pour partager tous les serveurs
- Cliquez sur **« Effacer »** pour tout désélectionner
- Cliquez sur les tags pour sélectionner rapidement les serveurs avec ce tag

### Étape 4 : Cliquez sur le bouton « Partager »

### Étape 5 : Configurer les options

| Option | Description |
|--------|-------------|
| Inclure les données sensibles ✅ | Partager les mots de passe et clés privées |
| Inclure les données sensibles ❌ | Supprimer les mots de passe/clés (le destinataire les saisit manuellement) |

### Étape 6 : Noter le code d'appairage
Le **code d'appairage** à 6 chiffres est valide pendant 5 minutes.

### Étape 7 : Partager le code
Communiquez votre code d'appairage au destinataire.

### Étape 8 : Envoyer
Cliquez sur **« Partager sur LAN »**

Le statut affiche : « X serveur(s) envoyé(s). En attente du destinataire... »

## Recevoir des serveurs (Destinataire)

### Étape 1 : Activer la découverte LAN
Cliquez sur l'icône **🌐** (globe) dans la barre d'en-tête.

### Étape 2 : Attendre la notification
Un popup apparaît lorsque quelqu'un vous envoie des serveurs.

Ou allez dans Hôtes → clic droit sur une zone vide → « Recevoir les serveurs partagés »

### Étape 3 : Entrer le code d'appairage
Entrez le code à 6 chiffres de l'expéditeur.

### Étape 4 : Importer
Cliquez sur **« Déchiffrer et importer »**

### Étape 5 : Terminé !
Les serveurs sont importés avec :
- Tous les paramètres d'origine
- Un tag **« LAN-Import »** ajouté automatiquement
- Mots de passe/clés (si l'expéditeur les a inclus)

Le statut affiche : « X serveur(s) importé(s) avec succès ! »

## Sécurité

- Tous les transferts sont **chiffrés**
- Code d'appairage à 6 chiffres requis
- Les codes expirent après 5 minutes
- Aucune donnée ne passe par des serveurs externes
- Transfert direct d'appareil à appareil

## Dépannage

### Aucun appareil n'apparaît

1. Les deux appareils sur le **même réseau** (WiFi/LAN)
2. **Découverte LAN ACTIVÉE** sur les deux appareils
3. Cliquez sur « Rafraîchir » pour rescanner
4. Vérifiez que le pare-feu ne bloque pas Marix

### Code d'appairage expiré

- Les codes expirent après 5 minutes
- L'expéditeur peut cliquer sur « Régénérer » pour un nouveau code

### Erreur « Mauvais code d'appairage »

- Vérifiez le code avec l'expéditeur
- Les codes sont sensibles à la casse
- Demandez un nouveau code si nécessaire

### Serveurs sans mots de passe

- L'expéditeur a peut-être désactivé « Inclure les données sensibles »
- Entrez les mots de passe manuellement après l'importation
- Demandez à l'expéditeur de repartager avec les données sensibles activées
