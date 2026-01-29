# SSH Terminal

Ang SSH Terminal ay ang pangunahing feature ng Marix para sa ligtas na remote server management.

## Pangkalahatang-ideya

![SSH Terminal](/ssh-terminal.png)

Ang SSH Terminal ay nagbibigay ng:
- Ligtas na naka-encrypt na koneksyon sa mga remote server
- Full terminal emulation na may suporta para sa mga kulay at Unicode
- Maramihang kasabay na session
- Mga keyboard shortcut at command history

## Pagkonekta sa Server

### Mabilis na Koneksyon

1. I-click ang **"New Connection"** o pindutin ang `Ctrl+N`
2. Ilagay ang mga detalye ng server:

| Field | Halimbawa |
|-------|-----------|
| Host | `192.168.1.100` o `server.example.com` |
| Port | `22` (default) |
| Username | `root` o `admin` |
| Password/Key | Iyong password o SSH key |

3. I-click ang **"Connect"**

### Mula sa Naka-save na Host

1. Hanapin ang server sa **Hosts** na sidebar
2. I-double-click para kumonekta
3. O i-right-click at piliin ang **"Connect"**

## Interface ng Terminal

### Layout

- **Tab Bar** - Mga aktibong session at mga kontrol
- **Terminal Area** - Ang pangunahing command line interface
- **Status Bar** - Impormasyon ng koneksyon at mga tool

### Mga Tampok ng Terminal

**Full Color Support**
- 256 na mga kulay at true color (24-bit)
- Mga tema para sa personalization

**Unicode Support**
- Mga internasyonal na character
- Mga emoji at mga espesyal na simbolo

**Copy/Paste**
- `Ctrl+Shift+C` para kopyahin
- `Ctrl+Shift+V` para i-paste

## Pamamahala ng Session

### Maramihang Session

Buksan ang maraming terminal sa isa-isang tab:
- Bawat tab ay isang independiyenteng session
- Lumipat sa pagitan ng mga tab gamit ang `Ctrl+Tab`
- Isara ang tab gamit ang `Ctrl+W`

### Muling Pagkonekta

Kung mawala ang koneksyon:
1. I-click ang **"Reconnect"** na button
2. O pindutin ang `Ctrl+R`
3. Awtomatikong gagamitin ng app ang mga naka-save na kredensyal

## Command History

Ang lahat ng mga utos ay naka-save para sa madaling pag-access:
- Pindutin ang `↑` para pumunta sa nakaraang mga utos
- Pindutin ang `↓` para pumunta sa susunod na mga utos
- Gamitin ang `Ctrl+R` para maghanap sa history

## Mga Keyboard Shortcut

| Shortcut | Aksyon |
|----------|--------|
| `Ctrl+Shift+C` | Kopyahin ang napiling teksto |
| `Ctrl+Shift+V` | I-paste ang teksto |
| `Ctrl+Shift+F` | Maghanap sa terminal |
| `Ctrl+Shift+O` | Lumipat sa SFTP mode |
| `Ctrl+L` | I-clear ang screen |
| `Ctrl+D` | Magsara ng shell |
| `↑` / `↓` | I-navigate ang command history |

## Mga Tip

- Gamitin ang **SSH keys** para sa mas ligtas at mas mabilis na login
- Gamitin ang **command snippets** para sa mga madalas na ginagamit na utos
- I-enable ang **auto-reconnect** para awtomatikong muling kumonekta
- Gumamit ng **Split View** para makita ang maraming terminal nang sabay-sabay
