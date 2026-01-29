# Fehlerbehebung

Häufige Probleme und Lösungen für Marix.

## Verbindungsprobleme

### „Verbindung abgelehnt"

**Ursachen:**
- Server läuft nicht
- Falsche IP/Hostname
- Falscher Port
- Firewall blockiert Verbindung

**Lösungen:**
1. Host/IP überprüfen
2. Port auf Korrektheit und Erreichbarkeit prüfen
3. Sicherstellen, dass der Server läuft
4. Firewall-Erlaubnis prüfen
5. Server anpingen versuchen

### „Verbindungs-Timeout"

**Ursachen:**
- Server nicht erreichbar
- Netzwerkprobleme
- Firewall blockiert

**Lösungen:**
1. Internetverbindung prüfen
2. Überprüfen, ob Server online ist
3. Von einem anderen Netzwerk versuchen
4. Prüfen, ob VPN benötigt wird

### „Authentifizierung fehlgeschlagen"

**Ursachen:**
- Falscher Benutzername
- Falsches Passwort
- Falscher SSH-Schlüssel
- Schlüssel-Passphrase falsch

**Lösungen:**
1. Benutzernamen überprüfen
2. Passwort prüfen (Groß-/Kleinschreibung beachten)
3. Korrekten SSH-Schlüssel ausgewählt sicherstellen
4. Richtige Schlüssel-Passphrase eingeben
5. Überprüfen, ob Benutzer SSH-Zugang auf dem Server hat

### „Host-Schlüssel-Überprüfung fehlgeschlagen"

**Ursachen:**
- Server wurde neu installiert
- SSH-Schlüssel des Servers geändert
- Potenzielles Sicherheitsproblem

**Lösungen:**
1. Mit Serveradministrator bestätigen, ob Schlüssel geändert wurde
2. Zu Bekannte Hosts → alten Eintrag entfernen
3. Erneut verbinden und neuen Fingerabdruck akzeptieren
4. Bei Verdacht vor Verbindung untersuchen

### „Zugriff verweigert (publickey)"

**Ursachen:**
- SSH-Schlüssel nicht akzeptiert
- Schlüssel nicht in authorized_keys
- Falscher Schlüssel ausgewählt

**Lösungen:**
1. Überprüfen, ob öffentlicher Schlüssel in `~/.ssh/authorized_keys` des Servers ist
2. Schlüsselberechtigungen prüfen: `chmod 600 ~/.ssh/authorized_keys`
3. Korrekten Schlüssel in Marix ausgewählt sicherstellen
4. Passwort-Authentifizierung versuchen, falls verfügbar

## SFTP-Probleme

### „Zugriff verweigert" beim Hochladen

**Ursachen:**
- Keine Schreibberechtigung auf Remote
- Falsches Verzeichnis
- Festplatte voll

**Lösungen:**
1. Schreibberechtigungen auf Remote-Ordner prüfen
2. Erst ins Home-Verzeichnis hochladen versuchen
3. Speicherplatz auf Server prüfen
4. `sudo` verwenden, falls nötig (über Terminal)

### Dateiübertragung langsam

**Ursachen:**
- Netzwerkgeschwindigkeit
- Große Dateigröße
- Serverauslastung

**Lösungen:**
1. Netzwerkgeschwindigkeit prüfen
2. Große Dateien brauchen länger - Geduld haben
3. Außerhalb der Spitzenzeiten versuchen
4. Dateien vor Übertragung komprimieren

### „Datei oder Verzeichnis nicht gefunden"

**Ursachen:**
- Pfad existiert nicht
- Symbolischer Link defekt
- Berechtigung zum Auflisten des Verzeichnisses fehlt

**Lösungen:**
1. Überprüfen, ob Pfad existiert
2. Manuell zum Speicherort navigieren
3. Berechtigungen des übergeordneten Verzeichnisses prüfen

## Terminal-Probleme

### Terminal zeigt verstümmelten Text

**Ursachen:**
- Codierungskonflikt
- Terminal-Typ-Inkompatibilität

**Lösungen:**
1. Ein anderes Terminal-Theme versuchen
2. Locale-Einstellungen des Servers prüfen
3. Erneut mit Server verbinden

### Kopieren/Einfügen funktioniert nicht

**Lösungen:**
1. `Strg+Shift+C` und `Strg+Shift+V` verwenden
2. **Text kopieren**: 
   - Text mit Maus auswählen → Kopieren
   - Oder `Strg+C` verwenden
3. **Text einfügen**: 
   - Rechtsklick → Einfügen
   - Oder `Strg+V` verwenden
4. Prüfen, ob Text tatsächlich ausgewählt ist

### Terminal reagiert nicht

**Lösungen:**
1. Kurz warten - Befehl wird möglicherweise verarbeitet
2. `Strg+C` drücken, um laufenden Befehl abzubrechen
3. Auf Wiederverbinden-Schaltfläche klicken
4. Tab schließen und wieder öffnen

## RDP-Probleme

### Schwarzer Bildschirm nach Verbindung

**Ursachen:**
- Anfängliche Verbindungsverzögerung
- Remote-Rechner im Ruhezustand
- Grafikprobleme

**Lösungen:**
1. Kurz auf Verbindung warten
2. Erneut verbinden versuchen
3. Remote-Rechner zuerst aufwecken
4. Prüfen, ob Remote-Rechner nicht gesperrt ist

### Langsame RDP-Leistung

**Lösungen:**
1. Farbtiefe-Einstellungen reduzieren
2. Visuelle Effekte in Windows deaktivieren
3. Kabelverbindung verwenden
4. Bandbreitenintensive Anwendungen schließen
5. Remote-Auflösung verringern

## Anwendungsprobleme

### Marix startet nicht

**Lösungen:**
1. Computer neu starten
2. Marix neu installieren
3. Auf konfliktbehaftete Software prüfen
4. Als Administrator ausführen (Windows)

### Einstellungen werden nicht gespeichert

**Ursachen:**
- Keine Schreibberechtigung
- Konfigurationsdatei beschädigt

**Lösungen:**
1. Marix als Administrator ausführen
2. Einstellungen zurücksetzen (Einstellungen → Zurücksetzen)
3. Konfigurationsordner löschen und neu starten

### Hohe CPU-/Speichernutzung

**Lösungen:**
1. Unbenutzte Verbindungs-Tabs schließen
2. Anzahl offener SFTP-Panels reduzieren
3. Marix neu starten
4. Auf neueste Version aktualisieren

## Backup-Probleme

### „Falsches Passwort" beim Wiederherstellen

**Lösungen:**
1. Sicherstellen, dass das exakte Passwort verwendet wird
2. Passwörter unterscheiden Groß-/Kleinschreibung
3. Auf führende/nachfolgende Leerzeichen prüfen
4. Backup von einem anderen Anbieter versuchen

### Backup-Upload fehlgeschlagen

**Lösungen:**
1. Internetverbindung prüfen
2. OAuth-Verbindung auf Gültigkeit überprüfen
3. Mit Backup-Anbieter erneut verbinden
4. Speicherkontingent prüfen

## Hilfe erhalten

Falls Ihr Problem hier nicht aufgeführt ist:

1. **Nach Updates suchen** - Die neueste Version könnte Ihr Problem beheben
2. **Issues durchsuchen** auf GitHub
3. **Bug melden** auf [GitHub Issues](https://github.com/marixdev/marix/issues)
4. **Support kontaktieren** über die Website

Beim Melden von Problemen angeben:
- Marix-Version
- Betriebssystem
- Schritte zur Reproduktion
- Fehlermeldungen (falls vorhanden)
- Screenshots (falls zutreffend)
