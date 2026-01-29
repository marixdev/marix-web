# SSH Terminal

The SSH Terminal in Marix provides a powerful, feature-rich terminal emulator for connecting to remote servers.

## Terminal Interface

![Terminal Interface](/terminal.png)

After connecting via SSH, you'll see:
- A full terminal emulator (powered by xterm.js)
- Toggle buttons for Terminal/SFTP view at the top
- Theme selector dropdown
- Reconnect button

## Terminal Controls

| Control | Function |
|---------|----------|
| Terminal button | Switch to terminal view |
| SFTP button | Switch to file browser |
| Theme selector | Change terminal color scheme |
| ↺ Reconnect | Reconnect if disconnected |

## Using the Terminal

1. **Type commands** just like a normal SSH terminal
2. Commands execute on the remote server
3. **Copy text**: 
   - Select text with mouse → Copy
   - Or use `Ctrl+C`
4. **Paste text**: 
   - Right-click → Paste
   - Or use `Ctrl+V`

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+C` | Copy selected text |
| `Ctrl+V` | Paste from clipboard |
| `Ctrl+L` | Clear screen |
| `Tab` | Open/Close Command History |

## Change Terminal Theme

1. While in a terminal session
2. Click the theme selector dropdown (top-right of terminal)
3. Browse available themes (400+ options)
4. Click a theme to apply instantly

Available theme categories:
- Classic (Tango, Solarized, Monokai)
- Modern (Dracula, One Dark, Nord)
- High Contrast
- Custom colors


## Open Local Terminal

Open a terminal on your local machine without connecting to a remote server:

- Keyboard shortcut: `Ctrl+Shift+T`
- Useful for running local commands


## Connection Status

The tab shows connection status:
- **Green indicator**: Connected
- **Red indicator**: Disconnected
- **Yellow indicator**: Connecting

## Reconnecting

If your connection drops:
Marix auto reconnect ssh

The terminal preserves your scroll history after reconnection.
