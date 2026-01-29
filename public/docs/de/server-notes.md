# Server-Notizen (Haftnotizen)

Marix bietet eine **Server-Notizen**-Funktion, mit der Sie persönliche Notizen an jeden Server anhängen können. Dies ist nützlich für die Dokumentation von Serverkonfigurationen, Wartungserinnerungen oder Kurzreferenzinformationen.

## Server-Notizen-Oberfläche

![Server-Notizen-Oberfläche](/note.png)

## Funktionen

- **Notizen pro Server**: Jeder Server kann eigene Notizen haben
- **Automatisches Speichern**: Änderungen werden beim Tippen automatisch gespeichert (500ms Verzögerung)
- **Rich-Text-Unterstützung**: Klartext mit Zeilenumbrüchen
- **Visueller Indikator**: Server mit Notizen zeigen ein ausgefülltes Notiz-Symbol
- **Mit Serverdaten synchronisiert**: Notizen werden in Server-Backups eingeschlossen

## Verwendung

### Notizen öffnen

1. Verbinden Sie sich mit einem Server (SSH-Terminal oder SFTP)
2. Klicken Sie auf die Schaltfläche **Notizen** in der oberen Symbolleiste (Stift-Symbol)
3. Ein Haftnotiz-Popup erscheint in der unteren rechten Ecke

### Notizen schreiben

- Tippen Sie einfach im Textbereich
- Notizen werden **automatisch gespeichert** nach 500ms Inaktivität
- Der „Speichern..."-Indikator zeigt an, wenn ein Speichervorgang läuft
- Drücken Sie `Escape` oder klicken Sie außerhalb zum Schließen

### Visuelle Indikatoren

| Symbol-Status | Bedeutung |
|---------------|-----------|
| Umriss (leer) | Keine Notizen für diesen Server |
| Ausgefüllt (solid) | Server hat Notizen |
| Bernstein/Gelbe Farbe | Notizen vorhanden |

## Anwendungsfälle

### Serverkonfiguration

```
Web-Server - Produktion
-----------------------
IP: 192.168.1.100
Nginx: /etc/nginx/sites-enabled/
Logs: /var/log/nginx/
SSL-Zertifikat läuft ab: 2026-12-15
```

### Wartungserinnerungen

```
TODO:
- [ ] OpenSSL aktualisieren (CVE-2025-XXXX)
- [ ] Datenbank-Anmeldedaten rotieren
- [ ] Swap auf 4GB erhöhen
```

### Kurzreferenz

```
Häufige Befehle:
- Nginx neustarten: sudo systemctl restart nginx
- Festplatte prüfen: df -h
- Verbindungen anzeigen: netstat -tuln

Datenbank:
- Benutzer: app_user
- Port: 5432
```

## Datenspeicherung

- Notizen werden als Teil der Serverkonfiguration gespeichert
- ✅ **Enthalten in lokalen Backups** (Marix-Backup-Funktion)
- ✅ **Enthalten in Cloud-Backups** (Google Drive, Box)
- ✅ **Verschlüsselt** bei Verwendung von Backup-Verschlüsselung

## Tastenkürzel

| Taste | Aktion |
|-------|--------|
| `Escape` | Notiz-Popup schließen |
| Klick außerhalb | Notiz-Popup schließen |

## FAQ

### Sind Notizen verschlüsselt?

Notizen werden als Klartext in der Serverkonfigurationsdatei gespeichert. Wenn Sie ein verschlüsseltes Backup erstellen, werden Notizen zusammen mit allen Serverdaten verschlüsselt.

### Kann ich Markdown verwenden?

Notizen sind derzeit nur Klartext. Markdown-Rendering könnte in einer zukünftigen Version hinzugefügt werden.

### Gibt es eine Zeichenbegrenzung?

Keine feste Grenze, aber sehr lange Notizen können die Leistung beeinträchtigen. Es wird empfohlen, Notizen kurz zu halten.
