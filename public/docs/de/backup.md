# Sicherung & Wiederherstellung

Schützen Sie Ihre Daten mit verschlüsselten Sicherungen. Marix unterstützt 6 Backup-Anbieter, alle mit Argon2id-Verschlüsselung.

> 💡 **Tipp:** Sobald Sie ein Cloud-Konto für die Sicherung verbunden haben, müssen Sie sich für die Wiederherstellung auf demselben Gerät nicht erneut verbinden. Ihre Authentifizierung wird lokal gespeichert.

## Sicherungs- & Wiederherstellungs-Oberfläche

### Sicherung
![Sicherungs-Oberfläche](/backup.png)

### Wiederherstellung
![Wiederherstellungs-Oberfläche](/restore.png)

## Was wird gesichert

- Alle Server und Anmeldedaten (Passwörter, private Schlüssel)
- SSH-Schlüssel aus dem Schlüsselbund
- Port-Weiterleitungskonfigurationen
- 2FA/TOTP-Geheimnisse
- Anwendungseinstellungen
- Cloudflare API-Token

## Passwortanforderungen

| Anforderung | Beschreibung |
|-------------|--------------|
| Länge | Mindestens 10 Zeichen |
| Großbuchstaben | Großbuchstaben enthalten |
| Kleinbuchstaben | Kleinbuchstaben enthalten |
| Zahlen | Mindestens eine Zahl enthalten |
| Sonderzeichen | Sonderzeichen enthalten |

> ⚠️ **Warnung:** Wir können Ihr Passwort nicht wiederherstellen. Wenn Sie es vergessen, ist Ihre Sicherung dauerhaft unzugänglich.

## Lokale Sicherung

Speichern Sie eine verschlüsselte Sicherungsdatei auf Ihrem Computer.

### Lokale Sicherung erstellen

1. Gehen Sie zu **Einstellungen** → Klicken Sie auf **„Sicherung erstellen"**
2. Wählen Sie die Registerkarte **Lokal** (Ordner-Symbol)
3. Geben Sie ein **starkes Passwort** ein (10+ Zeichen)
4. Bestätigen Sie das Passwort
5. Klicken Sie auf **„Sicherung erstellen"**
6. Wählen Sie, wo die `.marix`-Datei gespeichert werden soll
7. Bewahren Sie diese Datei sicher auf

### Aus lokaler Sicherung wiederherstellen

1. Gehen Sie zu **Einstellungen** → Klicken Sie auf **„Sicherung wiederherstellen"**
2. Wählen Sie die Registerkarte **Lokal**
3. Klicken Sie auf **„Datei auswählen"** und wählen Sie Ihre `.marix`-Sicherungsdatei
4. Geben Sie das **Passwort** ein, das Sie beim Erstellen der Sicherung verwendet haben
5. Klicken Sie auf **„Wiederherstellen"**
6. Die Anwendung startet mit allen wiederhergestellten Daten neu

## Google Drive

Synchronisieren Sie Ihre Sicherung mit Google Drive.

### Verbinden

1. Wählen Sie die Registerkarte **Google Drive**
2. Klicken Sie auf **„Verbinden"**
3. Melden Sie sich bei Ihrem Google-Konto an
4. Erteilen Sie Marix die Berechtigung
5. Sie sehen „Verbunden" mit Ihrer E-Mail

### Sicherung erstellen

1. Nach dem Verbinden geben Sie ein starkes Passwort ein
2. Bestätigen Sie das Passwort
3. Klicken Sie auf **„Sicherung erstellen"**
4. Status zeigt: „Sicherung erfolgreich erstellt"

### Wiederherstellen

1. Wenn bereits verbunden, wird Ihr Konto gespeichert
2. Wenn eine Sicherung existiert, sehen Sie „Letzte Sicherung: [Datum]"
3. Geben Sie das Passwort ein
4. Klicken Sie auf **„Wiederherstellen"**

## GitHub

Speichern Sie Ihre Sicherung in einem privaten GitHub Gist.

### Verbinden

1. Wählen Sie die Registerkarte **GitHub**
2. Klicken Sie auf **„Verbinden"**
3. Ein **Gerätecode** erscheint (z.B. `ABCD-1234`)
4. Gehen Sie zu: https://github.com/login/device
5. Geben Sie den Code ein
6. Autorisieren Sie Marix

### Sicherung erstellen

1. Geben Sie ein starkes Passwort ein
2. Bestätigen Sie das Passwort
3. Klicken Sie auf **„Sicherung erstellen"**
4. Die Sicherung wird als privates Gist gespeichert

### Wiederherstellen

1. Wenn bereits verbunden, wird Ihr Konto gespeichert
2. Wenn eine Sicherung existiert, sehen Sie „Letzte Sicherung: [Datum]"
3. Geben Sie das Passwort ein
4. Klicken Sie auf **„Wiederherstellen"**

### Wo ist meine Sicherung?

Gehen Sie zu https://gist.github.com → Ihre privaten Gists → Suchen Sie nach „marix-backup"

## GitLab

Speichern Sie Ihre Sicherung in einem GitLab-Snippet.

### Verbinden

1. Wählen Sie die Registerkarte **GitLab**
2. Klicken Sie auf **„Verbinden"**
3. Melden Sie sich bei GitLab an
4. Autorisieren Sie Marix

### Sicherung erstellen

1. Geben Sie ein starkes Passwort ein
2. Bestätigen Sie das Passwort
3. Klicken Sie auf **„Sicherung erstellen"**
4. Die Sicherung wird als privates Snippet gespeichert

### Wiederherstellen

1. Wenn bereits verbunden, wird Ihr Konto gespeichert
2. Wenn eine Sicherung existiert, sehen Sie „Letzte Sicherung: [Datum]"
3. Geben Sie das Passwort ein
4. Klicken Sie auf **„Wiederherstellen"**

## Box.net

Speichern Sie Ihre Sicherung im Box-Cloud-Speicher.

### Verbinden

1. Wählen Sie die Registerkarte **Box.net**
2. Klicken Sie auf **„Mit Box.net verbinden"**
3. Melden Sie sich bei Ihrem Box.net-Konto an
4. Autorisieren Sie Marix

### Sicherung erstellen

1. Geben Sie ein starkes Passwort ein
2. Bestätigen Sie das Passwort
3. Klicken Sie auf **„Sicherung erstellen"**

### Wiederherstellen

1. Wenn bereits verbunden, wird Ihr Konto gespeichert
2. Wenn eine Sicherung existiert, sehen Sie „Letzte Sicherung: [Datum]"
3. Geben Sie das Passwort ein
4. Klicken Sie auf **„Wiederherstellen"**

## OneDrive

Synchronisieren Sie Ihre Sicherung mit Microsoft OneDrive.

### Verbinden

1. Wählen Sie die Registerkarte **OneDrive**
2. Klicken Sie auf **„Verbinden"**
3. Melden Sie sich bei Ihrem Microsoft-Konto an
4. Erteilen Sie Marix die Berechtigung
5. Sie sehen „Verbunden" mit Ihrer E-Mail

### Sicherung erstellen

1. Nach dem Verbinden geben Sie ein starkes Passwort ein
2. Bestätigen Sie das Passwort
3. Klicken Sie auf **„Sicherung erstellen"**
4. Status zeigt: „Sicherung erfolgreich erstellt"

### Wiederherstellen

1. Wenn bereits verbunden, wird Ihr Konto gespeichert
2. Wenn eine Sicherung existiert, sehen Sie „Letzte Sicherung: [Datum]"
3. Geben Sie das Passwort ein
4. Klicken Sie auf **„Wiederherstellen"**

## Anbietervergleich

| Anbieter | Speicherort | Vorteile | Nachteile |
|----------|-------------|----------|-----------|
| **Lokal** | Ihr Computer | Volle Kontrolle, offline | Datei muss manuell verwaltet werden |
| **Google Drive** | Google-Cloud | Auto-Sync, weit verbreitet | Erfordert Google-Konto |
| **OneDrive** | Microsoft-Cloud | In Windows integriert | Erfordert Microsoft-Konto |
| **GitHub** | GitHub Gist | Kostenlos, Versionskontrolle | Erfordert GitHub-Konto |
| **GitLab** | GitLab-Snippet | Kostenlos, Self-Hosted-Option | Erfordert GitLab-Konto |
| **Box.net** | Box.net-Cloud | Unternehmensfreundlich | Erfordert Box-Konto |

## Bewährte Praktiken

1. **Verwenden Sie verschiedene Passwörter** für verschiedene Anbieter
2. **Speichern Sie Ihr Passwort** in einem Passwort-Manager
3. **Testen Sie die Wiederherstellung** regelmäßig, um sicherzustellen, dass die Sicherung funktioniert
4. **Behalten Sie eine lokale Sicherung** als sekundäre Option
5. **Teilen Sie keine** Sicherungsdateien - sie enthalten sensible Daten
6. **Aktualisieren Sie Sicherungen** regelmäßig nach dem Hinzufügen neuer Server
