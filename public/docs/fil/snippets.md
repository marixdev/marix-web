# Mga Command Snippet

Ang Snippets ay nagbibigay-daan sa iyong mag-imbak at mabilis na magpatupad ng mga madalas na ginagamit na command.

## Pangkalahatang-ideya

![Snippets Overview](/snippets.png)

Ang mga command snippet ay:
- Mabilis na ma-access sa pamamagitan ng hotkey o menu
- Maaaring may mga placeholder para sa dynamic na mga halaga
- Nakaayos sa mga kategorya
- Maaaring i-scope sa mga partikular na server o global

## Pag-access sa Snippets

### Mula sa Terminal

1. Kumonekta sa isang SSH server
2. I-click ang **Snippets** na button (o pindutin ang `Ctrl+Shift+S`)
3. Piliin ang snippet na ipapatupad

### Mula sa Sidebar

1. I-click ang **Snippets** na tab sa sidebar
2. I-browse o maghanap ng mga snippet
3. I-click para kopyahin o i-execute

## Paggawa ng Snippet

### Hakbang 1: Buksan ang Snippet Manager

1. Pumunta sa **Settings** → **Snippets**
2. O pindutin ang `Ctrl+Shift+S` at i-click ang **"Manage Snippets"**

### Hakbang 2: Magdagdag ng Bagong Snippet

1. I-click ang **"Add Snippet"** na button
2. Punan ang mga field:

| Field | Paglalarawan |
|-------|--------------|
| Name | Descriptive na pangalan para sa snippet |
| Command | Ang aktwal na command na ipapatupad |
| Category | Grupo para sa organisasyon |
| Description | Opsyonal na paliwanag |
| Hotkey | Opsyonal na keyboard shortcut |
| Scope | Global o partikular na server |

3. I-click ang **"Save"**

## Mga Placeholder

Gamitin ang mga placeholder para sa dynamic na mga halaga na ipo-prompt sa oras ng pagpapatupad:

### Syntax ng Placeholder

```
${placeholder_name}
${placeholder_name:default_value}
```

### Mga Halimbawa

**Simple na placeholder:**
```bash
tail -f /var/log/${logfile}
```

**Na may default na halaga:**
```bash
systemctl restart ${service:nginx}
```

**Maramihang placeholder:**
```bash
mysqldump -u ${user:root} -p ${database} > ${filename:backup.sql}
```

## Mga Kategorya

Ayusin ang mga snippet gamit ang mga kategorya:

### Mga Default na Kategorya

- **System** - Mga system administration command
- **Database** - Mga database operation
- **Web** - Mga web server at application command
- **Network** - Mga networking tool
- **Custom** - Mga user-defined snippet

### Paggawa ng Custom na Kategorya

1. Kapag nag-aambag ng snippet, maglagay ng bagong pangalan ng kategorya
2. Awtomatikong gagawin ang kategorya
3. Maaari mong i-rename o burahin ang mga kategorya sa pamamagitan ng Settings

## Scope ng Snippet

### Global Snippets

Accessible mula sa anumang server connection:
- Mga pangkalahatang utility command
- Mga cross-platform script
- Mga common diagnostic tool

### Mga Server-Specific na Snippet

Available lang kapag nakakonekta sa isang partikular na server:
- Mga application-specific command
- Mga server-specific na path
- Mga environment-specific configuration

## Pag-import at Pag-export

### Pag-export ng mga Snippet

1. Pumunta sa **Settings** → **Snippets**
2. I-click ang **"Export"**
3. Piliin ang mga snippet na i-e-export
4. I-save bilang JSON file

### Pag-import ng mga Snippet

1. Pumunta sa **Settings** → **Snippets**
2. I-click ang **"Import"**
3. Piliin ang JSON file
4. I-review at kumpirmahin ang import

### Format ng Export

```json
{
  "snippets": [
    {
      "name": "Restart Nginx",
      "command": "sudo systemctl restart nginx",
      "category": "Web",
      "description": "Restarts the Nginx web server"
    }
  ]
}
```

## Mga Pinakamahusay na Kasanayan

### Pangalan ng mga Command

- Gumamit ng descriptive na mga pangalan: `"Restart Nginx"` hindi `"cmd1"`
- Isama ang aksyon: `"Check disk space"`, `"View error logs"`
- Gawin itong madaling mahanap

### Pag-oorganisa

- Gumamit ng mga kategorya para pagsama-samahin ang mga kaugnay na command
- Panatilihing maikli ang mga kategorya (5-10 snippet bawat isa)
- Gamitin ang mga hotkey para sa mga madalas na gamitin na snippet

### Seguridad

- Iwasang mag-imbak ng mga password sa mga snippet
- Gumamit ng mga placeholder para sa sensitibong mga halaga
- I-scope ang mga sensitibong snippet sa mga partikular na server

## Mga Keyboard Shortcut

| Shortcut | Aksyon |
|----------|--------|
| `Ctrl+Shift+S` | Buksan ang snippet picker |
| `Enter` | I-execute ang napiling snippet |
| `Esc` | Isara ang snippet picker |
| `↑` / `↓` | I-navigate ang mga snippet |
| Type | Maghanap/i-filter ang mga snippet |

## Mga Tip

- Gamitin ang mga **placeholder** para gawing flexible ang mga snippet
- **I-kategorya** ang mga snippet para sa madaling paghahanap
- Mag-set ng mga **hotkey** para sa mga madalas na gamitin na command
- **I-export** ang mga snippet para sa backup o sharing
