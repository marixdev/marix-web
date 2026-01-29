# Befehlsverlauf (Befehlsabruf)

Marix bietet eine **Befehlsverlauf**-Funktion, die zuvor ausgeführte Befehle für jeden Server speichert und abruft. Dies hilft Ihnen, häufig verwendete Befehle schnell erneut auszuführen, ohne sie erneut einzugeben.

## Befehlsverlauf-Oberfläche

![Befehlsverlauf-Oberfläche](/cmh.png)

## Funktionen

- **Verlauf pro Server**: Jeder Server hat seinen eigenen Befehlsverlauf
- **Nur lokale Speicherung**: Befehle werden lokal gespeichert, nie synchronisiert oder gesichert
- **Filterung sensibler Daten**: Filtert automatisch Befehle mit Passwörtern, Token oder Geheimnissen
- **LRU-Bereinigung**: Entfernt automatisch alte Befehle (max. 50 pro Server)
- **Ausführungszähler**: Verfolgt, wie oft jeder Befehl verwendet wurde
- **Suche**: Schnelles Filtern von Befehlen mit Fuzzy-Suche

## Aktivierung

Der Befehlsverlauf ist **standardmäßig deaktiviert** für den Datenschutz. Zum Aktivieren:

1. Öffnen Sie **Einstellungen** (Zahnrad-Symbol in der Seitenleiste)
2. Navigieren Sie zum Abschnitt **Terminal**
3. Aktivieren Sie **Befehlsabruf aktivieren**

## Verwendung

### Befehlsverlauf öffnen

In einer Terminal-Sitzung drücken Sie:
- **`Tab`**-Taste, wenn die Terminal-Eingabe leer ist (Cursor an leerer Zeile)
- Oder klicken Sie auf die Schaltfläche **Verlauf** in der Terminal-Symbolleiste

### Tastenkürzel

| Taste | Aktion |
|-------|--------|
| `Tab` (leere Eingabe) | Befehlsabruf-Popup öffnen |
| `↑` / `↓` | Durch Befehle navigieren |
| `Enter` | Ausgewählten Befehl ausführen |
| `Escape` | Popup schließen |
| `Entf` / `Rücktaste` | Ausgewählten Befehl löschen |

### Popup-Aktionen

- **Klicken** Sie auf einen Befehl, um ihn sofort auszuführen
- **Suchen** Sie durch Eingabe im Suchfeld
- **Löschen** Sie einzelne Befehle mit dem Papierkorb-Symbol
- **Als Snippet speichern**, um einen Befehl in eine wiederverwendbare Vorlage umzuwandeln

## Datenschutz & Sicherheit

### Gefilterte Befehle

Befehle, die diesen Mustern entsprechen, werden **nie gespeichert**:

- Befehle mit `password`, `passwd`, `secret`, `token`
- Befehle mit `api_key` oder `apikey`
- MySQL-Befehle mit `-p`-Flag (Passwort)
- `sudo -S` (stdin-Passwort)
- Befehle mit `sshpass` oder `expect` mit Passwort
- Umgebungsvariablen-Exporte mit sensiblen Werten

### Datenspeicherung

- Gespeichert im `localStorage` des Browsers
- **Nie synchronisiert** mit Cloud-Diensten
- **Nie enthalten** in Backups
- Gelöscht, wenn Sie Browserdaten löschen

### Verlauf löschen

Um den Befehlsverlauf zu löschen:

1. Öffnen Sie **Einstellungen** → **Terminal**
2. Klicken Sie auf **Befehlsverlauf löschen**

Oder löschen Sie pro Server über das Befehlsabruf-Popup.

## Limits

| Limit | Wert |
|-------|------|
| Max. Befehle pro Server | 50 |
| Min. Befehlslänge | 2 Zeichen |

## FAQ

### Warum werden einige Befehle nicht gespeichert?

Befehle mit sensiblen Mustern (Passwörter, Token usw.) werden aus Sicherheitsgründen automatisch gefiltert.

### Kann ich meinen Befehlsverlauf exportieren?

Nein, der Befehlsverlauf ist absichtlich nur lokal und aus Datenschutzgründen nicht exportierbar.

### Wird der Befehlsverlauf zwischen Geräten synchronisiert?

Nein, der Befehlsverlauf wird lokal gespeichert und nie synchronisiert.

### Wie deaktiviere ich den Befehlsverlauf?

Gehen Sie zu Einstellungen → Terminal → Deaktivieren Sie „Befehlsabruf aktivieren". Der vorhandene Verlauf wird beibehalten, bis Sie ihn manuell löschen.
