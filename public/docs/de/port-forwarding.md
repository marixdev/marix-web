# Port-Weiterleitung (SSH-Tunnel)

SSH-Tunnel leiten Datenverkehr sicher über eine SSH-Verbindung.

## Port-Weiterleitungs-Oberfläche

![Port-Weiterleitungs-Oberfläche](/portfoward.png)

## Arten der Port-Weiterleitung

| Typ | Richtung | Anwendungsfall |
|-----|----------|----------------|
| **Lokal** | Remote → Lokal | Auf Remote-Dienst über lokalen Port zugreifen |
| **Remote** | Lokal → Remote | Lokalen Dienst im Remote-Netzwerk freigeben |
| **Dynamisch** | SOCKS-Proxy | Einen SOCKS-Proxy über SSH erstellen |

## Port-Weiterleitung öffnen

Klicken Sie auf **„Port Forward"** in der Seitenleiste.

## Port-Weiterleitung erstellen

### Schritt 1: Dialog öffnen
Klicken Sie auf die Schaltfläche **„Weiterleitung hinzufügen"**

### Schritt 2: Konfigurieren

| Feld | Beschreibung | Beispiel |
|------|--------------|----------|
| Name | Beschreibender Name | „MySQL zu localhost" |
| Typ | Lokal, Remote oder Dynamisch | Lokal |
| Server | SSH-Server für den Tunnel | Mein VPS |
| Lokaler Host | Lokale Bind-Adresse | 127.0.0.1 |
| Lokaler Port | Lokale Portnummer | 3307 |
| Remote-Host | Remote-Ziel | 127.0.0.1 |
| Remote-Port | Remote-Port | 3306 |

### Schritt 3: Speichern
Klicken Sie auf **„Hinzufügen"** oder **„Speichern"**

## Anwendungsbeispiele

### Lokale Weiterleitung: Auf Remote-MySQL zugreifen

Auf die MySQL-Datenbank Ihres Servers von Ihrem lokalen Rechner zugreifen:

| Einstellung | Wert |
|-------------|------|
| Typ | Lokal |
| Lokal | 127.0.0.1:3307 |
| Remote | 127.0.0.1:3306 |

**Verwendung:** Verbinden Sie sich mit `localhost:3307`, um auf das MySQL des Servers zuzugreifen.

### Remote-Weiterleitung: Lokale App freigeben

Lassen Sie den Server auf Ihren lokalen Entwicklungsserver zugreifen:

| Einstellung | Wert |
|-------------|------|
| Typ | Remote |
| Lokal | 127.0.0.1:3000 |
| Remote | 0.0.0.0:8080 |

**Verwendung:** Port 8080 des Servers verbindet sich mit Ihrem localhost:3000.

### Dynamisch: SOCKS-Proxy

Einen SOCKS5-Proxy zum Surfen über den Server erstellen:

| Einstellung | Wert |
|-------------|------|
| Typ | Dynamisch |
| Lokal | 127.0.0.1:1080 |

**Verwendung:** Konfigurieren Sie Apps zur Verwendung des SOCKS5-Proxys bei `localhost:1080`.

## Port-Weiterleitungen verwalten

### Starten
1. Finden Sie die Weiterleitung in der Liste
2. Klicken Sie auf die Schaltfläche **Start** (▶)
3. Status wechselt zu „Verbunden"

### Stoppen
1. Finden Sie die laufende Weiterleitung
2. Klicken Sie auf die Schaltfläche **Stop** (■)
3. Status wechselt zu „Getrennt"

### Bearbeiten
1. **Stoppen** Sie die Weiterleitung, falls sie läuft
2. Klicken Sie auf die Schaltfläche **Bearbeiten** (Stift)
3. Einstellungen ändern
4. Klicken Sie auf **Speichern**

### Löschen
1. Stoppen Sie die Weiterleitung, falls sie läuft
2. Klicken Sie auf die Schaltfläche **Löschen** (Papierkorb)
3. Löschung bestätigen

## Status überwachen

Die Liste zeigt:
- **Statusanzeige**: Grün = verbunden, Rot = Fehler
- **Verbindungsanzahl**: Aktive Verbindungen
- **Übertragene Bytes**: Ein-/Ausgehender Datenverkehr

## Gängige Anwendungsfälle

| Dienst | Lokaler Port | Remote-Port | Typ |
|--------|--------------|-------------|-----|
| MySQL | 3307 | 3306 | Lokal |
| PostgreSQL | 5433 | 5432 | Lokal |
| Redis | 6380 | 6379 | Lokal |
| MongoDB | 27018 | 27017 | Lokal |
| Web-App | 8080 | 80 | Lokal |
| Jupyter | 8889 | 8888 | Lokal |

## Fehlerbehebung

### Port bereits in Verwendung
- Wählen Sie einen anderen lokalen Port
- Prüfen Sie, ob eine andere Anwendung diesen Port verwendet
- Stoppen Sie konfliktäre Dienste

### Verbindung abgelehnt
- Überprüfen Sie, ob der Remote-Dienst läuft
- Prüfen Sie die Firewall auf dem Server
- Stellen Sie sicher, dass der richtige Remote-Host/Port verwendet wird

### Tunnel bricht ab
- Prüfen Sie die Stabilität der SSH-Verbindung
- Der Server hat möglicherweise Timeout-Einstellungen
- Erwägen Sie die Verwendung von Keep-Alive
