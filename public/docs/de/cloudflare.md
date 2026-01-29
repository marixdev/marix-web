# Cloudflare DNS-Manager

Verwalten Sie Ihre Cloudflare DNS-Einträge direkt aus Marix.

## Cloudflare DNS-Manager-Oberfläche

![Cloudflare DNS-Manager-Oberfläche](/cf.png)

## Einrichtung

### Schritt 1: API-Token erhalten

1. Gehen Sie zum [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigieren Sie zu Profil → API-Tokens
3. Klicken Sie auf „Token erstellen"
4. Verwenden Sie die Vorlage „Zone-DNS bearbeiten" oder erstellen Sie benutzerdefiniert mit:
   - Zone.DNS: Bearbeiten
   - Zone.Zone: Lesen
5. Kopieren Sie das Token

### Schritt 2: In Marix konfigurieren

1. Gehen Sie zu **Einstellungen** in der Seitenleiste
2. Finden Sie den Abschnitt **„Cloudflare API-Token"**
3. Klicken Sie auf **„Token hinzufügen"**
4. Fügen Sie Ihr Token ein
5. Klicken Sie auf **„Speichern"**

## Cloudflare DNS verwenden

1. Klicken Sie auf **„Cloudflare"** in der Seitenleiste
2. Ihre Domains werden in einem Dropdown geladen
3. Wählen Sie eine Domain
4. DNS-Einträge für diese Domain erscheinen

## DNS-Einträge anzeigen

Die Tabelle zeigt:

| Spalte | Beschreibung |
|--------|--------------|
| Typ | Eintragstyp (A, AAAA, CNAME, MX, TXT, etc.) |
| Name | Eintragsname/Subdomain |
| Inhalt | Eintragswert (IP, Hostname, Text) |
| TTL | Time-to-live (Auto oder Sekunden) |
| Proxy | Über Cloudflare proxied oder nur DNS |

## DNS-Eintrag hinzufügen

### Schritt 1: Dialog öffnen
Klicken Sie auf die Schaltfläche **„Eintrag hinzufügen"**

### Schritt 2: Details ausfüllen

| Feld | Beschreibung |
|------|--------------|
| Typ | Auswählen: A, AAAA, CNAME, MX, TXT, SRV, etc. |
| Name | Subdomain (z.B. „www") oder „@" für Root |
| Inhalt | Der Wert (IP für A, Hostname für CNAME, etc.) |
| TTL | Time-to-live: Auto oder benutzerdefinierte Sekunden |
| Proxy | Umschalten: Proxied (orange Wolke) oder nur DNS (grau) |
| Kommentar | Optionale Notiz |

### Schritt 3: Erstellen
Klicken Sie auf **„Erstellen"**

## Gängige Eintragstypen

### A-Eintrag
Verweist eine Domain auf eine IPv4-Adresse.

| Feld | Beispiel |
|------|----------|
| Typ | A |
| Name | @ (oder www) |
| Inhalt | 192.168.1.100 |

### AAAA-Eintrag
Verweist eine Domain auf eine IPv6-Adresse.

| Feld | Beispiel |
|------|----------|
| Typ | AAAA |
| Name | @ |
| Inhalt | 2001:db8::1 |

### CNAME-Eintrag
Erstellt einen Alias zu einer anderen Domain.

| Feld | Beispiel |
|------|----------|
| Typ | CNAME |
| Name | www |
| Inhalt | example.com |

### MX-Eintrag
Gibt Mail-Server an.

| Feld | Beispiel |
|------|----------|
| Typ | MX |
| Name | @ |
| Inhalt | mail.example.com |
| Priorität | 10 |

### TXT-Eintrag
Speichert Textdaten (SPF, DKIM, Verifizierung).

| Feld | Beispiel |
|------|----------|
| Typ | TXT |
| Name | @ |
| Inhalt | v=spf1 include:_spf.google.com ~all |

## DNS-Eintrag bearbeiten

1. Finden Sie den Eintrag in der Tabelle
2. Klicken Sie auf die Schaltfläche **Bearbeiten** (Stift-Symbol)
3. Ändern Sie die Felder
4. Klicken Sie auf **„Speichern"**

## DNS-Eintrag löschen

1. Finden Sie den Eintrag
2. Klicken Sie auf die Schaltfläche **Löschen** (Papierkorb-Symbol)
3. Bestätigen Sie die Löschung

## Proxy-Status

| Symbol | Status | Auswirkung |
|--------|--------|------------|
| 🟠 Orange Wolke | Proxied | Verkehr geht durch Cloudflare CDN |
| ⚪ Graue Wolke | Nur DNS | Direkte Verbindung zum Ursprung |

### Wann Proxy verwenden

**Proxied (Orange):**
- Webserver (HTTP/HTTPS)
- DDoS-Schutz gewünscht
- CDN-Caching gewünscht

**Nur DNS (Grau):**
- SSH, FTP, Mail-Server
- Nicht-HTTP-Dienste
- Direkte IP-Verbindung benötigt

## Einträge aktualisieren

Klicken Sie auf die Schaltfläche **Aktualisieren** neben dem Domain-Dropdown, um Einträge neu zu laden.

## Tipps

- **TTL Auto** wird für die meisten Fälle empfohlen
- **Änderungen testen** mit DNS-Lookup-Tools
- **Einträge sichern** vor größeren Änderungen
- **Propagation** kann weltweit bis zu 48 Stunden dauern
