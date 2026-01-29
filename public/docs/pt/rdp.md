# Área de Trabalho Remota RDP

Conecte-se a servidores e computadores Windows usando o Protocolo de Área de Trabalho Remota (RDP).

## Adicionando um Servidor RDP

1. Clique em **"Adicionar Novo Host"**
2. Selecione **Protocolo**: RDP
3. Preencha:
   - **Host/IP**: Endereço do servidor Windows
   - **Porta**: 3389 (padrão)
   - **Usuário**: Nome de usuário do Windows
   - **Senha**: Senha do Windows
   - **Domínio**: (opcional) Nome do domínio Windows
4. Clique em **Criar**

## Importar de Arquivo .rdp

Já tem um arquivo de configuração RDP?

1. No diálogo Adicionar Servidor, clique em **"Importar arquivo .rdp"**
2. Selecione seu arquivo `.rdp`
3. Os campos são preenchidos automaticamente do arquivo
4. Ajuste as configurações se necessário
5. Clique em **Criar**

## Conectando ao RDP

1. Clique duas vezes no servidor RDP na lista de Hosts
2. A janela de área de trabalho remota abre dentro do aplicativo
3. Você pode interagir com a área de trabalho do Windows normalmente

## Controles RDP

| Entrada | Comportamento |
|---------|---------------|
| **Mouse** | Clique, arraste, rolagem funcionam normalmente |
| **Teclado** | Todas as teclas são encaminhadas para o remoto |
| **Área de Transferência** | Copiar/colar entre local e remoto |

## Desconectando

- Clique em × na aba da sessão
- Ou feche o aplicativo
- O estado da sessão é preservado no servidor remoto

## Requisitos Linux

O suporte a RDP no Linux requer FreeRDP. O Marix **detecta automaticamente** se o FreeRDP está instalado.

### Auto-Instalação

Se o FreeRDP não for encontrado:
1. Uma notificação aparece quando você tenta conectar
2. Clique no botão **"Instalar"**
3. O Marix instala o FreeRDP automaticamente
4. Reconecte após a instalação completar

### Instalação Manual

Se você preferir instalar manualmente:

**Ubuntu/Debian**
```bash
sudo apt install freerdp3-x11 xdotool
```

**Fedora**
```bash
sudo dnf install freerdp xdotool
```

**Arch Linux**
```bash
sudo pacman -S freerdp xdotool
```

## Configurações de Exibição

As sessões RDP se adaptam ao tamanho da sua janela. Para melhor experiência:
- Maximize a janela para experiência de área de trabalho completa
- Redimensione a janela para ajustar a resolução remota
- Modo tela cheia disponível via controles da janela

## Dicas de Desempenho

- **Reduza a profundidade de cor** para conexões mais lentas
- **Desabilite efeitos visuais** no lado do Windows
- Use **conexão com fio** para melhor desempenho
- Feche aplicativos desnecessários na máquina remota

## Solução de Problemas

### Conexão Recusada
- Verifique se a Área de Trabalho Remota está habilitada no Windows
- Verifique se o Firewall do Windows permite RDP
- Confirme a porta correta (padrão 3389)

### Tela Preta
- Aguarde um momento - conexão inicial pode demorar
- Tente reconectar
- Verifique se a máquina remota não está em modo de suspensão

### Desempenho Lento
- Diminua a resolução da tela
- Reduza a profundidade de cor
- Verifique a velocidade da rede
- Feche aplicativos que consomem muita banda

### Autenticação Falhou
- Verifique o formato do nome de usuário:
  - Local: `usuario`
  - Domínio: `DOMINIO\usuario` ou `usuario@dominio.com`
- Verifique se a senha está correta
- Certifique-se de que a conta tem direitos de acesso à Área de Trabalho Remota
