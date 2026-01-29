# Historique des commandes (Rappel de commandes)

Marix propose une fonctionnalité d'**historique des commandes** qui stocke et rappelle les commandes précédemment exécutées pour chaque serveur. Cela vous aide à relancer rapidement les commandes courantes sans les retaper.

## Interface de l'historique des commandes

![Interface de l'historique des commandes](/cmh.png)

## Fonctionnalités

- **Historique par serveur** : Chaque serveur maintient son propre historique de commandes
- **Stockage local uniquement** : Les commandes sont stockées localement, jamais synchronisées ni sauvegardées
- **Filtrage des données sensibles** : Filtre automatiquement les commandes contenant des mots de passe, jetons ou secrets
- **Élagage LRU** : Supprime automatiquement les anciennes commandes (max 50 par serveur)
- **Compteur d'exécutions** : Suit le nombre de fois que chaque commande a été utilisée
- **Recherche** : Filtrez rapidement les commandes avec la recherche floue

## Comment activer

L'historique des commandes est **désactivé par défaut** pour des raisons de confidentialité. Pour l'activer :

1. Ouvrez **Paramètres** (icône d'engrenage dans la barre latérale)
2. Naviguez vers la section **Terminal**
3. Activez **Activer le rappel de commandes**

## Utilisation

### Ouvrir l'historique des commandes

Lors d'une session terminal, appuyez sur :
- La touche **`Tab`** lorsque l'entrée du terminal est vide (curseur sur une ligne vide)
- Ou cliquez sur le bouton **Historique** dans la barre d'outils du terminal

### Raccourcis clavier

| Touche | Action |
|--------|--------|
| `Tab` (entrée vide) | Ouvrir le popup de rappel de commandes |
| `↑` / `↓` | Naviguer dans les commandes |
| `Entrée` | Exécuter la commande sélectionnée |
| `Échap` | Fermer le popup |
| `Suppr` / `Retour arrière` | Supprimer la commande sélectionnée |

### Actions du popup

- **Cliquez** sur une commande pour l'exécuter immédiatement
- **Recherchez** en tapant dans la zone de recherche
- **Supprimez** des commandes individuelles avec l'icône de corbeille
- **Enregistrez comme snippet** pour convertir une commande en snippet réutilisable

## Confidentialité et sécurité

### Commandes filtrées

Les commandes correspondant à ces motifs ne sont **jamais stockées** :

- Commandes contenant `password`, `passwd`, `secret`, `token`
- Commandes avec `api_key` ou `apikey`
- Commandes MySQL avec le flag `-p` (mot de passe)
- `sudo -S` (mot de passe stdin)
- Commandes utilisant `sshpass` ou `expect` avec mot de passe
- Exportations de variables d'environnement avec des valeurs sensibles

### Stockage des données

- Stocké dans le `localStorage` du navigateur
- **Jamais synchronisé** avec les services cloud
- **Jamais inclus** dans les sauvegardes
- Effacé lorsque vous effacez les données du navigateur

### Effacer l'historique

Pour effacer l'historique des commandes :

1. Ouvrez **Paramètres** → **Terminal**
2. Cliquez sur **Effacer l'historique des commandes**

Ou effacez par serveur depuis le popup de rappel de commandes.

## Limites

| Limite | Valeur |
|--------|--------|
| Max commandes par serveur | 50 |
| Longueur minimum de commande | 2 caractères |

## FAQ

### Pourquoi certaines commandes ne sont-elles pas enregistrées ?

Les commandes contenant des motifs sensibles (mots de passe, jetons, etc.) sont automatiquement filtrées pour des raisons de sécurité.

### Puis-je exporter mon historique de commandes ?

Non, l'historique des commandes est intentionnellement local uniquement et non exportable pour des raisons de confidentialité.

### L'historique des commandes se synchronise-t-il entre les appareils ?

Non, l'historique des commandes est stocké localement et jamais synchronisé.
