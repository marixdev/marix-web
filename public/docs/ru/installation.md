# Установка

Скачайте и установите Marix для вашей операционной системы.

## Windows

1. Скачайте **[Marix.Setup.{{VERSION}}.exe](https://github.com/marixdev/marix/releases/latest/download/Marix.Setup.{{VERSION}}.exe)**
2. Запустите установщик и следуйте инструкциям мастера
3. Запустите Marix из меню Пуск

## macOS

### Apple Silicon (M1/M2/M3/M4)

1. Скачайте **[Marix-{{VERSION}}-arm64-mac.zip](https://github.com/marixdev/marix/releases/latest/download/Marix-{{VERSION}}-arm64-mac.zip)**
2. Извлеките и перетащите `Marix.app` в Программы
3. При первом запуске: Правый клик → Открыть (чтобы обойти Gatekeeper)

### Intel Mac

1. Скачайте **[Marix-{{VERSION}}-mac.zip](https://github.com/marixdev/marix/releases/latest/download/Marix-{{VERSION}}-mac.zip)**
2. Извлеките и перетащите `Marix.app` в Программы
3. При первом запуске: Правый клик → Открыть (чтобы обойти Gatekeeper)

## Linux

### AppImage (Рекомендуется)

Работает на большинстве дистрибутивов Linux без установки.

1. Скачайте **[Marix-{{VERSION}}.AppImage](https://github.com/marixdev/marix/releases/latest/download/Marix-{{VERSION}}.AppImage)**
2. Сделайте исполняемым: `chmod +x Marix-{{VERSION}}.AppImage`
3. Запустите: `./Marix-{{VERSION}}.AppImage`

### Debian/Ubuntu (.deb)

1. Скачайте **[marix_{{VERSION}}_amd64.deb](https://github.com/marixdev/marix/releases/latest/download/marix_{{VERSION}}_amd64.deb)**
2. Установите: `sudo dpkg -i marix_{{VERSION}}_amd64.deb`

### Fedora/RHEL (.rpm)

1. Скачайте **[marix-{{VERSION}}.x86_64.rpm](https://github.com/marixdev/marix/releases/latest/download/marix-{{VERSION}}.x86_64.rpm)**
2. Установите: `sudo dnf install ./marix-{{VERSION}}.x86_64.rpm`

## Проверка установки

Запустите Marix. Вы должны увидеть главное окно с разделом «Хосты» в боковой панели.

## Следующие шаги

- [Быстрый старт](quickstart.md) — Добавьте ваш первый сервер
- [SSH-терминал](ssh-terminal.md) — Изучите возможности терминала
