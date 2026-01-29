# Mga Tala sa Server (Sticky Notes)

Nagbibigay ang Marix ng **Server Notes** na feature na nagpapahintulot sa iyo na mag-attach ng personal na mga tala sa bawat server. Kapaki-pakinabang ito para sa pagdodokumento ng mga server configuration, maintenance reminder, o mabilis na reference information.

## Interface ng Server Notes

![Server Notes Interface](/note.png)

## Mga Tampok

- **Per-Server Notes**: Ang bawat server ay maaaring magkaroon ng sariling mga tala
- **Auto-Save**: Awtomatikong nase-save ang mga pagbabago habang nagta-type ka (500ms debounce)
- **Rich Text Support**: Plain text na may line break
- **Visual Indicator**: Ang mga server na may mga tala ay nagpapakita ng filled note icon
- **Synced with Server Data**: Kasama ang mga tala sa mga server backup

## Paggamit

### Pagbukas ng mga Tala

1. Kumonekta sa isang server (SSH terminal o SFTP)
2. I-click ang **Notes** na button sa itaas na toolbar (pencil icon)
3. May lalabas na sticky note popup sa kanang-ibaba

### Pagsusulat ng mga Tala

- Mag-type lang sa textarea
- **Auto-save** ang mga tala pagkatapos ng 500ms ng walang aktibidad
- Ipinapakita ng "Saving..." indicator kapag may save na nangyayari
- Pindutin ang `Escape` o i-click sa labas para isara

### Mga Visual Indicator

| Estado ng Icon | Kahulugan |
|----------------|-----------|
| Outline (empty) | Walang tala para sa server na ito |
| Filled (solid) | May mga tala ang server |
| Amber/Yellow color | May mga tala |

## Mga Gamit

### Server Configuration

```
Web Server - Production
-----------------------
IP: 192.168.1.100
Nginx: /etc/nginx/sites-enabled/
Logs: /var/log/nginx/
SSL Cert expires: 2026-12-15
```

### Mga Maintenance Reminder

```
TODO:
- [ ] Update OpenSSL (CVE-2025-XXXX)
- [ ] Rotate database credentials
- [ ] Increase swap to 4GB
```

### Mabilis na Reference

```
Common Commands:
- Restart Nginx: sudo systemctl restart nginx
- Check disk: df -h
- View connections: netstat -tuln

Database:
- User: app_user
- Port: 5432
```

## Pag-iimbak ng Data

- Ang mga tala ay nakaimbak bilang bahagi ng server configuration
- ✅ **Kasama sa mga local backup** (Marix backup feature)
- ✅ **Kasama sa mga cloud backup** (Google Drive, Box)
- ✅ **Naka-encrypt** kapag gumagamit ng backup encryption

## Mga Keyboard Shortcut

| Key | Aksyon |
|-----|--------|
| `Escape` | Isara ang note popup |
| I-click sa labas | Isara ang note popup |

## FAQ

### Naka-encrypt ba ang mga tala?

Ang mga tala ay nakaimbak bilang plain text sa server configuration file. Kapag gumawa ka ng naka-encrypt na backup, naka-encrypt ang mga tala kasama ang lahat ng server data.

### Maaari ko bang gamitin ang Markdown?

Ang mga tala ay kasalukuyang plain text lang. Maaaring idagdag ang Markdown rendering sa hinaharap na bersyon.

### May character limit ba?

Wala. Maaari kang magdagdag ng maraming content hangga't gusto mo.
