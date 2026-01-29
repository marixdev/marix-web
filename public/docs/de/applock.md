# App-Sperre

Schützen Sie Ihre Marix-Anwendung mit der App-Sperre. Wenn aktiviert, sperrt sich die App automatisch nach einer Inaktivitätszeit und verhindert unbefugten Zugriff auf Ihre Server und Anmeldedaten.

## App-Sperre-Oberfläche

![App-Sperre-Oberfläche](/applock.png)

## App-Sperre aktivieren

1. Öffnen Sie **Einstellungen** (Zahnrad-Symbol in der Seitenleiste)
2. Finden Sie den Abschnitt **Sicherheit**
3. Aktivieren Sie **App-Sperre aktivieren**

## Sperrmethoden

Wählen Sie, wie die App gesperrt werden soll:

| Methode | Beschreibung | Sicherheitsstufe |
|---------|--------------|------------------|
| **Unschärfe** | Macht den Bildschirminhalt unscharf | Niedrig - nur visuelle Privatsphäre |
| **PIN** | Erfordert 4-6-stellige PIN zum Entsperren | Mittel |
| **Passwort** | Erfordert Passwort zum Entsperren | Hoch |

### Unschärfe-Modus

- Bildschirminhalt wird unscharf
- Klicken Sie irgendwo zum Entsperren
- Am besten für schnelle Privatsphäre in Büroumgebungen

### PIN-Modus

- Legen Sie eine 4-6-stellige numerische PIN fest
- Geben Sie die PIN zum Entsperren ein
- Gute Balance zwischen Sicherheit und Komfort

### Passwort-Modus

- Legen Sie ein benutzerdefiniertes Passwort fest
- Geben Sie das Passwort zum Entsperren ein
- Höchste Sicherheitsstufe

## PIN oder Passwort einrichten

Beim Wechsel zu PIN- oder Passwort-Modus:

1. Wählen Sie die Sperrmethode
2. Ein Dialog erscheint, um Ihre Anmeldedaten festzulegen
3. Geben Sie Ihre PIN/Ihr Passwort ein
4. Bestätigen Sie durch erneute Eingabe
5. Klicken Sie auf **Speichern**

> **Hinweis:** Wenn Sie Ihre PIN/Ihr Passwort vergessen, müssen Sie die App neu starten. Ihre Serverdaten bleiben sicher.

## Sperr-Timeout

Konfigurieren Sie, wie lange die App vor dem Sperren wartet:

| Timeout | Anwendungsfall |
|---------|----------------|
| 1 Minute | Maximale Sicherheit |
| 2 Minuten | Hohe Sicherheit |
| 5 Minuten | Standard, ausgewogen |
| 10 Minuten | Mittlere Sicherheit |
| 15 Minuten | Gelegentliche Nutzung |
| 30 Minuten | Niedrige Sicherheit |
| 60 Minuten | Minimaler Schutz |

Der Timer wird bei jeder Mausbewegung, Tastatureingabe oder Klick zurückgesetzt.

## Entsperren

### Unschärfe-Modus
- Klicken Sie irgendwo auf den Bildschirm
- Bewegen Sie die Maus

### PIN/Passwort-Modus
1. Geben Sie Ihre PIN oder Ihr Passwort ein
2. Drücken Sie **Enter** oder klicken Sie auf **Entsperren**
3. Die App wird sofort entsperrt

## Anmeldedaten ändern

Um Ihre PIN oder Ihr Passwort zu ändern:

1. Gehen Sie zu **Einstellungen** → **Sicherheit**
2. Klicken Sie auf **PIN ändern** oder **Passwort ändern**
3. Geben Sie Ihre neuen Anmeldedaten ein
4. Bestätigen und speichern

## Anmeldedaten löschen

Um PIN/Passwort zu entfernen und zur Unschärfe zurückzukehren:

1. Gehen Sie zu **Einstellungen** → **Sicherheit**
2. Klicken Sie auf **Anmeldedaten löschen**
3. Die Sperrmethode wechselt zu Unschärfe

## Wie es funktioniert

1. **Aktivitätsverfolgung**: Marix überwacht Maus-, Tastatur- und Klick-Ereignisse
2. **Inaktivitäts-Timer**: Nach Ablauf des Timeouts ohne Aktivität wird die App gesperrt
3. **Sofortsperre**: Sie können auch manuell sperren (falls implementiert)
4. **Sichere Speicherung**: PIN/Passwort wird sicher im System-Schlüsselbund gespeichert

## Sicherheitsüberlegungen

### Was die App-Sperre schützt

- ✅ Visueller Zugriff auf Ihre Serverliste
- ✅ Anzeigen gespeicherter Anmeldedaten
- ✅ Zugriff auf aktive Terminal-Sitzungen
- ✅ Durchsuchen von SFTP-Dateimanagern

### Was die App-Sperre NICHT schützt

- ❌ Bereits aufgebaute SSH-Verbindungen (sie bleiben aktiv)
- ❌ Daten auf der Festplatte (verwenden Sie dafür Systemverschlüsselung)
- ❌ Netzwerkverkehr (verwenden Sie dafür SSH/TLS)

## Bewährte Praktiken

1. **Verwenden Sie den Passwort-Modus** für sensible Umgebungen
2. **Setzen Sie kürzere Timeouts** in gemeinsam genutzten Arbeitsbereichen
3. **Verwenden Sie einzigartige Anmeldedaten** - verwenden Sie Passwörter nicht wieder
4. **Sperren Sie vor dem Verlassen** Ihres Computers
5. **Kombinieren Sie mit OS-Sperre** für maximale Sicherheit

## Fehlerbehebung

### PIN/Passwort vergessen

- Starten Sie die Anwendung neu
- Die App-Sperre wird beim Neustart zurückgesetzt
- Ihre Serverdaten bleiben erhalten

### App sperrt zu schnell

- Erhöhen Sie das Timeout in den Einstellungen
- Prüfen Sie, ob aktive Sitzungen die Aktivitätserkennung verhindern könnten

### App sperrt nicht

- Stellen Sie sicher, dass die App-Sperre aktiviert ist
- Überprüfen Sie die Timeout-Einstellung
- Überprüfen Sie, ob das App-Fenster den Fokus hat
