# Befehlsvorlagen

Snippets sind wiederverwendbare Befehlsvorlagen, die Ihnen helfen, häufig verwendete Befehle schnell im SSH-Terminal auszuführen.

## Befehlsvorlagen-Oberfläche

![Befehlsvorlagen-Oberfläche](/snippets.png)

---

## Übersicht

Die Snippets-Funktion kombiniert **Befehlsvorlagen** mit optionalen **Tastenkürzeln**:

- **Häufig verwendete Befehle speichern** für schnellen Zugriff
- **Hotkeys zuweisen** (Strg+Shift+Taste oder Cmd+Shift+Taste) für sofortige Ausführung
- **Nach Kategorie organisieren** (System, Docker, Git, Netzwerk usw.)
- **Geltungsbereich-basierte Sichtbarkeit** - global, pro Host oder pro Gruppe

---

## Auf Snippets zugreifen

### Snippets-Panel

Wenn Sie mit einem SSH-Terminal verbunden sind, erscheint ein **Snippets-Panel** auf der rechten Seite:

- **Suchen** - Snippets nach Name, Befehl oder Tag finden
- **Nach Kategorie filtern** - Kategorie-Symbole zum Filtern klicken
- **Klicken zum Einfügen** - Auf ein Snippet klicken, um den Befehl einzufügen
- **Einklappen/Ausklappen** - Panel-Sichtbarkeit umschalten

### Snippets-Manager

Zugriff über das Seitenleistenmenü für:

- Alle Snippets nach Geltungsbereich anzeigen
- Snippets hinzufügen, bearbeiten oder löschen
- Hotkey-Zuweisungen verwalten

---

## Snippets erstellen

1. Öffnen Sie den **Snippets-Manager** in der Seitenleiste
2. Klicken Sie auf die Schaltfläche **Snippet hinzufügen**
3. Füllen Sie das Formular aus:

| Feld | Beschreibung |
|------|--------------|
| Name | Kurzer beschreibender Titel |
| Befehl | Der Shell-Befehl |
| Kategorie | Aus vordefinierten oder „Benutzerdefiniert" wählen |
| Geltungsbereich | Global, Host oder Gruppe |
| Hotkey | Optionales einzelnes Zeichen |
| Beschreibung | Erklären, was der Befehl tut |
| Tags | Schlüsselwörter für die Suchbarkeit |

### Beispiel-Snippets

| Name | Befehl | Kategorie | Hotkey |
|------|--------|-----------|--------|
| Festplattennutzung | `df -h` | System | D |
| Alle Docker auflisten | `docker ps -a` | Docker | P |
| Git Status | `git status` | Git | G |
| Ports prüfen | `netstat -tulpn` | Netzwerk | N |
| Logs verfolgen | `tail -f /var/log/syslog` | System | L |

---

## Hotkeys verwenden

### Tastenkürzel

| Plattform | Tastenkürzel-Format |
|-----------|---------------------|
| **Windows/Linux** | `Strg + Shift + [Taste]` |
| **macOS** | `Cmd + Shift + [Taste]` |

### Reservierte Tasten

Einige Tasten sind reserviert und können nicht verwendet werden:

| Taste | Reserviert für |
|-------|----------------|
| A | Neuen Host hinzufügen |
| C | Kopieren |
| L | LAN-Transfer umschalten |
| O | Terminal/SFTP wechseln |
| T | Lokales Terminal |
| V | Einfügen |

---

## Kategorien

| Symbol | Kategorie | Verwendung für |
|--------|-----------|----------------|
| 🖥️ | System | OS-Befehle, Dienste, Logs |
| 🐳 | Docker | Container-Verwaltung |
| 📦 | Git | Versionskontrolle |
| 🌐 | Netzwerk | Ports, Verbindungen, DNS |
| 📁 | Dateien | Dateioperationen |
| 🗄️ | Datenbank | Datenbankbefehle |
| ✨ | Benutzerdefiniert | Alles andere |

---

## Geltungsbereiche

### Globaler Geltungsbereich
Sichtbar bei **allen** SSH-Verbindungen. Am besten für universelle Befehle.

### Host-Geltungsbereich
Nur auf einem **bestimmten Server** sichtbar. Am besten für serverspezifische Befehle.

### Gruppen-Geltungsbereich
Sichtbar auf allen Servern in einer **bestimmten Gruppe**. Am besten für umgebungsspezifische Befehle.

---

## Tipps & Best Practices

1. **Variablen verwenden** - Platzhalter für variable Teile lassen: `tail -f [LOG_PFAD]`
2. **Befehle verketten** - Mehrere Befehle kombinieren: `cd /var/www && git pull && systemctl restart app`
3. **Mit Tags organisieren** - Tags wie `prod`, `dev`, `dringend` für einfacheres Filtern hinzufügen
4. **Snippets sichern** - In verschlüsselten .marix-Backups enthalten

---

## Datenspeicherung

- Lokal im Browser-localStorage gespeichert
- In verschlüsselten Backups (.marix-Dateien) enthalten
- Mit Google Drive synchronisiert (falls aktiviert)
- Keine Cloud-Speicherung ohne explizite Backup-Aktion

---

## Fehlerbehebung

| Problem | Lösung |
|---------|--------|
| Hotkey funktioniert nicht | Auf Konflikte prüfen, sicherstellen dass Terminal fokussiert ist |
| Snippet erscheint nicht | Geltungsbereich zur aktuellen Verbindung prüfen |
| Befehl wird nicht ausgeführt | Terminal-Status, Berechtigungsprobleme prüfen |
