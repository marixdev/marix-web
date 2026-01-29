# Cliente WebSocket

Conecte-se a servidores WebSocket para comunicação bidirecional em tempo real. Perfeito para testar APIs, depurar feeds ao vivo ou monitorar serviços WebSocket.

## Interface do Cliente WebSocket

![Interface WebSocket](/websocket.png)

## Adicionando um Servidor WebSocket

1. Clique em **"Adicionar Novo Host"**
2. Selecione **Protocolo**: WebSocket (WSS)
3. Preencha:
   - **Nome**: Nome de exibição para a conexão
   - **URL**: Endereço do servidor WebSocket
   - **Headers**: (opcional) Headers personalizados para autenticação
4. Clique em **Criar**

### Formato da URL

| Formato | Exemplo |
|---------|---------|
| Com protocolo | `wss://api.example.com/ws` |
| Sem protocolo | `api.example.com/ws` (adiciona `wss://` automaticamente) |
| Com porta | `wss://localhost:8080/socket` |
| Com caminho | `wss://stream.example.com/v1/feed` |

> **Nota:** Se nenhum protocolo for especificado, o Marix adiciona automaticamente `wss://` para conexões WebSocket seguras.

## Conectando

1. Clique duas vezes no servidor WebSocket na lista de Hosts
2. Aguarde a conexão (timeout: 15 segundos)
3. O indicador de status mostra o estado da conexão

### Status da Conexão

| Status | Indicador | Descrição |
|--------|-----------|-----------|
| Conectando | 🟡 Amarelo | Estabelecendo conexão |
| Conectado | 🟢 Verde | Pronto para enviar/receber |
| Desconectado | ⚪ Cinza | Conexão fechada |
| Erro | 🔴 Vermelho | Conexão falhou |

## Enviando Mensagens

1. Digite sua mensagem na área de entrada na parte inferior
2. Pressione **Enter** ou clique em **Enviar**
3. Mensagens enviadas aparecem com seta ↑ (verde)

### Formatos de Mensagem Suportados

- Texto simples
- JSON (será formatado para legibilidade)
- Qualquer dado de string

## Recebendo Mensagens

- Mensagens recebidas aparecem automaticamente com seta ↓ (roxo)
- Mensagens JSON são auto-formatadas com indentação adequada
- Timestamp mostra quando cada mensagem foi recebida
- Histórico de mensagens mantém até 1000 mensagens por sessão

## Controles

| Controle | Função |
|----------|--------|
| **Enviar** | Enviar mensagem ao servidor |
| **Limpar** | Limpar todas as mensagens da visualização |
| **Desconectar** | Fechar a conexão |
| **Reconectar** | Reconectar após desconexão/erro |
| **Seletor de Tema** | Alterar tema de cores do visualizador |

## Atalhos de Teclado

| Atalho | Ação |
|--------|------|
| `Enter` | Enviar mensagem |
| `Shift+Enter` | Nova linha na mensagem |

## Recursos

### Auto-Rolagem

- Habilitado por padrão
- Rola automaticamente para as mensagens mais recentes
- Desative para revisar mensagens antigas
- Contagem de mensagens exibida na parte inferior

### Suporte a Temas

- 400+ temas de terminal disponíveis
- Clique no seletor de tema no cabeçalho
- O tema é aplicado a todo o visualizador
- As cores se adaptam a temas claro/escuro

### Formatação JSON

Ao receber mensagens JSON:
```json
{"event":"update","data":{"id":1,"value":"test"}}
```

O Marix formata automaticamente como:
```json
{
  "event": "update",
  "data": {
    "id": 1,
    "value": "test"
  }
}
```

## Casos de Uso

### Teste de API

Teste APIs WebSocket durante o desenvolvimento:
- Envie payloads de teste
- Monitore respostas
- Depure problemas de conexão

### Monitoramento de Dados ao Vivo

Monitore feeds em tempo real:
- Atualizações de preços de ações
- Aplicativos de chat
- Dados de sensores IoT
- Eventos de servidor de jogos

### Depuração

Depure implementações WebSocket:
- Verifique o formato das mensagens
- Verifique a estabilidade da conexão
- Teste lógica de reconexão

## Solução de Problemas

### Tempo Limite de Conexão

- Verifique se a URL está correta
- Verifique se o servidor está em execução
- Verifique configurações de firewall/proxy
- Tente com protocolo `wss://` explícito

### Conexão Recusada

- O servidor pode não aceitar conexões
- Wrong port number
- SSL/TLS certificate issues
- Server requires authentication headers

### Messages Not Sending

- Check connection status is "Connected"
- Verify message format matches server expectations
- Check server logs for errors

### Disconnected Unexpectedly

- Server may have closed connection
- Network interruption
- Idle timeout on server side
- Click **Reconnect** to restore connection
