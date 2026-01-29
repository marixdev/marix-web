# Netzwerk-Tools

Eine umfassende Suite von Netzwerk-Diagnosetools, die in Marix integriert sind.

## Netzwerk-Tools-Oberfläche

![Netzwerk-Tools-Oberfläche](/loockup.png)

## Netzwerk-Tools öffnen

Klicken Sie auf **„Lookup"** in der Seitenleiste.

## Verfügbare Tools

| Tool | Funktion | Eingabebeispiel |
|------|----------|-----------------|
| A-Eintrag | IPv4-Adresse abrufen | example.com |
| AAAA-Eintrag | IPv6-Adresse abrufen | example.com |
| MX-Abfrage | Mail-Server abrufen | example.com |
| TXT-Eintrag | TXT-Einträge abrufen | example.com |
| SPF-Prüfung | SPF-Eintrag überprüfen | example.com |
| CNAME-Abfrage | Kanonischen Namen abrufen | www.example.com |
| NS-Abfrage | Nameserver abrufen | example.com |
| SOA-Eintrag | SOA-Details abrufen | example.com |
| PTR-Abfrage | Reverse DNS | 8.8.8.8 |
| Ping | Einen Host anpingen | example.com |
| Traceroute | Netzwerkpfad verfolgen | example.com |
| TCP-Port | Prüfen, ob Port offen ist | example.com |
| Web-Check | Website-Status prüfen | example.com |
| Blacklist | IP-Blacklists prüfen | 1.2.3.4 |
| DNS-Check | Vollständige DNS-Analyse | example.com |
| IP-Info | IP-Eigentümerinfo abrufen | 8.8.8.8 |
| WHOIS | Domain-Registrierungsinfo | example.com |

## Ein Netzwerk-Tool verwenden

### Schritt 1: Tool auswählen
Klicken Sie auf ein Tool in der linken Seitenleiste.

### Schritt 2: Ziel eingeben
- Domain-Name, IP-Adresse oder Hostname
- Für TCP-Port: auch Portnummer eingeben

### Schritt 3: Ausführen
Klicken Sie auf die Schaltfläche **„Ausführen"** oder drücken Sie Enter.

### Schritt 4: Ergebnisse anzeigen
- **Grünes Badge** = Erfolg
- **Rotes Badge** = Fehlgeschlagen/Fehler
- Zeitstempel zeigt, wann ausgeführt

## DNS-Tools

### A-Eintrag
Gibt die IPv4-Adresse(n) für eine Domain zurück.

```
example.com → 93.184.216.34
```

### AAAA-Eintrag
Gibt die IPv6-Adresse(n) für eine Domain zurück.

```
example.com → 2606:2800:220:1:248:1893:25c8:1946
```

### MX-Abfrage
Gibt Mail-Exchange-Server für eine Domain zurück.

```
example.com →
  10 mail1.example.com
  20 mail2.example.com
```

### TXT-Eintrag
Gibt Text-Einträge zurück (oft für Verifizierung, SPF, DKIM verwendet).

```
example.com → "v=spf1 include:_spf.google.com ~all"
```

### CNAME-Abfrage
Gibt den kanonischen Namen (Alias) für eine Subdomain zurück.

```
www.example.com → example.com
```

### NS-Abfrage
Gibt Nameserver für eine Domain zurück.

```
example.com →
  ns1.example.com
  ns2.example.com
```

### PTR-Abfrage (Reverse DNS)
Gibt den Hostnamen für eine IP-Adresse zurück.

```
8.8.8.8 → dns.google
```

## Netzwerk-Diagnose

### Ping
Konnektivität testen und Latenz messen.

```
Pinging example.com:
  Reply: 64 bytes, time=23ms
  Reply: 64 bytes, time=21ms
  Average: 22ms
```

### Traceroute
Den Netzwerkpfad zu einem Ziel verfolgen.

```
1  router.local (192.168.1.1) 1ms
2  isp-gateway (10.0.0.1) 5ms
3  backbone.isp.net 12ms
...
```

### TCP-Port-Test
Prüfen, ob ein bestimmter Port offen ist.

**Schnell-Port-Schaltflächen:** SSH(22), HTTP(80), HTTPS(443), MySQL(3306), etc.

```
example.com:443 → Offen
example.com:22 → Geschlossen/Gefiltert
```

### Web-Check
HTTP/HTTPS-Konnektivität und Antwort testen.

```
https://example.com
  Status: 200 OK
  Antwortzeit: 145ms
  SSL: Gültig
```

## IP-Tools

### IP-Info
Eigentümer- und Standortinformationen für eine IP abrufen.

```
8.8.8.8 →
  Organisation: Google LLC
  Land: United States
  ASN: AS15169
```

### Blacklist-Prüfung
Prüfen, ob eine IP auf Spam/Missbrauchs-Blacklists steht.

```
Prüfe 1.2.3.4:
  ✅ Spamhaus: Sauber
  ✅ Barracuda: Sauber
  ⚠️ SORBS: Gelistet
```

## Domain-Tools

### WHOIS
Domain-Registrierungsinformationen abrufen.

```
example.com →
  Registrar: Example Registrar
  Erstellt: 1995-08-14
  Läuft ab: 2025-08-13
  Status: clientTransferProhibited
```

### DNS-Check
Umfassende DNS-Zustandsprüfung.

```
Prüfe example.com:
  ✅ NS-Einträge gefunden
  ✅ A-Eintrag löst auf
  ✅ MX-Einträge konfiguriert
  ✅ SPF-Eintrag gültig
```

## Tipps

- **Ergebnisse kopieren** durch Auswählen und Verwenden von `Strg+C`
- **Mehrere Prüfungen** auf derselben Domain ausführen
- Ergebnisse zeigen **Zeitstempel** als Referenz
- Verwenden Sie **IP-Info**, um unbekannte IPs zu untersuchen
- **Blacklist-Prüfung** vor dem Senden von E-Mails von einer neuen IP
