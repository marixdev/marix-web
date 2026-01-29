# Bekannte Hosts

Bekannte Hosts speichert Server-Fingerabdrücke, um zu erkennen, ob sich die Identität eines Servers ändert (potenzielles Sicherheitsproblem).

## Bekannte-Hosts-Oberfläche

![Bekannte-Hosts-Oberfläche](/knowhosts.png)

## Was sind Bekannte Hosts?

Wenn Sie sich zum ersten Mal mit einem SSH-Server verbinden, präsentiert der Server seinen Fingerabdruck. Marix speichert diesen, um:
- Die Serveridentität bei zukünftigen Verbindungen zu überprüfen
- Man-in-the-Middle-Angriffe zu erkennen
- Sie zu warnen, wenn sich ein Serverschlüssel unerwartet ändert

## Bekannte Hosts öffnen

Klicken Sie auf **„Bekannte Hosts"** in der Seitenleiste.

## Bekannte Hosts anzeigen

Die Liste zeigt:

| Spalte | Beschreibung |
|--------|--------------|
| Host | Server-Hostname/IP |
| Port | SSH-Port |
| Schlüsseltyp | SSH-Schlüsselalgorithmus (ED25519, RSA, ECDSA) |
| Fingerabdruck | Eindeutiger Server-Identifikator |
| Hinzugefügt | Wann der Host als vertrauenswürdig eingestuft wurde |

## Bekannte Hosts durchsuchen

1. Verwenden Sie das Suchfeld oben
2. Suchen Sie nach Hostname, IP oder Fingerabdruck

## Nach Schlüsseltyp filtern

1. Verwenden Sie den Dropdown-Filter
2. Wählen Sie: Alle, ED25519, RSA oder ECDSA

## Host vom Server importieren

Manuell den Fingerabdruck eines Servers hinzufügen, ohne zu verbinden:

1. Klicken Sie auf die Schaltfläche **„Von Host importieren"**
2. Geben Sie ein:
   - Hostname oder IP
   - Port (Standard 22)
3. Klicken Sie auf **„Importieren"**
4. Der Fingerabdruck des Servers wird abgerufen und gespeichert

## Bekannten Host entfernen

1. Finden Sie den Host in der Liste
2. Klicken Sie auf die Schaltfläche **Löschen** (Papierkorb-Symbol)
3. Bestätigen Sie die Entfernung

### Wann entfernen

- Server wurde neu installiert und hat einen neuen Schlüssel
- Server-IP/Hostname hat sich geändert
- Sie verbinden sich nicht mehr mit diesem Server

## Host-Schlüsselüberprüfung

Beim Verbinden mit einem neuen Server:
1. Marix ruft den Fingerabdruck des Servers ab
2. Sie werden gebeten, ihn zu überprüfen und zu vertrauen
3. Nach dem Akzeptieren wird er in Bekannte Hosts gespeichert
4. Zukünftige Verbindungen werden automatisch überprüft

## Sicherheitswarnungen

### „Host-Schlüssel hat sich geändert"
Diese Warnung erscheint, wenn sich der Fingerabdruck eines Servers vom gespeicherten unterscheidet.

**Mögliche Ursachen:**
- Server wurde neu installiert
- SSH-Schlüssel des Servers wurde neu generiert
- ⚠️ **Man-in-the-Middle-Angriff** (selten, aber möglich)

**Was zu tun ist:**
1. Überprüfen Sie mit dem Serveradministrator, ob sich der Schlüssel legitim geändert hat
2. Wenn bestätigt, entfernen Sie den alten Eintrag aus Bekannte Hosts
3. Verbinden Sie erneut und akzeptieren Sie den neuen Fingerabdruck
4. Bei Verdacht nicht verbinden

## Bewährte Praktiken

1. **Fingerabdrücke überprüfen**, wenn Sie sich mit neuen Servern verbinden
2. **Warnungen nicht ignorieren** bei geänderten Host-Schlüsseln
3. **Regelmäßig überprüfen** Sie Ihre Liste der Bekannten Hosts
4. **Alte Einträge entfernen** für Server, die Sie nicht mehr verwenden
