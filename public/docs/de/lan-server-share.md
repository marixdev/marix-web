# LAN-Serverfreigabe

Teilen Sie Ihre Serverkonfigurationen mit anderen Marix-Benutzern im selben lokalen Netzwerk.

## LAN-Serverfreigabe-Oberfläche

![LAN-Serverfreigabe-Oberfläche](/servershare.png)

## Voraussetzungen

> ⚠️ **Wichtig:** Sowohl Sender als auch Empfänger müssen **LAN-Erkennung aktiviert** haben.
> 
> Klicken Sie auf die 🌐-Schaltfläche in der Kopfleiste oder verwenden Sie `Strg+Shift+L` zum Umschalten.

- Beide Geräte im selben Netzwerk (WLAN/LAN)
- LAN-Erkennung auf beiden Geräten aktiviert
- Marix läuft auf beiden Geräten

## Anwendungsfälle

- Serverzugang mit Teammitgliedern teilen
- Einen neuen Computer schnell einrichten
- Konfigurationen zwischen Geräten übertragen
- Neue Teammitglieder einarbeiten

## Serverfreigabe öffnen

### Methode 1: Rechtsklick-Menü
1. Rechtsklicken Sie in der Hostliste auf einen Server
2. Wählen Sie **„Im LAN teilen"**

### Methode 2: Mehrfachauswahl
1. Halten Sie `Strg` (oder `⌘` auf Mac) und klicken Sie auf mehrere Server
2. Klicken Sie auf die erscheinende Schaltfläche **„Teilen"**
3. Oder rechtsklicken Sie und wählen Sie **„Im LAN teilen"**

## Server teilen (Sender)

### Schritt 1: LAN-Erkennung aktivieren
Klicken Sie auf das **🌐**-Symbol (Globus) in der Kopfleiste.

### Schritt 2: Server auswählen
- Rechtsklick → „Im LAN teilen" für einzelnen Server
- Oder mehrere Server auswählen und dann auf Teilen klicken

### Schritt 3: Serverauswahl-Dialog
- Ausgewählte Server überprüfen
- Klicken Sie auf **„Alle auswählen"**, um alle Server zu teilen
- Klicken Sie auf **„Löschen"**, um alle abzuwählen
- Klicken Sie auf Tags, um schnell Server mit diesem Tag auszuwählen

### Schritt 4: Auf „Teilen"-Schaltfläche klicken

### Schritt 5: Optionen konfigurieren

| Option | Beschreibung |
|--------|--------------|
| Sensible Daten einschließen ✅ | Passwörter und private Schlüssel teilen |
| Sensible Daten einschließen ❌ | Passwörter/Schlüssel entfernen (Empfänger gibt sie manuell ein) |

### Schritt 6: Kopplungscode notieren
Der 6-stellige **Kopplungscode** ist 5 Minuten gültig.

### Schritt 7: Code teilen
Teilen Sie dem Empfänger Ihren Kopplungscode mit.

### Schritt 8: Senden
Klicken Sie auf **„Im LAN teilen"**

Status zeigt: „X Server gesendet. Warte auf Empfänger..."

## Server empfangen (Empfänger)

### Schritt 1: LAN-Erkennung aktivieren
Klicken Sie auf das **🌐**-Symbol (Globus) in der Kopfleiste.

### Schritt 2: Auf Benachrichtigung warten
Ein Popup erscheint, wenn jemand Ihnen Server sendet.

Oder gehen Sie zu Hosts → Rechtsklick auf leeren Bereich → „Geteilte Server empfangen"

### Schritt 3: Kopplungscode eingeben
Geben Sie den 6-stelligen Code vom Sender ein.

### Schritt 4: Importieren
Klicken Sie auf **„Entschlüsseln & Importieren"**

### Schritt 5: Fertig!
Server werden importiert mit:
- Allen ursprünglichen Einstellungen
- Einem automatisch hinzugefügten **„LAN-Import"**-Tag
- Passwörtern/Schlüsseln (falls der Sender sie eingeschlossen hat)

Status zeigt: „X Server erfolgreich importiert!"

## Sicherheit

- Alle Übertragungen sind **verschlüsselt**
- 6-stelliger Kopplungscode erforderlich
- Codes laufen nach 5 Minuten ab
- Keine Daten gehen über externe Server
- Direkte Gerät-zu-Gerät-Übertragung

## Fehlerbehebung

### Keine Geräte erscheinen

1. Beide Geräte im **selben Netzwerk** (WLAN/LAN)
2. **LAN-Erkennung AN** auf beiden Geräten
3. Klicken Sie auf „Aktualisieren" zum erneuten Scannen
4. Prüfen Sie, ob die Firewall Marix nicht blockiert

### Kopplungscode abgelaufen

- Codes laufen nach 5 Minuten ab
- Sender kann auf „Neu generieren" klicken für einen neuen Code

### „Falscher Kopplungscode"-Fehler

- Überprüfen Sie den Code mit dem Sender
- Codes unterscheiden Groß- und Kleinschreibung
- Fordern Sie bei Bedarf einen neuen Code an

### Servern fehlen Passwörter

- Sender hat möglicherweise „Sensible Daten einschließen" deaktiviert
- Geben Sie Passwörter nach dem Import manuell ein
- Bitten Sie den Sender, mit aktivierten sensiblen Daten erneut zu teilen
