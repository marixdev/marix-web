# FTP/FTPS-Dateiübertragung

Marix unterstützt FTP- und FTPS-Protokolle zum Verbinden mit Dateiservern, die kein SSH unterstützen.

## Oberflächenlayout

![FTP-Oberfläche](/ftp.png)

## FTP-Server hinzufügen

1. Klicken Sie auf **„Neuen Host hinzufügen"**
2. Wählen Sie **Protokoll**: FTP oder FTPS
3. Füllen Sie aus:
   - **Host/IP**: FTP-Serveradresse
   - **Port**: 21 (FTP) oder 990 (FTPS)
   - **Benutzername**: FTP-Benutzername
   - **Passwort**: FTP-Passwort
4. Klicken Sie auf **Erstellen**

## FTP vs FTPS

| Funktion | FTP | FTPS |
|----------|-----|------|
| Verschlüsselung | Keine | TLS/SSL |
| Standard-Port | 21 | 990 |
| Sicherheit | Niedrig | Hoch |
| Anwendungsfall | Legacy-Systeme | Sichere Übertragungen |

> **Empfehlung**: Verwenden Sie FTPS, wenn verfügbar, für verschlüsselte Dateiübertragungen.

## Mit FTP verbinden

1. Doppelklicken Sie auf den FTP-Server in der Hostliste
2. Die Verbindung öffnet sich direkt im **Dateibrowser-Modus**
3. Kein Terminal verfügbar (FTP ist nur für Dateiübertragung)

## Dateioperationen

Alle Dateioperationen funktionieren wie bei SFTP:

### Dateien übertragen
- **Drag & Drop** zum Übertragen zwischen lokal und remote
- **Rechtsklick** → Herunterladen/Hochladen

### Dateiverwaltung
- **Ordner erstellen**: Rechtsklick → Neuer Ordner
- **Dateien umbenennen**: Rechtsklick → Umbenennen
- **Dateien löschen**: Rechtsklick → Löschen

### Navigation
- Symbolleisten-Schaltflächen verwenden: Zurück, Vorwärts, Hoch, Start
- Doppelklicken Sie auf Ordner zum Öffnen
- Suche zum Filtern von Dateien verwenden

## Einschränkungen

FTP unterstützt nicht:
- **chmod** (Berechtigungen ändern)
- **Symbolische Links**
- **Dateibearbeitung** (muss heruntergeladen, bearbeitet und erneut hochgeladen werden)

## Passiver vs Aktiver Modus

Marix verwendet standardmäßig den **passiven Modus**, der besser funktioniert mit:
- NAT-Routern
- Firewalls
- Den meisten modernen Netzwerkkonfigurationen

## Fehlerbehebung

### Verbindungs-Timeout
- Prüfen Sie, ob der Server Ihre IP erlaubt
- Firewall-Regeln auf beiden Seiten überprüfen
- Andere Ports versuchen, falls konfiguriert

### Authentifizierung fehlgeschlagen
- Benutzername und Passwort überprüfen
- Prüfen, ob der FTP-Benutzer auf dem Server aktiviert ist
- Einige Server erfordern bestimmte Anmeldeformate

### Übertragung fehlgeschlagen
- Verfügbaren Speicherplatz prüfen
- Dateiberechtigungen auf dem Server überprüfen
- Große Dateien können ein Timeout verursachen - Serverlimits prüfen
