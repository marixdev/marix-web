# SSH-Terminal

Das SSH-Terminal in Marix bietet einen leistungsstarken, funktionsreichen Terminal-Emulator für Verbindungen zu Remote-Servern.

## Terminal-Oberfläche

![Terminal-Oberfläche](/terminal.png)

Nach der Verbindung über SSH sehen Sie:
- Einen vollständigen Terminal-Emulator (basierend auf xterm.js)
- Umschalt-Schaltflächen für Terminal/SFTP-Ansicht oben
- Theme-Auswahl-Dropdown
- Wiederverbinden-Schaltfläche

## Terminal-Steuerung

| Steuerung | Funktion |
|-----------|----------|
| Terminal-Schaltfläche | Zur Terminal-Ansicht wechseln |
| SFTP-Schaltfläche | Zum Dateibrowser wechseln |
| Theme-Auswahl | Terminal-Farbschema ändern |
| ↺ Wiederverbinden | Erneut verbinden bei Trennung |

## Terminal verwenden

1. **Befehle eingeben** wie in einem normalen SSH-Terminal
2. Befehle werden auf dem Remote-Server ausgeführt
3. **Text kopieren**: 
   - Text mit Maus auswählen → Kopieren
   - Oder `Strg+C` verwenden
4. **Text einfügen**: 
   - Rechtsklick → Einfügen
   - Oder `Strg+V` verwenden

## Tastenkürzel

| Tastenkürzel | Aktion |
|--------------|--------|
| `Strg+C` | Ausgewählten Text kopieren |
| `Strg+V` | Aus Zwischenablage einfügen |
| `Strg+L` | Bildschirm löschen |
| `Tab` | Befehlsverlauf öffnen/schließen |

## Terminal-Theme ändern

1. In einer Terminal-Sitzung
2. Klicken Sie auf das Theme-Auswahl-Dropdown (oben rechts im Terminal)
3. Durchsuchen Sie verfügbare Themes (400+ Optionen)
4. Klicken Sie auf ein Theme, um es sofort anzuwenden

Verfügbare Theme-Kategorien:
- Klassisch (Tango, Solarized, Monokai)
- Modern (Dracula, One Dark, Nord)
- Hoher Kontrast
- Benutzerdefinierte Farben


## Lokales Terminal öffnen

Öffnen Sie ein Terminal auf Ihrem lokalen Rechner, ohne sich mit einem Remote-Server zu verbinden:

- Tastenkürzel: `Strg+Shift+T`
- Nützlich für lokale Befehle


## Verbindungsstatus

Der Tab zeigt den Verbindungsstatus:
- **Grüner Indikator**: Verbunden
- **Roter Indikator**: Getrennt
- **Gelber Indikator**: Verbindungsaufbau

## Wiederverbinden

Wenn Ihre Verbindung abbricht:
Marix verbindet SSH automatisch neu

Das Terminal behält Ihren Scroll-Verlauf nach der Wiederverbindung bei.
