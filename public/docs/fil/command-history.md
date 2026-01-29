# Command History (Command Recall)

Nagbibigay ang Marix ng **Command History** na feature na nag-iimbak at nagre-recall ng mga dating na-execute na command para sa bawat server. Nakakatulong ito para mabilis na ma-rerun ang mga karaniwang command nang hindi kailangan i-type ulit.

## Interface ng Command History

![Command History Interface](/cmh.png)

## Mga Tampok

- **Per-Server History**: Ang bawat server ay may sariling command history
- **Local Storage Lang**: Ang mga command ay lokal na nakaimbak, hindi kailanman nasi-sync o naba-backup
- **Pag-filter ng Sensitibong Data**: Awtomatikong nagfi-filter ng mga command na naglalaman ng password, token, o secret
- **LRU Pruning**: Awtomatikong tinatanggal ang mga lumang command (max 50 bawat server)
- **Execution Counter**: Sinusubaybayan kung ilang beses ginamit ang bawat command
- **Paghahanap**: Mabilis na i-filter ang mga command gamit ang fuzzy search

## Paano I-enable

Ang Command History ay **naka-disable bilang default** para sa privacy. Para i-enable:

1. Buksan ang **Settings** (gear icon sa sidebar)
2. Mag-navigate sa seksyong **Terminal**
3. I-toggle ang **Enable Command Recall**

## Paggamit

### Pagbukas ng Command History

Kapag nasa terminal session, pindutin ang:
- **`Tab`** key kapag walang laman ang terminal input (cursor sa empty line)
- O i-click ang **History** na button sa terminal toolbar

### Mga Keyboard Shortcut

| Key | Aksyon |
|-----|--------|
| `Tab` (empty input) | Buksan ang command recall popup |
| `↑` / `↓` | Mag-navigate sa mga command |
| `Enter` | I-execute ang napiling command |
| `Escape` | Isara ang popup |
| `Delete` / `Backspace` | Burahin ang napiling command |

### Mga Aksyon sa Popup

- **I-click** ang isang command para agad na i-execute
- **Maghanap** sa pamamagitan ng pag-type sa search box
- **Burahin** ang mga indibidwal na command gamit ang trash icon
- **I-save bilang Snippet** para gawing reusable snippet ang command

## Privacy at Seguridad

### Mga Na-filter na Command

Ang mga command na tumutugma sa mga pattern na ito ay **hindi kailanman nai-iimbak**:

- Mga command na naglalaman ng `password`, `passwd`, `secret`, `token`
- Mga command na may `api_key` o `apikey`
- Mga MySQL command na may `-p` flag (password)
- `sudo -S` (stdin password)
- Mga command gamit ang `sshpass` o `expect` na may password
- Environment variable export na may sensitibong halaga

### Pag-imbak ng Data

- Nakaimbak sa `localStorage` ng browser
- **Hindi kailanman nasi-sync** sa mga cloud service
- **Hindi kailanman kasama** sa mga backup
- Nabu-bura kapag nag-clear ka ng browser data

### Pag-clear ng History

Para i-clear ang command history:

1. Buksan ang **Settings** → **Terminal**
2. I-click ang **Clear Command History**

O i-clear per-server mula sa command recall popup.

## Mga Limitasyon

| Limitasyon | Halaga |
|------------|--------|
| Max command bawat server | 50 |
| Minimum na haba ng command | 2 character |

## FAQ

### Bakit hindi nase-save ang ilang command?

Ang mga command na naglalaman ng sensitibong pattern (password, token, atbp.) ay awtomatikong na-filter para sa seguridad.

### Maaari ko bang i-export ang aking command history?

Hindi, ang command history ay sadyang lokal lang at hindi ma-export para sa mga dahilan ng privacy.

### Nasi-sync ba ang command history sa mga device?

Hindi, ang command history ay lokal na nakaimbak at hindi kailanman nasi-sync.
