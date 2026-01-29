# Terminal SSH

O Terminal SSH no Marix fornece um emulador de terminal poderoso e rico em recursos para conectar a servidores remotos.

## Interface do Terminal

![Interface do Terminal](/terminal.png)

Após conectar via SSH, você verá:
- Um emulador de terminal completo (powered by xterm.js)
- Botões de alternância para visualização Terminal/SFTP no topo
- Dropdown seletor de tema
- Botão de reconexão

## Controles do Terminal

| Controle | Função |
|----------|--------|
| Botão Terminal | Mudar para visualização do terminal |
| Botão SFTP | Mudar para navegador de arquivos |
| Seletor de Tema | Alterar esquema de cores do terminal |
| ↺ Reconectar | Reconectar se desconectado |

## Usando o Terminal

1. **Digite comandos** como um terminal SSH normal
2. Os comandos são executados no servidor remoto
3. **Copiar texto**:
   - Selecione texto com o mouse → Copiar
   - Ou use `Ctrl+C`
4. **Colar texto**:
   - Clique com o botão direito → Colar
   - Ou use `Ctrl+V`

## Atalhos de Teclado

| Atalho | Ação |
|--------|------|
| `Ctrl+C` | Copiar texto selecionado |
| `Ctrl+V` | Colar da área de transferência |
| `Ctrl+L` | Limpar tela |
| `Tab` | Abrir/Fechar Histórico de Comandos |

## Alterar Tema do Terminal

1. Enquanto em uma sessão de terminal
2. Clique no dropdown seletor de tema (canto superior direito do terminal)
3. Navegue pelos temas disponíveis (400+ opções)
4. Clique em um tema para aplicar instantaneamente

Categorias de temas disponíveis:
- Clássico (Tango, Solarized, Monokai)
- Moderno (Dracula, One Dark, Nord)
- Alto Contraste
- Cores personalizadas


## Abrir Terminal Local

Abra um terminal na sua máquina local sem conectar a um servidor remoto:

- Atalho de teclado: `Ctrl+Shift+T`
- Útil para executar comandos locais


## Status da Conexão

A aba mostra o status da conexão:
- **Indicador verde**: Conectado
- **Indicador vermelho**: Desconectado
- **Indicador amarelo**: Conectando

## Reconectando

Se sua conexão cair:
O Marix reconecta SSH automaticamente

O terminal preserva seu histórico de rolagem após a reconexão.
