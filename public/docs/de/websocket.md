# WebSocket-Client

Verbinden Sie sich mit WebSocket-Servern für bidirektionale Echtzeit-Kommunikation. Perfekt zum Testen von APIs, Debuggen von Live-Feeds oder Überwachen von WebSocket-Diensten.

## WebSocket-Client-Oberfläche

![WebSocket-Oberfläche](/websocket.png)

## WebSocket-Server hinzufügen

1. Klicken Sie auf **„Neuen Host hinzufügen"**
2. Wählen Sie **Protokoll**: WebSocket (WSS)
3. Füllen Sie aus:
   - **Name**: Anzeigename für die Verbindung
   - **URL**: WebSocket-Serveradresse
   - **Header**: (optional) Benutzerdefinierte Header für Authentifizierung
4. Klicken Sie auf **Erstellen**

### URL-Format

| Format | Beispiel |
|--------|----------|
| Mit Protokoll | `wss://api.example.com/ws` |
| Ohne Protokoll | `api.example.com/ws` (fügt automatisch `wss://` hinzu) |
| Mit Port | `wss://localhost:8080/socket` |
| Mit Pfad | `wss://stream.example.com/v1/feed` |

> **Hinweis:** Wenn kein Protokoll angegeben ist, fügt Marix automatisch `wss://` für sichere WebSocket-Verbindungen hinzu.

## Verbinden

1. Doppelklicken Sie auf den WebSocket-Server in der Hostliste
2. Warten Sie auf Verbindung (Timeout: 15 Sekunden)
3. Statusindikator zeigt Verbindungsstatus

### Verbindungsstatus

| Status | Indikator | Beschreibung |
|--------|-----------|--------------|
| Verbindungsaufbau | 🟡 Gelb | Verbindung wird hergestellt |
| Verbunden | 🟢 Grün | Bereit zum Senden/Empfangen |
| Getrennt | ⚪ Grau | Verbindung geschlossen |
| Fehler | 🔴 Rot | Verbindung fehlgeschlagen |

## Nachrichten senden

1. Geben Sie Ihre Nachricht im Eingabebereich unten ein
2. Drücken Sie **Enter** oder klicken Sie auf **Senden**
3. Gesendete Nachrichten erscheinen mit ↑-Pfeil (grün)

### Unterstützte Nachrichtenformate

- Klartext
- JSON (wird für Lesbarkeit formatiert)
- Beliebige String-Daten

## Nachrichten empfangen

- Eingehende Nachrichten erscheinen automatisch mit ↓-Pfeil (lila)
- JSON-Nachrichten werden automatisch mit korrekter Einrückung formatiert
- Zeitstempel zeigt, wann jede Nachricht empfangen wurde
- Nachrichtenverlauf speichert bis zu 1000 Nachrichten pro Sitzung

## Steuerung

| Steuerung | Funktion |
|-----------|----------|
| **Senden** | Nachricht an Server senden |
| **Löschen** | Alle Nachrichten aus Ansicht löschen |
| **Trennen** | Verbindung schließen |
| **Wiederverbinden** | Nach Trennung/Fehler erneut verbinden |
| **Theme-Auswahl** | Viewer-Farbschema ändern |

## Tastenkürzel

| Tastenkürzel | Aktion |
|--------------|--------|
| `Enter` | Nachricht senden |
| `Shift+Enter` | Neue Zeile in Nachricht |

## Funktionen

### Auto-Scroll

- Standardmäßig aktiviert
- Scrollt automatisch zu neuesten Nachrichten
- Ausschalten, um ältere Nachrichten zu überprüfen
- Nachrichtenzähler unten angezeigt

### Theme-Unterstützung

- 400+ Terminal-Themes verfügbar
- Theme-Auswahl in Kopfzeile klicken
- Theme gilt für gesamten Viewer
- Farben passen sich an Hell/Dunkel-Themes an

### JSON-Formatierung

Beim Empfang von JSON-Nachrichten:
```json
{"event":"update","data":{"id":1,"value":"test"}}
```

Marix formatiert automatisch als:
```json
{
  "event": "update",
  "data": {
    "id": 1,
    "value": "test"
  }
}
```

## Anwendungsfälle

### API-Tests

WebSocket-APIs während der Entwicklung testen:
- Test-Payloads senden
- Antworten überwachen
- Verbindungsprobleme debuggen

### Live-Daten-Überwachung

Echtzeit-Feeds überwachen:
- Aktienkurs-Updates
- Chat-Anwendungen
- IoT-Sensordaten
- Spielserver-Events

### Debugging

WebSocket-Implementierungen debuggen:
- Nachrichtenformat überprüfen
- Verbindungsstabilität prüfen
- Wiederverbindungslogik testen

## Fehlerbehebung

### Verbindungs-Timeout

- URL auf Korrektheit prüfen
- Überprüfen, ob Server läuft
- Firewall/Proxy-Einstellungen prüfen
- Mit explizitem `wss://`-Protokoll versuchen

### Verbindung abgelehnt

- Server akzeptiert möglicherweise keine Verbindungen
- Falsche Portnummer
- SSL/TLS-Zertifikatprobleme
- Server erfordert Authentifizierungs-Header

### Nachrichten werden nicht gesendet

- Verbindungsstatus „Verbunden" prüfen
- Nachrichtenformat auf Server-Erwartungen überprüfen
- Server-Logs auf Fehler prüfen

### Unerwartete Trennung

- Server hat möglicherweise Verbindung geschlossen
- Netzwerkunterbrechung
- Idle-Timeout auf Serverseite
- Auf **Wiederverbinden** klicken, um Verbindung wiederherzustellen
