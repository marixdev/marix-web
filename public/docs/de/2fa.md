# Zwei-Faktor-Authentifizierung (2FA/TOTP)

Integrierter TOTP-Code-Generator, ähnlich wie Google Authenticator. Speichern Sie Ihre 2FA-Geheimnisse und erhalten Sie Codes ohne Ihr Telefon.

## 2FA-Oberfläche

![2FA-Oberfläche](/2fa.png)

## 2FA öffnen

Klicken Sie auf **„2FA"** in der Seitenleiste.

## Neues 2FA-Konto hinzufügen

### Schritt 1: Dialog öffnen
Klicken Sie auf die Schaltfläche **„Konto hinzufügen"**

### Schritt 2: Details eingeben

| Feld | Beschreibung | Erforderlich |
|------|--------------|--------------|
| Kontoname | Bezeichnung für dieses Konto (z.B. „GitHub", „AWS") | Nein (automatisch benannt) |
| Geheimer Schlüssel | Das TOTP-Geheimnis (von der QR-Code-Einrichtungsseite) | Ja |

### Schritt 3: Speichern
Klicken Sie auf **„Hinzufügen"**

## So erhalten Sie den geheimen Schlüssel

Wenn Sie 2FA auf einer Website aktivieren:

1. Suchen Sie nach **„QR-Code kann nicht gescannt werden?"** oder **„Manuelle Eingabe"**
2. Kopieren Sie den geheimen Schlüssel (normalerweise Großbuchstaben und Zahlen)
3. Fügen Sie ihn in Marix ein

Beispielformat für den geheimen Schlüssel:
```
JBSWY3DPEHPK3PXP
```

## 2FA-Codes verwenden

1. Finden Sie Ihr Konto in der Liste
2. Der 6-stellige Code wird daneben angezeigt
3. Ein Countdown-Timer zeigt die Sekunden bis zur Code-Aktualisierung
4. Klicken Sie auf die Schaltfläche **Kopieren**, um den Code in die Zwischenablage zu kopieren

### Timer
- Codes werden alle **30 Sekunden** aktualisiert
- Ein kreisförmiger Fortschrittsanzeiger zeigt die verbleibende Zeit
- Warten Sie auf einen neuen Code, wenn der aktuelle bald abläuft

## Kontonamen bearbeiten

1. Klicken Sie auf die Schaltfläche **Bearbeiten** neben dem Konto
2. Geben Sie den neuen Namen ein
3. Drücken Sie Enter oder klicken Sie auf Speichern

## 2FA-Konto löschen

1. Klicken Sie auf die Schaltfläche **Löschen** (Papierkorb-Symbol)
2. Bestätigen Sie die Löschung

> ⚠️ **Warnung:** Das Löschen entfernt das Geheimnis. Stellen Sie sicher, dass Sie Backup-Zugang zum zugehörigen Konto haben, bevor Sie löschen.

## Gängige Dienste

Hier sind einige beliebte Dienste, die TOTP unterstützen:

| Dienst | Standort der 2FA-Einstellungen |
|--------|-------------------------------|
| GitHub | Einstellungen → Passwort und Authentifizierung |
| AWS | IAM → Sicherheitsanmeldedaten |
| Google | Google-Konto → Sicherheit |
| Microsoft | Sicherheitseinstellungen → Zweistufige Überprüfung |
| Cloudflare | Profil → Authentifizierung |
| DigitalOcean | Konto → Sicherheit |
| Linode | Mein Profil → Passwort & Authentifizierung |

## Bewährte Praktiken

1. **Sichern Sie Ihre Geheimnisse** - Bewahren Sie geheime Schlüssel sicher auf
2. **Bewahren Sie Wiederherstellungscodes auf** - Speichern Sie die von Diensten bereitgestellten Backup-Codes
3. **Verwenden Sie beschreibende Namen** - Für schnelle Identifizierung von Konten
4. **Testen Sie Codes, bevor Sie sich auf sie verlassen** - Überprüfen Sie, ob sie sofort nach dem Hinzufügen funktionieren
5. **Zeitsynchronisation** - Stellen Sie sicher, dass die Uhr Ihres Computers genau ist

## Fehlerbehebung

### Codes funktionieren nicht

1. **Zeitsynchronisation prüfen** - Die Uhr Ihres Computers muss genau sein
2. **Geheimen Schlüssel überprüfen** - Erneut eingeben, falls falsch kopiert
3. **Auf nächsten Code warten** - Der aktuelle Code läuft möglicherweise ab

### Zugang verloren

Wenn Sie den Zugang zu Marix verlieren:
1. Verwenden Sie **Wiederherstellungscodes**, die vom Dienst bereitgestellt wurden
2. Kontaktieren Sie den Support des Dienstes zur Kontowiederherstellung
3. This is why backing up secrets is important!
