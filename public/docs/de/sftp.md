# SFTP-Dateimanager

SFTP (SSH File Transfer Protocol) bietet sichere Dateiübertragung über eine verschlüsselte SSH-Verbindung.

## SFTP öffnen

### Von bestehender SSH-Verbindung

1. Verbinden Sie sich mit einem SSH-Server
2. Klicken Sie auf die Schaltfläche **SFTP** oben in der Sitzung
3. Oder verwenden Sie das Tastenkürzel: `Strg+Shift+O`

### Direkte SFTP-Verbindung

1. Rechtsklicken Sie auf einen SSH-Server in der Hostliste
2. Wählen Sie **„SFTP"** aus dem Kontextmenü

## Oberflächenlayout

![SFTP-Oberfläche](/sftp.png)

## Navigationssteuerung

| Schaltfläche | Funktion |
|--------------|----------|
| ← | Im Verlauf zurück |
| → | Im Verlauf vorwärts |
| ↑ | Zum übergeordneten Verzeichnis |
| 🏠 | Zum Home-Verzeichnis |
| 🔄 | Aktuelles Verzeichnis aktualisieren |
| 🔍 | Suchen/Filtern von Dateien |
| 💾 | Laufwerk auswählen (Windows/Linux) |

## Dateioperationen

### Datei herunterladen (Remote → Lokal)

1. Navigieren Sie zur Datei im **REMOTE**-Bereich (rechts)

**Methode A: Drag & Drop**
- Klicken und ziehen Sie die Datei zum LOKAL-Bereich (links)
- Legen Sie sie im gewünschten Ordner ab

**Methode B: Rechtsklick**
- Rechtsklicken Sie auf die Datei
- Wählen Sie **„Herunterladen"**
- Datei wird in den aktuellen lokalen Ordner heruntergeladen

### Datei hochladen (Lokal → Remote)

1. Navigieren Sie zur Datei im **LOKAL**-Bereich (links)

**Methode A: Drag & Drop**
- Klicken und ziehen Sie die Datei zum REMOTE-Bereich (rechts)
- Legen Sie sie im gewünschten Ordner ab

**Methode B: Rechtsklick**
- Rechtsklicken Sie auf die Datei
- Wählen Sie **„Hochladen"**
- Datei wird in den aktuellen Remote-Ordner hochgeladen

### Neuen Ordner erstellen

1. Navigieren Sie zum Zielverzeichnis
2. Rechtsklicken Sie in den leeren Bereich
3. Wählen Sie **„Neuer Ordner"**
4. Geben Sie den Ordnernamen ein
5. Klicken Sie auf OK

### Neue Datei erstellen

1. Navigieren Sie zum Zielverzeichnis
2. Rechtsklicken Sie in den leeren Bereich
3. Wählen Sie **„Neue Datei"**
4. Geben Sie den Dateinamen ein
5. Klicken Sie auf OK (erstellt leere Datei)

### Datei oder Ordner löschen

1. Rechtsklicken Sie auf die Datei oder den Ordner
2. Wählen Sie **„Löschen"**
3. Bestätigen Sie die Löschung

### Datei oder Ordner umbenennen

1. Rechtsklicken Sie auf die Datei oder den Ordner
2. Wählen Sie **„Umbenennen"**
3. Geben Sie den neuen Namen ein
4. Klicken Sie auf OK

## Berechtigungen ändern (chmod)

1. Rechtsklicken Sie auf die Datei oder den Ordner (REMOTE-Bereich)
2. Wählen Sie **„Berechtigungen ändern"**
3. Geben Sie die Berechtigung im Oktalformat ein (z.B. `755`, `644`)
4. Klicken Sie auf OK

### Gängige Berechtigungswerte

| Wert | Bedeutung | Anwendungsfall |
|------|-----------|----------------|
| `755` | Besitzer: voll, Andere: lesen+ausführen | Ordner, ausführbare Dateien |
| `644` | Besitzer: lesen+schreiben, Andere: lesen | Normale Dateien |
| `600` | Nur Besitzer | Private Dateien, SSH-Schlüssel |
| `777` | Jeder: voller Zugriff | Nicht empfohlen |

## Remote-Dateien bearbeiten

1. Finden Sie eine Textdatei im REMOTE-Bereich
2. Doppelklicken Sie darauf (oder Rechtsklick → Bearbeiten)
3. Die Datei öffnet sich im integrierten Editor
4. Nehmen Sie Ihre Änderungen vor
5. Klicken Sie auf **Speichern** oder drücken Sie `Strg+S`
6. Die Datei wird auf dem Server gespeichert

### Unterstützte Dateitypen

**Code-Dateien:**
`.js`, `.ts`, `.py`, `.php`, `.java`, `.c`, `.cpp`, `.go`, `.rs`, `.rb`

**Konfigurationsdateien:**
`.json`, `.yml`, `.yaml`, `.toml`, `.ini`, `.conf`, `.env`

**Web-Dateien:**
`.html`, `.css`, `.scss`, `.vue`, `.svelte`

**Skripte:**
`.sh`, `.bash`, `.ps1`, `.bat`

**Sonstige:**
`.txt`, `.md`, `.log`, `Dockerfile`, `Makefile`

## Dateien komprimieren

Archive aus Dateien oder Ordnern auf dem Remote-Server erstellen:

1. Rechtsklicken Sie auf die Datei oder den Ordner (REMOTE-Bereich)
2. Fahren Sie über **„Komprimieren"**
3. Wählen Sie das Format:
   - **ZIP** - Universal, funktioniert überall
   - **TAR.GZ** - Am besten für Linux/Unix
   - **TAR** - Unkomprimiertes Archiv

Das Archiv wird im selben Verzeichnis erstellt.

## Archive extrahieren

Komprimierte Dateien auf dem Remote-Server extrahieren:

1. Rechtsklicken Sie auf eine Archivdatei (REMOTE-Bereich)
2. Wählen Sie **„Hier extrahieren"**
3. Dateien werden in das aktuelle Verzeichnis extrahiert

### Unterstützte Archivformate

| Format | Erweiterungen |
|--------|---------------|
| ZIP | `.zip` |
| TAR | `.tar`, `.tar.gz`, `.tgz`, `.tar.bz2`, `.tar.xz` |
| GZIP | `.gz` |
| BZIP2 | `.bz2` |
| XZ | `.xz` |
| 7-Zip | `.7z` |
| RAR | `.rar` |

> **Hinweis:** Die Extraktion erfordert die entsprechenden Tools auf dem Server (unzip, tar, 7z, unrar).

## Dateieigenschaften

Detaillierte Informationen über Dateien und Ordner anzeigen:

1. Rechtsklicken Sie auf die Datei oder den Ordner
2. Wählen Sie **„Eigenschaften"**
3. Details anzeigen:

| Eigenschaft | Beschreibung |
|-------------|--------------|
| Name | Datei- oder Ordnername |
| Pfad | Vollständiger Pfadstandort |
| Größe | Dateigröße in Bytes/KB/MB/GB |
| Typ | Datei oder Verzeichnis |
| Berechtigungen | Lesen/Schreiben/Ausführen (z.B. 755) |
| Besitzer | Benutzerbesitzer (nur remote) |
| Gruppe | Gruppenbesitzer (nur remote) |
| Geändert | Letztes Änderungsdatum |
| Erstellt | Erstellungsdatum (falls verfügbar) |
| Zugegriffen | Letztes Zugriffsdatum |

## Übertragungswarteschlange

Bei der Übertragung mehrerer Dateien:
- Fortschrittsbalken zeigt Gesamtfortschritt
- Fortschritt einzelner Dateien wird angezeigt
- Klicken Sie auf ✕, um eine Übertragung abzubrechen
- Fehlgeschlagene Übertragungen können wiederholt werden

## Tastenkürzel

| Tastenkürzel | Aktion |
|--------------|--------|
| `Strg+Shift+O` | Terminal/SFTP umschalten |
| `F2` | Ausgewähltes umbenennen |
| `Entf` | Ausgewähltes löschen |
| `Strg+C` | Pfad kopieren |
| `Strg+R` | Verzeichnis aktualisieren |

## Tipps

- **Ganze Ordner ziehen**, um rekursiv zu übertragen
- **Doppelklicken** Sie auf einen Ordner, um ihn zu öffnen
- Verwenden Sie **Suchen/Filtern**, um Dateien schnell zu finden
- **Überschreibungsbestätigung** verhindert versehentlichen Datenverlust
