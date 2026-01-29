# Compartilhamento de Servidor LAN

Compartilhe suas configurações de servidor com outros usuários do Marix na mesma rede local.

## Interface de Compartilhamento de Servidor LAN

![Interface de Compartilhamento de Servidor LAN](/servershare.png)

## Requisitos

> ⚠️ **Importante:** Tanto o remetente quanto o receptor devem ter a **Descoberta LAN habilitada**.
> 
> Clique no botão 🌐 na barra de cabeçalho ou use `Ctrl+Shift+L` para alternar.

- Ambos os dispositivos na mesma rede (WiFi/LAN)
- Descoberta LAN habilitada em ambos os dispositivos
- Marix rodando em ambos os dispositivos

## Casos de Uso

- Compartilhar acesso ao servidor com membros da equipe
- Configurar um novo computador rapidamente
- Transferir configurações entre dispositivos
- Integrar novos membros da equipe

## Abrindo Compartilhamento de Servidor

### Método 1: Menu de Clique Direito
1. Na lista de Hosts, clique com o botão direito em um servidor
2. Selecione **"Compartilhar na LAN"**

### Método 2: Seleção Múltipla
1. Segure `Ctrl` (ou `⌘` no Mac) e clique em vários servidores
2. Clique no botão **"Compartilhar"** que aparece
3. Ou clique com o botão direito e selecione **"Compartilhar na LAN"**

## Compartilhando Servidores (Remetente)

### Passo 1: Habilitar Descoberta LAN
Clique no ícone **🌐** (globo) na barra de cabeçalho.

### Passo 2: Selecionar Servidores
- Clique com o botão direito → "Compartilhar na LAN" para um único servidor
- Ou selecione múltiplos servidores e clique em Compartilhar

### Passo 3: Modal de Seleção de Servidor
- Revise os servidores selecionados
- Clique em **"Selecionar Todos"** para compartilhar todos os servidores
- Clique em **"Limpar"** para desmarcar todos
- Clique em tags para selecionar rapidamente servidores com aquela tag

### Passo 4: Clique no Botão "Compartilhar"

### Passo 5: Configurar Opções

| Opção | Descrição |
|-------|-----------|
| Incluir dados sensíveis ✅ | Compartilhar senhas e chaves privadas |
| Incluir dados sensíveis ❌ | Remover senhas/chaves (receptor insere manualmente) |

### Passo 6: Anotar Código de Pareamento
O **Código de Pareamento** de 6 dígitos é válido por 5 minutos.

### Passo 7: Compartilhar Código
Diga ao receptor seu código de pareamento.

### Passo 8: Enviar
Clique em **"Compartilhar na LAN"**

O status mostra: "Enviado X servidor(es). Aguardando receptor..."

## Recebendo Servidores (Receptor)

### Passo 1: Habilitar Descoberta LAN
Clique no ícone **🌐** (globo) na barra de cabeçalho.

### Passo 2: Aguardar Notificação
Um popup aparece quando alguém envia servidores para você.

Ou vá em Hosts → clique com o botão direito em área vazia → "Receber Servidores Compartilhados"

### Passo 3: Inserir Código de Pareamento
Digite o código de 6 dígitos do remetente.

### Passo 4: Importar
Clique em **"Descriptografar e Importar"**

### Passo 5: Pronto!
Os servidores são importados com:
- Todas as configurações originais
- Uma tag **"LAN-Import"** automática adicionada
- Senhas/chaves (se o remetente as incluiu)

O status mostra: "Importado X servidor(es) com sucesso!"

## Segurança

- Todas as transferências são **criptografadas**
- Código de pareamento de 6 dígitos obrigatório
- Os códigos expiram após 5 minutos
- No data passes through external servers
- Direct device-to-device transfer

## Troubleshooting

### No Devices Appear

1. Both devices on **same network** (WiFi/LAN)
2. **LAN Discovery ON** on both devices
3. Click "Refresh" to rescan
4. Check firewall isn't blocking Marix

### Pairing Code Expired

- Codes expire after 5 minutes
- Sender can click "Regenerate" for a new code

### "Wrong Pairing Code" Error

- Double-check the code with sender
- Codes are case-sensitive
- Request a new code if needed

### Servers Missing Passwords

- Sender may have disabled "Include sensitive data"
- Manually enter passwords after import
- Ask sender to reshare with sensitive data enabled
