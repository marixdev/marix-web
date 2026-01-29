# Client WebSocket

Marix inclut un **client WebSocket** intégré qui vous permet de tester et de déboguer des connexions WebSocket. Cette fonctionnalité est utile pour les développeurs travaillant avec des API temps réel.

## Interface du client WebSocket

![Interface du client WebSocket](/websocket.png)

## Fonctionnalités

- **Connexion WebSocket** : Connectez-vous à n'importe quel serveur WebSocket
- **Envoi de messages** : Envoyez des messages texte ou JSON
- **Réception de messages** : Affichez les messages reçus en temps réel
- **Historique** : Conservez l'historique des messages
- **Headers personnalisés** : Ajoutez des en-têtes HTTP personnalisés
- **Sous-protocoles** : Support des sous-protocoles WebSocket

## Utilisation

### Accéder au client WebSocket

1. Depuis l'écran d'accueil, appuyez sur **Outils**
2. Sélectionnez **Client WebSocket**
3. Ou créez un raccourci rapide

### Se connecter à un serveur

1. Entrez l'URL du serveur WebSocket :
   - Format : ws://exemple.com:port/chemin
   - Format sécurisé : wss://exemple.com:port/chemin
2. (Optionnel) Ajoutez des en-têtes ou sous-protocoles
3. Appuyez sur **Connecter**

### Envoyer des messages

1. Une fois connecté, entrez votre message dans la zone de texte
2. Appuyez sur **Envoyer**
3. Le message apparaît dans l'historique avec un indicateur « envoyé »

### Recevoir des messages

- Les messages reçus s'affichent automatiquement
- Chaque message a un horodatage
- Différenciation visuelle entre messages envoyés et reçus

### Se déconnecter

- Appuyez sur **Déconnecter** pour fermer la connexion
- Ou fermez l'écran du client

## Options de connexion

### En-têtes HTTP

Ajoutez des en-têtes personnalisés pour l'authentification ou autres besoins :

| En-tête | Exemple |
|---------|---------|
| Authorization | Bearer votre-token-jwt |
| X-API-Key | votre-cle-api |
| Cookie | session=abc123 |

### Sous-protocoles

Spécifiez des sous-protocoles si le serveur les requiert :

- graphql-ws
- mqtt
- wamp
- stomp

## Formats de messages

### Texte brut

```
Bonjour, serveur !
```

### JSON

```json
{
  "type": "message",
  "content": "Bonjour",
  "timestamp": 1234567890
}
```

### Messages binaires

Le client supporte également les messages binaires, affichés en hexadécimal.

## Historique des messages

- **Horodatage** : Chaque message est horodaté
- **Direction** : Indicateur envoyé/reçu
- **Copie** : Appuyez longuement pour copier un message
- **Effacer** : Bouton pour effacer l'historique

## Exemples d'utilisation

### Test d'une API de chat

```
URL: wss://chat.exemple.com/socket
Message: {"action": "join", "room": "general"}
```

### Débogage d'un serveur de jeu

```
URL: wss://jeu.exemple.com/ws
Message: {"type": "ping"}
```

### Test d'un flux de données

```
URL: wss://donnees.exemple.com/stream
Headers: Authorization: Bearer token123
```

## États de connexion

| État | Description |
|------|-------------|
| **Déconnecté** | Pas de connexion active |
| **Connexion...** | Établissement de la connexion |
| **Connecté** | Connexion établie et active |
| **Erreur** | Échec de connexion ou déconnexion inattendue |

## Codes de fermeture

Lorsqu'une connexion se ferme, un code indique la raison :

| Code | Signification |
|------|---------------|
| 1000 | Fermeture normale |
| 1001 | Serveur partant |
| 1002 | Erreur de protocole |
| 1003 | Type de données non supporté |
| 1006 | Fermeture anormale |
| 1011 | Erreur serveur inattendue |

## Sécurité

### Connexions sécurisées (WSS)

- Utilisez toujours **wss://** pour les connexions en production
- Les connexions WSS sont chiffrées via TLS
- Vérification du certificat SSL

### Bonnes pratiques

- ✅ Utilisez WSS au lieu de WS quand possible
- ✅ Validez les messages reçus avant de les traiter
- ✅ N'envoyez pas de données sensibles sur des connexions non chiffrées
- ⚠️ Les tokens dans l'URL peuvent être loggués

## Dépannage

### Impossible de se connecter

1. Vérifiez l'URL (ws:// ou wss://)
2. Vérifiez que le serveur est accessible
3. Vérifiez les en-têtes requis
4. Essayez sans sous-protocoles

### Connexion fermée immédiatement

1. Vérifiez les logs du serveur
2. L'authentification est-elle correcte ?
3. Le sous-protocole est-il supporté ?

### Messages non reçus

1. Vérifiez que la connexion est active
2. Le serveur envoie-t-il des messages ?
3. Vérifiez le format attendu

## Limitations

- Taille maximale des messages : dépend du serveur
- Pas de reconnexion automatique (à venir)
- Pas de ping/pong manuel (géré automatiquement)

## Voir aussi

- [Outils réseau](network-tools.md)
- [Tunnel Cloudflare](cloudflare.md)
- [Transfert de port](port-forwarding.md)
