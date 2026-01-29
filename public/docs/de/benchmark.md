# Server-Benchmark

Testen und messen Sie die Leistung Ihres Servers direkt vom SSH-Terminal mit umfassenden System-, Festplatten- und Netzwerk-Benchmarks.

## Server-Benchmark-Oberfläche

![Server-Benchmark-Oberfläche](/benchmark.png)

## Übersicht

Die Server-Benchmark-Funktion bietet eine vollständige Leistungsanalyse Ihres Remote-Servers, einschließlich:

- **Systeminformationen**: Hardware- und Software-Details
- **Festplattenleistung**: Sequenzielle Lese-/Schreibgeschwindigkeiten, I/O-Latenz und zufällige IOPS
- **Netzwerkgeschwindigkeit**: Multi-Region-Geschwindigkeitstests mit Download-, Upload- und Latenzmessungen

## Verwendung

### Benchmark starten

1. Verbinden Sie sich über SSH mit einem Server
2. Klicken Sie auf die Schaltfläche **📊 Benchmark** in der Terminal-Fußzeile
3. (Optional) Aktivieren Sie **"Upload to paste.dev"**, um Ergebnisse online zu teilen
4. Klicken Sie auf **Start Benchmark**

### Benchmark-Phasen

Der Benchmark läuft in 4 Phasen:

| Phase | Beschreibung | Dauer |
|-------|--------------|-------|
| 1. Systeminfo | Erfasst OS, CPU, RAM, Festplatteninfo | ~2 Sekunden |
| 2. Festplattentest | Führt dd, ioping und fio Tests aus | ~45 Sekunden |
| 3. Netzwerktest | Testet Geschwindigkeit zu 18 globalen Regionen | ~3-5 Minuten |
| 4. Abgeschlossen | Zeigt Ergebnisse und Exportoptionen | - |

## Benchmark-Details

### Systeminformationen

Erfasste Daten umfassen:

| Feld | Beschreibung |
|------|--------------|
| OS | Betriebssystemname und -version |
| Kernel | Linux-Kernel-Version |
| Architecture | CPU-Architektur (x86_64, arm64, etc.) |
| Hostname | Server-Hostname |
| CPU Model | Prozessorname und Spezifikationen |
| CPU Cores | Anzahl der CPU-Kerne |
| CPU Frequency | Aktuelle CPU-Frequenz |
| Memory | Verwendet / Gesamt RAM |
| Swap | Verwendet / Gesamt Swap-Speicher |
| Disk | Verwendet / Gesamt Festplattenspeicher |
| Uptime | Server-Betriebszeit |
| Load Average | 1/5/15 Minuten Lastdurchschnitt |
| Virtualization | VM-Typ (KVM, VMware, OpenVZ, etc.) |

### Festplattenleistung

#### Sequenzielles Schreiben/Lesen (dd)

- **Methode**: `dd if=/dev/zero of=test bs=64k count=16k conv=fdatasync`
- **Durchläufe**: 3-mal, für Genauigkeit gemittelt
- **Testort**: Home-Verzeichnis (nicht /tmp, um tmpfs zu vermeiden)
- **Misst**: Sequenziellen Durchsatz in MB/s oder GB/s

#### I/O-Latenz (ioping)

- **Methode**: `ioping -c 10 -q /`
- **Misst**: Festplatten-I/O-Antwortzeit in Mikrosekunden
- **Ziel**: Root-Dateisystem für echte Festplattenlatenz

#### Zufällige 4K IOPS (fio)

- **Methode**: fio mit 4K zufälligem Lesen/Schreiben, Warteschlangentiefe 64
- **Laufzeit**: 30 Sekunden
- **Misst**:
  - Read IOPS
  - Write IOPS
  - Read Bandwidth
  - Write Bandwidth

> **Hinweis**: Wenn `fio` oder `ioping` nicht installiert sind, versucht der Benchmark, sie automatisch zu installieren.

### Netzwerkgeschwindigkeit

Tests werden gegen Speedtest.net-Server in 18 globalen Regionen durchgeführt:

| Region | Standorte |
|--------|-----------|
| Asien | Singapur, Tokio, Hongkong, Seoul, Mumbai |
| Europa | London, Frankfurt, Paris, Amsterdam |
| Amerika | Los Angeles, New York, Chicago, Toronto, São Paulo |
| Ozeanien | Sydney, Auckland |
| Naher Osten/Afrika | Dubai, Johannesburg |

Für jeden Server misst der Benchmark:
- **Download-Geschwindigkeit**: MB/s oder Gbps
- **Upload-Geschwindigkeit**: MB/s oder Gbps
- **Latenz**: Round-Trip-Zeit in Millisekunden

## Exportoptionen

Nach Abschluss des Benchmarks können Sie Ergebnisse in mehreren Formaten exportieren:

### 🌐 HTML

Eigenständige HTML-Datei mit formatiertem Layout. Funktionen:
- Dunkles Theme-Design
- Responsives Layout
- Alle Benchmark-Daten in Karten
- Fußzeile mit marix.dev und GitHub-Links

### 📋 JSON

Strukturierte JSON-Daten mit:
- Vollständige Benchmark-Ergebnisse
- Zeitstempel
- Meta-Objekt mit Website- und GitHub-Links
- Maschinenlesbares Format für Automatisierung

### 🖼️ PNG

Hochauflösender Bild-Screenshot:
- 2-fache Skalierung für Retina-Displays
- RGB-Farben (html2canvas-kompatibel)
- Alle Abschnitte enthalten
- Fußzeile mit Branding

### 📄 TXT

ASCII-Art-formatierte Textdatei:
- Box-Zeichen für Tabellen
- Kopieren-Einfügen-freundlich
- Terminal-Stil-Ausgabe
- Fußzeile mit Links

## paste.dev-Integration

Teilen Sie Ihre Benchmark-Ergebnisse mit einem Klick online:

### Funktionsweise

1. Aktivieren Sie **"Upload to paste.dev"** vor dem Start des Benchmarks
2. Führen Sie den Benchmark aus
3. Nach Abschluss werden die Ergebnisse automatisch hochgeladen
4. Ein teilbarer Link erscheint mit **Copy** und **Open** Schaltflächen

### Funktionen

- **Automatischer Upload**: TXT-Format wird hochgeladen, wenn der Benchmark abgeschlossen ist
- **Link kopieren**: Klicken Sie auf 📋 Copy, um die URL in die Zwischenablage zu kopieren
- **Link öffnen**: Klicken Sie auf 🔗 Open, um im Browser anzuzeigen
- **Öffentliches Teilen**: Jeder mit dem Link kann die Ergebnisse sehen

## Anforderungen

### Serveranforderungen

| Werkzeug | Zweck | Auto-Installation |
|----------|-------|-------------------|
| `dd` | Festplatten-Schreib-/Lesegeschwindigkeit | Normalerweise vorinstalliert |
| `ioping` | I/O-Latenzmessung | ✅ Ja |
| `fio` | Zufällige IOPS-Tests | ✅ Ja |
| `curl` | Netzwerkgeschwindigkeitstests | Normalerweise vorinstalliert |

### Unterstützte Paketmanager

Auto-Installation funktioniert mit:
- **apt** (Debian, Ubuntu)
- **yum** (CentOS, RHEL)
- **dnf** (Fedora)
- **pacman** (Arch Linux)
- **apk** (Alpine Linux)
- **zypper** (openSUSE)

## Fehlerbehebung

### Festplattentest zeigt unrealistische Geschwindigkeiten (5+ GB/s)

**Ursache**: `/tmp` ist als tmpfs (RAM-Disk) gemountet

**Lösung**: Der Benchmark erkennt dies automatisch und verwendet stattdessen das Home-Verzeichnis.

### Netzwerktest dauert zu lange

**Ursache**: Einige Regionen können langsam oder nicht erreichbar sein

**Lösung**: Der Benchmark testet mehrere Regionen. Langsame Regionen haben nach 30 Sekunden ein Timeout.

### "Permission Denied" bei der Installation von Tools

**Ursache**: Benutzer hat keinen sudo-Zugriff

**Lösung**: Bitten Sie Ihren Serveradministrator, `fio` und `ioping` zu installieren:

```bash
# Debian/Ubuntu
sudo apt install fio ioping

# CentOS/RHEL
sudo yum install fio ioping

# Fedora
sudo dnf install fio ioping
```

### PNG-Export-Fehler "oklch"

**Ursache**: html2canvas unterstützt das oklch-Farbformat nicht

**Lösung**: In v1.0.19 behoben. PNG verwendet jetzt RGB-Hex-Farben.

## Beispielausgabe

### TXT-Format-Beispiel

```
════════════════════════════════════════════════════════════
  MARIX SERVER BENCHMARK - my-server.com
  1/29/2026, 10:30:45 AM
════════════════════════════════════════════════════════════

┌────────────────────────────────────────────────────────────┐
│                    SYSTEM INFORMATION                      │
└────────────────────────────────────────────────────────────┘
  OS            : Ubuntu 22.04.3 LTS
  CPU           : AMD EPYC 7B13 64-Core Processor
  CPU Cores     : 4
  Memory        : 2.1 GB / 8.0 GB (26%)
  Disk          : 45 GB / 160 GB (28%)
  Virtualization: KVM

┌────────────────────────────────────────────────────────────┐
│                    DISK PERFORMANCE                        │
└────────────────────────────────────────────────────────────┘
  Sequential Write : 580 MB/s
  Sequential Read  : 1.2 GB/s
  I/O Latency      : 227 µs

  Random 4K IOPS (fio):
    Read IOPS   : 45,230
    Write IOPS  : 15,076
    Read BW     : 176.7 MB/s
    Write BW    : 58.9 MB/s

┌────────────────────────────────────────────────────────────┐
│                    NETWORK SPEED                           │
└────────────────────────────────────────────────────────────┘
  Singapore    : ↓ 892 Mbps  ↑ 456 Mbps  (12ms)
  Tokyo        : ↓ 756 Mbps  ↑ 389 Mbps  (45ms)
  Frankfurt    : ↓ 234 Mbps  ↑ 178 Mbps  (156ms)
  ...

────────────────────────────────────────────────────────────
  marix.dev | https://github.com/marixdev/marix
  Generated by Marix SSH Client v1.0.19
────────────────────────────────────────────────────────────
```

## Sicherheitshinweise

- Der Benchmark führt Befehle auf dem Remote-Server über SSH aus
- Es werden keine Daten an externe Server gesendet, außer an Speedtest.net (für Geschwindigkeitstests)
- paste.dev-Uploads sind optional und werden vom Benutzer initiiert
- Temporäre Testdateien werden nach dem Benchmark automatisch bereinigt
