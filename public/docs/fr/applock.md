# Verrouillage de l'application

Protégez votre application Marix avec le verrouillage de l'application. Lorsqu'il est activé, l'application se verrouille automatiquement après une période d'inactivité, empêchant l'accès non autorisé à vos serveurs et identifiants.

## Interface de verrouillage de l'application

![Interface de verrouillage](/applock.png)

## Activer le verrouillage de l'application

1. Ouvrez **Paramètres** (icône d'engrenage dans la barre latérale)
2. Trouvez la section **Sécurité**
3. Activez **Activer le verrouillage de l'application**

## Méthodes de verrouillage

Choisissez comment l'application doit être verrouillée :

| Méthode | Description | Niveau de sécurité |
|---------|-------------|-------------------|
| **Flou** | Floute le contenu de l'écran | Faible - confidentialité visuelle uniquement |
| **Code PIN** | Nécessite un code PIN de 4 à 6 chiffres pour déverrouiller | Moyen |
| **Mot de passe** | Nécessite un mot de passe pour déverrouiller | Élevé |

### Mode Flou

- Le contenu de l'écran devient flou
- Cliquez n'importe où pour déverrouiller
- Idéal pour une confidentialité rapide en environnement de bureau

### Mode Code PIN

- Définissez un code PIN numérique de 4 à 6 chiffres
- Entrez le code PIN pour déverrouiller
- Bon équilibre entre sécurité et commodité

### Mode Mot de passe

- Définissez un mot de passe personnalisé
- Entrez le mot de passe pour déverrouiller
- Niveau de sécurité le plus élevé

## Configurer le code PIN ou le mot de passe

Lors du passage au mode PIN ou Mot de passe :

1. Sélectionnez la méthode de verrouillage
2. Une boîte de dialogue apparaît pour définir vos identifiants
3. Entrez votre PIN/Mot de passe
4. Confirmez en le saisissant à nouveau
5. Cliquez sur **Enregistrer**

> **Remarque :** Si vous oubliez votre PIN/Mot de passe, vous devrez redémarrer l'application. Les données de vos serveurs restent en sécurité.

## Délai de verrouillage

Configurez le temps d'attente avant le verrouillage :

| Délai | Cas d'utilisation |
|-------|-------------------|
| 1 minute | Sécurité maximale |
| 2 minutes | Haute sécurité |
| 5 minutes | Par défaut, équilibré |
| 10 minutes | Sécurité modérée |
| 15 minutes | Utilisation occasionnelle |
| 30 minutes | Faible sécurité |
| 60 minutes | Protection minimale |

Le minuteur se réinitialise avec tout mouvement de souris, saisie clavier ou clic.

## Déverrouillage

### Mode Flou
- Cliquez n'importe où sur l'écran
- Bougez la souris

### Mode PIN/Mot de passe
1. Entrez votre PIN ou mot de passe
2. Appuyez sur **Entrée** ou cliquez sur **Déverrouiller**
3. L'application se déverrouille immédiatement

## Modifier les identifiants

Pour changer votre PIN ou mot de passe :

1. Allez dans **Paramètres** → **Sécurité**
2. Cliquez sur **Modifier le PIN** ou **Modifier le mot de passe**
3. Entrez votre nouvel identifiant
4. Confirmez et enregistrez

## Effacer les identifiants

Pour supprimer le PIN/Mot de passe et revenir au mode Flou :

1. Allez dans **Paramètres** → **Sécurité**
2. Cliquez sur **Effacer les identifiants**
3. La méthode de verrouillage revient au mode Flou

## Fonctionnement

1. **Suivi de l'activité** : Marix surveille les événements de souris, clavier et clics
2. **Minuteur d'inactivité** : Après aucune activité pendant le délai défini, l'application se verrouille
3. **Verrouillage instantané** : Vous pouvez également verrouiller manuellement (si implémenté)
4. **Stockage sécurisé** : PIN/Mot de passe stocké de manière sécurisée via le trousseau système

## Considérations de sécurité

### Ce que le verrouillage de l'application protège

- ✅ Accès visuel à votre liste de serveurs
- ✅ Visualisation des identifiants enregistrés
- ✅ Accès aux sessions de terminal actives
- ✅ Navigation dans les gestionnaires de fichiers SFTP

### Ce que le verrouillage de l'application NE protège PAS

- ❌ Connexions SSH déjà établies (elles restent actives)
- ❌ Données sur le disque (utilisez le chiffrement système pour cela)
- ❌ Trafic réseau (utilisez SSH/TLS pour cela)

## Bonnes pratiques

1. **Utilisez le mode Mot de passe** pour les environnements sensibles
2. **Définissez des délais plus courts** dans les espaces de travail partagés
3. **Utilisez des identifiants uniques** - ne réutilisez pas les mots de passe
4. **Verrouillez avant de partir** de votre ordinateur
5. **Combinez avec le verrouillage de l'OS** pour une sécurité maximale

## Dépannage

### PIN/Mot de passe oublié

- Redémarrez l'application
- Le verrouillage de l'application se réinitialise au redémarrage
- Les données de vos serveurs sont préservées

### L'application se verrouille trop vite

- Augmentez le délai dans les Paramètres
- Vérifiez si vous avez des sessions actives qui pourraient empêcher la détection d'activité

### L'application ne se verrouille pas

- Assurez-vous que le verrouillage de l'application est activé
- Vérifiez le paramètre de délai
- Vérifiez que la fenêtre de l'application a le focus
