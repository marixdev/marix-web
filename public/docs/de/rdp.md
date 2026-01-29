# RDP-Remotedesktop

Verbinden Sie sich mit Windows-Servern und Computern über das Remote Desktop Protocol (RDP).

## RDP-Server hinzufügen

1. Klicken Sie auf **„Neuen Host hinzufügen"**
2. Wählen Sie **Protokoll**: RDP
3. Füllen Sie aus:
   - **Host/IP**: Windows-Serveradresse
   - **Port**: 3389 (Standard)
   - **Benutzername**: Windows-Benutzername
   - **Passwort**: Windows-Passwort
   - **Domain**: (optional) Windows-Domain-Name
4. Klicken Sie auf **Erstellen**

## Aus .rdp-Datei importieren

Haben Sie bereits eine RDP-Konfigurationsdatei?

1. Klicken Sie im Server-hinzufügen-Dialog auf **„.rdp-Datei importieren"**
2. Wählen Sie Ihre `.rdp`-Datei
3. Felder werden automatisch aus der Datei ausgefüllt
4. Passen Sie Einstellungen bei Bedarf an
5. Klicken Sie auf **Erstellen**

## Mit RDP verbinden

1. Doppelklicken Sie auf den RDP-Server in der Hostliste
2. Das Remotedesktop-Fenster öffnet sich innerhalb der Anwendung
3. Sie können normal mit dem Windows-Desktop interagieren

## RDP-Steuerung

| Eingabe | Verhalten |
|---------|-----------|
| **Maus** | Klicken, Ziehen, Scrollen funktioniert normal |
| **Tastatur** | Alle Tasten werden an Remote weitergeleitet |
| **Zwischenablage** | Kopieren/Einfügen zwischen lokal und remote |

## Trennen

- Klicken Sie auf × im Sitzungs-Tab
- Oder schließen Sie die Anwendung
- Der Sitzungsstatus wird auf dem Remote-Server beibehalten

## Linux-Anforderungen

RDP-Unterstützung unter Linux erfordert FreeRDP. Marix **erkennt automatisch**, ob FreeRDP installiert ist.

### Auto-Installation

Wenn FreeRDP nicht gefunden wird:
1. Eine Benachrichtigung erscheint, wenn Sie versuchen zu verbinden
2. Klicken Sie auf die Schaltfläche **„Installieren"**
3. Marix installiert FreeRDP automatisch
4. Verbinden Sie erneut nach Abschluss der Installation

### Manuelle Installation

Wenn Sie manuell installieren möchten:

**Ubuntu/Debian**
```bash
sudo apt install freerdp3-x11 xdotool
```

**Fedora**
```bash
sudo dnf install freerdp xdotool
```

**Arch Linux**
```bash
sudo pacman -S freerdp xdotool
```

## Anzeigeeinstellungen

RDP-Sitzungen passen sich Ihrer Fenstergröße an. Für beste Erfahrung:
- Maximieren Sie das Fenster für vollständige Desktop-Erfahrung
- Fenster vergrößern/verkleinern, um Remote-Auflösung anzupassen
- Vollbildmodus über Fenstersteuerung verfügbar

## Leistungstipps

- **Farbtiefe reduzieren** bei langsameren Verbindungen
- **Visuelle Effekte deaktivieren** auf der Windows-Seite
- **Kabelverbindung** verwenden für beste Leistung
- Unnötige Anwendungen auf dem Remote-Rechner schließen

## Fehlerbehebung

### Verbindung abgelehnt
- Überprüfen Sie, ob Remotedesktop in Windows aktiviert ist
- Prüfen Sie, ob die Windows-Firewall RDP erlaubt
- Bestätigen Sie den korrekten Port (Standard 3389)

### Schwarzer Bildschirm
- Warten Sie einen Moment - die erste Verbindung kann Zeit brauchen
- Versuchen Sie erneut zu verbinden
- Prüfen Sie, ob der Remote-Rechner nicht im Schlafmodus ist

### Langsame Leistung
- Bildschirmauflösung verringern
- Farbtiefe reduzieren
- Netzwerkgeschwindigkeit prüfen
- Bandbreitenintensive Anwendungen schließen

### Authentifizierung fehlgeschlagen
- Überprüfen Sie das Benutzernamenformat:
  - Lokal: `benutzername`
  - Domain: `DOMAIN\benutzername` oder `benutzername@domain.com`
- Überprüfen Sie, ob das Passwort korrekt ist
- Stellen Sie sicher, dass das Konto Remotedesktop-Zugriffsrechte hat
