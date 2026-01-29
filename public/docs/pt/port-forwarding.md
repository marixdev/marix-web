# Encaminhamento de Portas (Túneis SSH)

Os túneis SSH roteiam o tráfego de forma segura através de uma conexão SSH.

## Interface de Encaminhamento de Portas

![Interface de Encaminhamento de Portas](/portfoward.png)

## Tipos de Encaminhamento de Portas

| Tipo | Direção | Caso de Uso |
|------|---------|-------------|
| **Local** | Remoto → Local | Acessar serviço remoto através de porta local |
| **Remoto** | Local → Remoto | Expor serviço local para rede remota |
| **Dinâmico** | Proxy SOCKS | Criar um proxy SOCKS através do SSH |

## Abrindo Encaminhamento de Portas

Clique em **"Encaminhar Porta"** na barra lateral.

## Criar um Encaminhamento de Porta

### Passo 1: Abrir Diálogo
Clique no botão **"Adicionar Encaminhamento"**

### Passo 2: Configurar

| Campo | Descrição | Exemplo |
|-------|-----------|---------|
| Nome | Nome descritivo | "MySQL para localhost" |
| Tipo | Local, Remoto ou Dinâmico | Local |
| Servidor | Servidor SSH para tunelar | Meu VPS |
| Host Local | Endereço de bind local | 127.0.0.1 |
| Porta Local | Número da porta local | 3307 |
| Host Remoto | Destino remoto | 127.0.0.1 |
| Porta Remota | Porta remota | 3306 |

### Passo 3: Salvar
Clique em **"Adicionar"** ou **"Salvar"**

## Exemplos de Casos de Uso

### Encaminhamento Local: Acessar MySQL Remoto

Acesse o banco de dados MySQL do seu servidor a partir da sua máquina local:

| Configuração | Valor |
|--------------|-------|
| Tipo | Local |
| Local | 127.0.0.1:3307 |
| Remoto | 127.0.0.1:3306 |

**Uso:** Conecte a `localhost:3307` para alcançar o MySQL do servidor.

### Encaminhamento Remoto: Expor App Local

Deixe o servidor acessar seu servidor de desenvolvimento local:

| Configuração | Valor |
|--------------|-------|
| Tipo | Remoto |
| Local | 127.0.0.1:3000 |
| Remoto | 0.0.0.0:8080 |

**Uso:** A porta 8080 do servidor conecta ao seu localhost:3000.

### Dinâmico: Proxy SOCKS

Crie um proxy SOCKS5 para navegar através do servidor:

| Configuração | Valor |
|--------------|-------|
| Tipo | Dinâmico |
| Local | 127.0.0.1:1080 |

**Uso:** Configure aplicativos para usar proxy SOCKS5 em `localhost:1080`.

## Gerenciar Encaminhamentos de Porta

### Iniciar
1. Encontre o encaminhamento na lista
2. Clique no botão **Iniciar** (▶)
3. O status muda para "Conectado"

### Parar
1. Encontre o encaminhamento em execução
2. Clique no botão **Parar** (■)
3. O status muda para "Desconectado"

### Editar
1. **Pare** o encaminhamento se estiver em execução
2. Clique no botão **Editar** (lápis)
3. Modifique as configurações
4. Clique em **Salvar**

### Excluir
1. Pare o encaminhamento se estiver em execução
2. Clique no botão **Excluir** (lixeira)
3. Confirme a exclusão

## Monitorar Status

A lista mostra:
- **Indicador de status**: Verde = conectado, Vermelho = erro
- **Contagem de conexões**: Conexões ativas
- **Bytes transferidos**: Tráfego de entrada/saída

## Casos de Uso Comuns

| Serviço | Porta Local | Porta Remota | Tipo |
|---------|-------------|--------------|------|
| MySQL | 3307 | 3306 | Local |
| PostgreSQL | 5433 | 5432 | Local |
| Redis | 6380 | 6379 | Local |
| MongoDB | 27018 | 27017 | Local |
| Web App | 8080 | 80 | Local |
| Jupyter | 8889 | 8888 | Local |

## Solução de Problemas

### Porta Já em Uso
- Escolha uma porta local diferente
- Verifique se outro aplicativo está usando essa porta
- Pare serviços conflitantes

### Conexão Recusada
- Verifique se o serviço remoto está em execução
- Verifique o firewall no servidor
- Certifique-se de que o host/porta remoto está correto

### Túnel Cai
- Verifique a estabilidade da conexão SSH
- O servidor pode ter configurações de timeout
- Considere usar keep-alive
