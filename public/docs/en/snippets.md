# Command Snippets

Snippets are reusable command templates that help you execute frequently-used commands quickly in the SSH terminal.

## Command Snippets Interface

![Command Snippets Interface](/snippets.png)

---

## Overview

The Snippets feature combines **command templates** with optional **keyboard shortcuts**:

- **Save commonly used commands** for quick access
- **Assign hotkeys** (Ctrl+Shift+Key or Cmd+Shift+Key) for instant execution
- **Organize by category** (System, Docker, Git, Network, etc.)
- **Scope-based visibility** - global, per-host, or per-group

---

## Accessing Snippets

### Snippets Panel

When connected to an SSH terminal, a **Snippets panel** appears on the right side:

- **Search** - Find snippets by name, command, or tag
- **Filter by category** - Click category icons to filter
- **Click to insert** - Click any snippet to insert its command
- **Collapse/Expand** - Toggle panel visibility

### Snippets Manager

Access from the sidebar menu to:

- View all snippets organized by scope
- Add, edit, or delete snippets
- Manage hotkey assignments

---

## Creating Snippets

1. Open **Snippets Manager** from sidebar
2. Click **Add Snippet** button
3. Fill in the form:

| Field | Description |
|-------|-------------|
| Name | Short descriptive title |
| Command | The shell command |
| Category | Select from predefined or "Custom" |
| Scope | Global, Host, or Group |
| Hotkey | Optional single character |
| Description | Explain what the command does |
| Tags | Keywords for searchability |

### Example Snippets

| Name | Command | Category | Hotkey |
|------|---------|----------|--------|
| Disk Usage | `df -h` | System | D |
| List All Docker | `docker ps -a` | Docker | P |
| Git Status | `git status` | Git | G |
| Check Ports | `netstat -tulpn` | Network | N |
| Tail Logs | `tail -f /var/log/syslog` | System | L |

---

## Using Hotkeys

### Keyboard Shortcuts

| Platform | Shortcut Format |
|----------|-----------------|
| **Windows/Linux** | `Ctrl + Shift + [Key]` |
| **macOS** | `Cmd + Shift + [Key]` |

### Reserved Keys

Some keys are reserved and cannot be used:

| Key | Reserved For |
|-----|--------------|
| A | Add New Host |
| C | Copy |
| L | Toggle LAN Transfer |
| O | Switch Terminal/SFTP |
| T | Local Terminal |
| V | Paste |

---

## Categories

| Icon | Category | Use For |
|------|----------|---------|
| 🖥️ | System | OS commands, services, logs |
| 🐳 | Docker | Container management |
| 📦 | Git | Version control |
| 🌐 | Network | Ports, connections, DNS |
| 📁 | Files | File operations |
| 🗄️ | Database | Database commands |
| ✨ | Custom | Anything else |

---

## Scope Levels

### Global Scope
Visible on **all** SSH connections. Best for universal commands.

### Host Scope
Visible only on a **specific server**. Best for server-specific commands.

### Group Scope
Visible on all servers in a **specific group**. Best for environment-specific commands.

---

## Tips & Best Practices

1. **Use Variables** - Leave placeholders for variable parts: `tail -f [LOG_PATH]`
2. **Chain Commands** - Combine multiple commands: `cd /var/www && git pull && systemctl restart app`
3. **Organize with Tags** - Add tags like `prod`, `dev`, `urgent` for easier filtering
4. **Backup Your Snippets** - Included in encrypted .marix backups

---

## Data Storage

- Stored locally in browser localStorage
- Included in encrypted backups (.marix files)
- Synced with Google Drive (if enabled)
- No cloud storage without explicit backup action

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Hotkey Not Working | Check for conflicts, ensure terminal is focused |
| Snippet Not Appearing | Check scope matches current connection |
| Command Not Executing | Check terminal state, permission issues |
