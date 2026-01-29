# SSH-Schlüsselverwaltung

Verwalten Sie SSH-Schlüssel für passwortlose Authentifizierung bei Ihren Servern.

## SSH-Schlüsselverwaltungs-Oberfläche

![SSH-Schlüsselverwaltungs-Oberfläche](/sshkey.png)

## SSH-Schlüsselverwaltung öffnen

Klicken Sie auf **„SSH Key"** im Seitenleistenmenü.

## Neuen SSH-Schlüssel generieren

### Schritt 1: Generator öffnen
Klicken Sie auf die Schaltfläche **„Schlüssel generieren"**

### Schritt 2: Details ausfüllen

| Feld | Beschreibung | Erforderlich |
|------|--------------|--------------|
| Schlüsselname | Ein Name zur Identifizierung dieses Schlüssels (z.B. „Arbeits-Laptop") | Ja |
| Schlüsseltyp | ed25519 (empfohlen), RSA oder ECDSA | Ja |
| Passphrase | Passwort zum Verschlüsseln des Schlüssels (optional aber empfohlen) | Nein |
| Kommentar | Zusätzliche Notiz (z.B. E-Mail-Adresse) | Nein |

### Schritt 3: Generieren
Klicken Sie auf **„Generieren"**

### Schritt 4: Fertig
Der Schlüssel erscheint in Ihrer Liste mit:
- Name
- Typ-Badge (ED25519, RSA, ECDSA)
- Fingerabdruck
- Erstellungsdatum

## Schlüsseltypen-Vergleich

| Typ | Sicherheit | Kompatibilität | Empfehlung |
|-----|------------|----------------|------------|
| **ED25519** | Ausgezeichnet | Moderne Server | ✅ Empfohlen |
| **RSA (4096)** | Sehr gut | Universal | Gut für ältere Systeme |
| **ECDSA** | Gut | Die meisten Server | Alternative zu ED25519 |

## Bestehenden Schlüssel importieren

### Schritt 1: Importer öffnen
Klicken Sie auf die Schaltfläche **„Schlüssel importieren"**

### Schritt 2: Schlüsseldaten bereitstellen

| Feld | Beschreibung | Erforderlich |
|------|--------------|--------------|
| Schlüsselname | Ein Name für diesen Schlüssel | Ja |
| Privater Schlüssel | Schlüsselinhalt einfügen ODER „Datei auswählen" klicken | Ja |
| Kommentar | Zusätzliche Notiz | Nein |

### Schritt 3: Importieren
Klicken Sie auf **„Importieren"**

## Öffentlichen Schlüssel anzeigen

1. Klicken Sie auf einen Schlüssel in der Liste
2. Das Detailpanel erscheint rechts
3. Klicken Sie auf **„Öffentlichen Schlüssel anzeigen"**
4. Kopieren Sie den öffentlichen Schlüssel, um ihn zu `~/.ssh/authorized_keys` Ihres Servers hinzuzufügen

## Schlüssel exportieren

1. Finden Sie den Schlüssel in der Liste
2. Klicken Sie auf die Schaltfläche **Exportieren** (oder Rechtsklick → Exportieren)
3. Wählen Sie:
   - **Nur öffentlichen Schlüssel exportieren** - Sicherer, zum Teilen
   - **Beide Schlüssel exportieren** - Privat + Öffentlich (sicher aufbewahren!)
4. Speicherort auswählen
5. Schlüssel werden als Dateien gespeichert

## Schlüssel löschen

1. Finden Sie den Schlüssel in der Liste
2. Klicken Sie auf die Schaltfläche **Löschen** (Papierkorb-Symbol)
3. Löschung bestätigen

> ⚠️ **Warnung:** Gelöschte Schlüssel können nicht wiederhergestellt werden. Stellen Sie sicher, dass Sie bei Bedarf Backups haben.

## Schlüssel für Serververbindung verwenden

1. Beim Hinzufügen/Bearbeiten eines Servers
2. Setzen Sie Authentifizierung auf **„SSH Key"**
3. Im Dropdown **„SSH Key aus Schlüsselbund"**
4. Wählen Sie Ihren importierten Schlüssel
5. Falls der Schlüssel eine Passphrase hat, geben Sie sie im Passphrase-Feld ein

## Öffentlichen Schlüssel zum Server hinzufügen

Um passwortlose Anmeldung zu ermöglichen, fügen Sie Ihren öffentlichen Schlüssel zum Server hinzu:

### Methode 1: Manuell
```bash
# Auf Ihrem lokalen Rechner, kopieren Sie den öffentlichen Schlüssel
# Dann auf dem Server:
echo "ihr-oeffentlicher-schluessel-hier" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

### Methode 2: Mit ssh-copy-id (falls verfügbar)
```bash
ssh-copy-id -i ~/.ssh/ihr_schluessel.pub benutzer@server
```

## Best Practices

1. **Verwenden Sie ED25519** für neue Schlüssel wenn möglich
2. **Fügen Sie eine Passphrase hinzu** für zusätzliche Sicherheit
3. **Verwenden Sie verschiedene Schlüssel** für verschiedene Zwecke (Arbeit, Privat)
4. **Sichern Sie Ihre Schlüssel** sicher
5. **Teilen Sie niemals private Schlüssel** - nur öffentliche Schlüssel teilen
6. **Rotieren Sie Schlüssel regelmäßig** für Sicherheit
