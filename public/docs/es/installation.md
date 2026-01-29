# Instalación

Descarga e instala Marix para tu sistema operativo.

## Windows

1. Descarga **[Marix.Setup.{{VERSION}}.exe](https://github.com/marixdev/marix/releases/latest/download/Marix.Setup.{{VERSION}}.exe)**
2. Ejecuta el instalador y sigue el asistente
3. Inicia Marix desde el Menú de Inicio

## macOS

### Apple Silicon (M1/M2/M3/M4)

1. Descarga **[Marix-{{VERSION}}-arm64-mac.zip](https://github.com/marixdev/marix/releases/latest/download/Marix-{{VERSION}}-arm64-mac.zip)**
2. Extrae y arrastra `Marix.app` a Aplicaciones
3. Primera ejecución: Clic derecho → Abrir (para eludir Gatekeeper)

### Intel Mac

1. Descarga **[Marix-{{VERSION}}-mac.zip](https://github.com/marixdev/marix/releases/latest/download/Marix-{{VERSION}}-mac.zip)**
2. Extrae y arrastra `Marix.app` a Aplicaciones
3. Primera ejecución: Clic derecho → Abrir (para eludir Gatekeeper)

## Linux

### AppImage (Recomendado)

Funciona en la mayoría de las distribuciones Linux sin instalación.

1. Descarga **[Marix-{{VERSION}}.AppImage](https://github.com/marixdev/marix/releases/latest/download/Marix-{{VERSION}}.AppImage)**
2. Hazlo ejecutable: `chmod +x Marix-{{VERSION}}.AppImage`
3. Ejecuta: `./Marix-{{VERSION}}.AppImage`

### Debian/Ubuntu (.deb)

1. Descarga **[marix_{{VERSION}}_amd64.deb](https://github.com/marixdev/marix/releases/latest/download/marix_{{VERSION}}_amd64.deb)**
2. Instala: `sudo dpkg -i marix_{{VERSION}}_amd64.deb`

### Fedora/RHEL (.rpm)

1. Descarga **[marix-{{VERSION}}.x86_64.rpm](https://github.com/marixdev/marix/releases/latest/download/marix-{{VERSION}}.x86_64.rpm)**
2. Instala: `sudo dnf install ./marix-{{VERSION}}.x86_64.rpm`

## Verificar Instalación

Inicia Marix. Deberías ver la ventana principal con la sección "Hosts" en la barra lateral.

## Próximos Pasos

- [Inicio Rápido](quickstart.md) - Añade tu primer servidor
- [Terminal SSH](ssh-terminal.md) - Aprende las funciones del terminal
