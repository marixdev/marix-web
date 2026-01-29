# Outils réseau

Une suite complète d'outils de diagnostic réseau intégrée à Marix.

## Interface des outils réseau

![Interface des outils réseau](/loockup.png)

## Ouvrir les outils réseau

Cliquez sur **« Lookup »** dans la barre latérale.

## Outils disponibles

| Outil | Fonction | Exemple d'entrée |
|-------|----------|------------------|
| Enregistrement A | Obtenir l'adresse IPv4 | example.com |
| Enregistrement AAAA | Obtenir l'adresse IPv6 | example.com |
| Recherche MX | Obtenir les serveurs de messagerie | example.com |
| Enregistrement TXT | Obtenir les enregistrements TXT | example.com |
| Vérification SPF | Vérifier l'enregistrement SPF | example.com |
| Recherche CNAME | Obtenir le nom canonique | www.example.com |
| Recherche NS | Obtenir les serveurs de noms | example.com |
| Enregistrement SOA | Obtenir les détails SOA | example.com |
| Recherche PTR | DNS inversé | 8.8.8.8 |
| Ping | Ping d'un hôte | example.com |
| Traceroute | Tracer le chemin réseau | example.com |
| Port TCP | Tester si un port est ouvert | example.com |
| Vérification Web | Vérifier le statut d'un site web | example.com |
| Liste noire | Vérifier les listes noires IP | 1.2.3.4 |
| Vérification DNS | Analyse DNS complète | example.com |
| Info IP | Obtenir les infos de propriété IP | 8.8.8.8 |
| WHOIS | Infos d'enregistrement de domaine | example.com |

## Utiliser un outil réseau

### Étape 1 : Sélectionner l'outil
Cliquez sur un outil dans la barre latérale gauche.

### Étape 2 : Entrer la cible
- Nom de domaine, adresse IP ou nom d'hôte
- Pour le port TCP : entrez aussi le numéro de port

### Étape 3 : Exécuter
Cliquez sur le bouton **« Exécuter »** ou appuyez sur Entrée.

### Étape 4 : Voir les résultats
- **Badge vert** = Succès
- **Badge rouge** = Échec/Erreur
- L'horodatage indique quand l'outil a été exécuté

## Outils DNS

### Enregistrement A
Retourne la ou les adresses IPv4 d'un domaine.

```
example.com → 93.184.216.34
```

### Enregistrement AAAA
Retourne la ou les adresses IPv6 d'un domaine.

```
example.com → 2606:2800:220:1:248:1893:25c8:1946
```

### Recherche MX
Retourne les serveurs d'échange de courrier d'un domaine.

```
example.com →
  10 mail1.example.com
  20 mail2.example.com
```

### Enregistrement TXT
Retourne les enregistrements texte (souvent utilisés pour la vérification, SPF, DKIM).

```
example.com → "v=spf1 include:_spf.google.com ~all"
```

### Recherche CNAME
Retourne le nom canonique (alias) d'un sous-domaine.

```
www.example.com → example.com
```

### Recherche NS
Retourne les serveurs de noms d'un domaine.

```
example.com →
  ns1.example.com
  ns2.example.com
```

### Recherche PTR (DNS inversé)
Retourne le nom d'hôte d'une adresse IP.

```
8.8.8.8 → dns.google
```

## Diagnostics réseau

### Ping
Tester la connectivité et mesurer la latence.

```
Ping de example.com :
  Réponse : 64 octets, temps=23ms
  Réponse : 64 octets, temps=21ms
  Moyenne : 22ms
```

### Traceroute
Tracer le chemin réseau vers une destination.

```
1  router.local (192.168.1.1) 1ms
2  isp-gateway (10.0.0.1) 5ms
3  backbone.isp.net 12ms
...
```

### Test de port TCP
Vérifier si un port spécifique est ouvert.

**Boutons de ports rapides :** SSH(22), HTTP(80), HTTPS(443), MySQL(3306), etc.

```
example.com:443 → Ouvert
example.com:22 → Fermé/Filtré
```

### Vérification Web
Tester la connectivité HTTP/HTTPS et la réponse.

```
https://example.com
  Statut : 200 OK
  Temps de réponse : 145ms
  SSL : Valide
```

## Outils IP

### Info IP
Obtenir les informations de propriété et de localisation d'une IP.

```
8.8.8.8 →
  Organisation : Google LLC
  Pays : États-Unis
  ASN : AS15169
```

### Vérification de liste noire
Vérifier si une IP est sur des listes noires de spam/abus.

```
Vérification de 1.2.3.4 :
  ✅ Spamhaus : Propre
  ✅ Barracuda : Propre
  ⚠️ SORBS : Listé
```

## Outils de domaine

### WHOIS
Obtenir les informations d'enregistrement du domaine.

```
example.com →
  Registrar : Example Registrar
  Créé : 1995-08-14
  Expire : 2025-08-13
  Statut : clientTransferProhibited
```

### Vérification DNS
Vérification complète de la santé DNS.

```
Vérification de example.com :
  ✅ Enregistrements NS trouvés
  ✅ Enregistrement A résolu
  ✅ Enregistrements MX configurés
  ✅ Enregistrement SPF valide
```

## Conseils

- **Copiez les résultats** en sélectionnant et en utilisant `Ctrl+C`
- **Exécutez plusieurs vérifications** sur le même domaine
- Les résultats affichent des **horodatages** pour référence
- Utilisez **Info IP** pour investiguer des IP inconnues
- **Vérification de liste noire** avant d'envoyer des emails depuis une nouvelle IP
