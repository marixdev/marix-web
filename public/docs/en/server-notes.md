# Server Notes (Sticky Notes)

Marix provides a **Server Notes** feature that allows you to attach personal notes to each server. This is useful for documenting server configurations, maintenance reminders, or quick reference information.

## Server Notes Interface

![Server Notes Interface](/note.png)

## Features

- **Per-Server Notes**: Each server can have its own notes
- **Auto-Save**: Changes are automatically saved as you type (500ms debounce)
- **Rich Text Support**: Plain text with line breaks
- **Visual Indicator**: Servers with notes show a filled note icon
- **Synced with Server Data**: Notes are included in server backups

## Usage

### Opening Notes

1. Connect to a server (SSH terminal or SFTP)
2. Click the **Notes** button in the top toolbar (pencil icon)
3. A sticky note popup appears in the bottom-right corner

### Writing Notes

- Simply type in the textarea
- Notes are **auto-saved** after 500ms of inactivity
- The "Saving..." indicator shows when a save is in progress
- Press `Escape` or click outside to close

### Visual Indicators

| Icon State | Meaning |
|------------|---------|
| Outline (empty) | No notes for this server |
| Filled (solid) | Server has notes |
| Amber/Yellow color | Notes exist |

## Use Cases

### Server Configuration

```
Web Server - Production
-----------------------
IP: 192.168.1.100
Nginx: /etc/nginx/sites-enabled/
Logs: /var/log/nginx/
SSL Cert expires: 2026-12-15
```

### Maintenance Reminders

```
TODO:
- [ ] Update OpenSSL (CVE-2025-XXXX)
- [ ] Rotate database credentials
- [ ] Increase swap to 4GB
```

### Quick Reference

```
Common Commands:
- Restart Nginx: sudo systemctl restart nginx
- Check disk: df -h
- View connections: netstat -tuln

Database:
- User: app_user
- Port: 5432
```

## Data Storage

- Notes are stored as part of the server configuration
- ✅ **Included in local backups** (Marix backup feature)
- ✅ **Included in cloud backups** (Google Drive, Box)
- ✅ **Encrypted** when using backup encryption

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Escape` | Close note popup |
| Click outside | Close note popup |

## FAQ

### Are notes encrypted?

Notes are stored as plain text in the server configuration file. When you create an encrypted backup, notes are encrypted along with all server data.

### Can I use Markdown?

Notes are currently plain text only. Markdown rendering may be added in a future version.

### Is there a character limit?

No hard limit, but very long notes may affect performance. Recommended to keep notes concise.
