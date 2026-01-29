# Instalação

Baixe e instale o Marix para seu sistema operacional.

## Windows

1. Baixe **[Marix.Setup.{{VERSION}}.exe](https://github.com/marixdev/marix/releases/latest/download/Marix.Setup.{{VERSION}}.exe)**
2. Execute o instalador e siga o assistente
3. Inicie o Marix pelo Menu Iniciar

## macOS

### Apple Silicon (M1/M2/M3/M4)

1. Baixe **[Marix-{{VERSION}}-arm64-mac.zip](https://github.com/marixdev/marix/releases/latest/download/Marix-{{VERSION}}-arm64-mac.zip)**
2. Extraia e arraste `Marix.app` para Aplicativos
3. Primeira execução: Clique com o botão direito → Abrir (para ignorar o Gatekeeper)

### Intel Mac

1. Baixe **[Marix-{{VERSION}}-mac.zip](https://github.com/marixdev/marix/releases/latest/download/Marix-{{VERSION}}-mac.zip)**
2. Extraia e arraste `Marix.app` para Aplicativos
3. Primeira execução: Clique com o botão direito → Abrir (para ignorar o Gatekeeper)

## Linux

### AppImage (Recomendado)

Funciona na maioria das distribuições Linux sem instalação.

1. Baixe **[Marix-{{VERSION}}.AppImage](https://github.com/marixdev/marix/releases/latest/download/Marix-{{VERSION}}.AppImage)**
2. Torne executável: `chmod +x Marix-{{VERSION}}.AppImage`
3. Execute: `./Marix-{{VERSION}}.AppImage`

### Debian/Ubuntu (.deb)

1. Baixe **[marix_{{VERSION}}_amd64.deb](https://github.com/marixdev/marix/releases/latest/download/marix_{{VERSION}}_amd64.deb)**
2. Instale: `sudo dpkg -i marix_{{VERSION}}_amd64.deb`

### Fedora/RHEL (.rpm)

1. Baixe **[marix-{{VERSION}}.x86_64.rpm](https://github.com/marixdev/marix/releases/latest/download/marix-{{VERSION}}.x86_64.rpm)**
2. Instale: `sudo dnf install ./marix-{{VERSION}}.x86_64.rpm`

## Verificar Instalação

Inicie o Marix. Você deve ver a janela principal com a seção "Hosts" na barra lateral.

## Próximos Passos

- [Início Rápido](quickstart.md) - Adicione seu primeiro servidor
- [Terminal SSH](ssh-terminal.md) - Aprenda os recursos do terminal
