# Datenbank-Client

Marix enthält einen integrierten Datenbank-Client zum Verbinden und Verwalten von Datenbankservern direkt aus der Anwendung.

## Datenbank-Client-Oberfläche

![Datenbank-Client-Oberfläche](/database.png)

---

## Unterstützte Datenbanken

| Datenbank | Protokoll | Funktionen |
|-----------|-----------|------------|
| **MySQL / MariaDB** | `mysql` | Abfrage-Editor, Tabellenbrowser, Datenanzeige, Strukturinspektor |
| **PostgreSQL** | `postgresql` | Abfrage-Editor, Tabellenbrowser, Datenanzeige, Strukturinspektor |
| **MongoDB** | `mongodb` | Sammlungsbrowser, Dokumentanzeige, Abfrageschnittstelle |
| **Redis** | `redis` | Schlüssel-Wert-Browser, Befehlsschnittstelle |
| **SQLite** | `sqlite` | Lokale Dateiunterstützung, vollständiger SQL-Editor |

---

## Datenbankserver hinzufügen

1. Klicken Sie auf die Schaltfläche **+ Hinzufügen** in der Seitenleiste
2. Wählen Sie die Registerkarte **Datenbank** (oder das Datenbank-Symbol)
3. Wählen Sie Ihren Datenbanktyp

### MySQL / MariaDB / PostgreSQL

| Feld | Beschreibung | Beispiel |
|------|--------------|----------|
| Name | Anzeigename | `Produktion MySQL` |
| Host | Server-Hostname oder IP | `db.example.com` |
| Port | Datenbank-Port | `3306` (MySQL) / `5432` (PostgreSQL) |
| Benutzername | Datenbankbenutzer | `root` |
| Passwort | Benutzerpasswort | `••••••••` |
| Datenbank | Standarddatenbank (optional) | `myapp_production` |
| SSL | SSL/TLS aktivieren | ☑️ Aktiviert |

### MongoDB

| Feld | Beschreibung | Beispiel |
|------|--------------|----------|
| Name | Anzeigename | `MongoDB Atlas` |
| Verbindungszeichenfolge | Vollständige MongoDB-URI | `mongodb+srv://user:pass@cluster.mongodb.net/` |
| Host | Server-Hostname | `localhost` |
| Port | MongoDB-Port | `27017` |
| Datenbank | Standarddatenbank | `myapp` |

### Redis

| Feld | Beschreibung | Beispiel |
|------|--------------|----------|
| Name | Anzeigename | `Redis Cache` |
| Host | Server-Hostname | `redis.example.com` |
| Port | Redis-Port | `6379` |
| Passwort | Auth-Passwort (optional) | `••••••••` |
| Datenbank | Datenbanknummer | `0` |

### SQLite

| Feld | Beschreibung | Beispiel |
|------|--------------|----------|
| Name | Anzeigename | `Lokale SQLite` |
| Dateipfad | Pfad zur .db-Datei | `/home/user/app.db` |

---

## Datenbank-Client-Oberfläche

### 📊 Daten-Tab

Tabellendaten durchsuchen und anzeigen:

- **Datenbank auswählen** aus Dropdown (falls mehrere)
- **Auf eine Tabelle klicken** in der Seitenleiste, um ihre Daten anzuzeigen
- **Paginierung** - Durch Zeilen navigieren (Standard 100 pro Seite)
- **Spaltensortierung** - Spaltenüberschriften klicken zum Sortieren
- **Schnellfilter** - In angezeigten Daten suchen

### ⚡ Abfrage-Tab

SQL-Abfragen schreiben und ausführen mit:

- **Syntaxhervorhebung** - SQL-Schlüsselwörter, Zeichenfolgen, Zahlen
- **Ausführen** - Abfrage mit `Strg+Enter` oder Ausführen-Schaltfläche starten
- **Ergebnistabelle** - Abfrageergebnisse in einer Tabelle anzeigen
- **Exportieren** - Ergebnisse als CSV oder JSON herunterladen
- **Ausführungszeit** - Sehen, wie lange Abfragen dauern

### 🏗️ Struktur-Tab

Tabellenschemata inspizieren mit:

- Spaltennamen und Datentypen
- Primärschlüssel, Fremdschlüssel, Unique-Constraints
- Nullable-Spalten und Standardwerte
- Auto-Increment-Einstellungen

### 🔗 ERD-Tab

Entity-Relationship-Diagramm anzeigen:

- Visuelle Darstellung von Tabellen und Beziehungen
- Fremdschlüsselverbindungen als Linien dargestellt
- Ziehen und Zoomen zur Navigation großer Schemata
- Als Bild exportieren (PNG)

---

## Tastenkürzel

| Tastenkürzel | Aktion |
|--------------|--------|
| `Strg/Cmd + Enter` | Abfrage ausführen |
| `Strg/Cmd + S` | Abfrage in Datei speichern |
| `Strg/Cmd + O` | Abfrage aus Datei öffnen |
| `Strg/Cmd + Shift + F` | SQL formatieren |
| `Escape` | Laufende Abfrage abbrechen |

---

## Verbindungssicherheit

### SSL/TLS-Verschlüsselung

Aktivieren Sie das Kontrollkästchen **SSL** beim Hinzufügen des Servers. Für benutzerdefinierte Zertifikate:

- CA-Zertifikatpfad
- Client-Zertifikatpfad (optional)
- Client-Schlüsselpfad (optional)

### SSH-Tunnel

Über einen SSH-Tunnel verbinden:

1. Zuerst einen SSH-Server in Marix hinzufügen
2. Beim Hinzufügen der Datenbank **SSH-Tunnel** aktivieren
3. Den SSH-Server für den Tunnel auswählen

---

## Bewährte Praktiken

1. **Nur-Lese-Konten verwenden** - Datenbankbenutzer mit eingeschränkten Berechtigungen erstellen
2. **Ergebnismengen begrenzen** - Immer `LIMIT` verwenden, um zu viele Daten zu vermeiden
3. **Vor dem Ausführen testen** - Bei `UPDATE` oder `DELETE` zuerst ein `SELECT` ausführen
4. **Transaktionen verwenden** - Kritische Operationen in Transaktionen einschließen

---

## Fehlerbehebung

| Problem | Lösung |
|---------|--------|
| Verbindung fehlgeschlagen | Host/Port, Anmeldedaten, Firewall, SSL-Einstellungen prüfen |
| Abfrage-Timeout | LIMIT hinzufügen, Indizes prüfen, Serverlast prüfen |
| Zugriff verweigert | Berechtigungen, Datenbankzugriff prüfen, Admin kontaktieren |
| SSL-Zertifikatfehler | SSL deaktivieren, Zertifikatgültigkeit prüfen, CA-Zertifikat hinzufügen |
