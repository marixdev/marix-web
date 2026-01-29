# Hosts Conhecidos

Hosts Conhecidos armazena impressões digitais de servidores para detectar se a identidade de um servidor mudou (possível problema de segurança).

## Interface de Hosts Conhecidos

![Interface de Hosts Conhecidos](/knowhosts.png)

## O Que São Hosts Conhecidos?

Quando você conecta pela primeira vez a um servidor SSH, o servidor apresenta sua impressão digital. O Marix armazena isso para:
- Verificar a identidade do servidor em conexões futuras
- Detectar ataques man-in-the-middle
- Alertá-lo se uma chave do servidor mudar inesperadamente

## Abrindo Hosts Conhecidos

Clique em **"Hosts Conhecidos"** na barra lateral.

## Visualizar Hosts Conhecidos

A lista mostra:

| Coluna | Descrição |
|--------|-----------|
| Host | Hostname/IP do servidor |
| Porta | Porta SSH |
| Tipo de Chave | Algoritmo de chave SSH (ED25519, RSA, ECDSA) |
| Impressão Digital | Identificador único do servidor |
| Adicionado | Quando o host foi confiado |

## Pesquisar Hosts Conhecidos

1. Use a caixa de pesquisa no topo
2. Pesquise por hostname, IP ou impressão digital

## Filtrar por Tipo de Chave

1. Use o filtro dropdown
2. Selecione: Todos, ED25519, RSA ou ECDSA

## Importar Host do Servidor

Adicione manualmente a impressão digital de um servidor sem conectar:

1. Clique no botão **"Importar do Host"**
2. Digite:
   - Hostname ou IP
   - Porta (padrão 22)
3. Clique em **"Importar"**
4. A impressão digital do servidor é buscada e armazenada

## Remover um Host Conhecido

1. Encontre o host na lista
2. Clique no botão **Excluir** (ícone de lixeira)
3. Confirme a remoção

### Quando Remover

- O servidor foi reinstalado e tem uma nova chave
- O IP/hostname do servidor mudou
- Você não conecta mais a este servidor

## Verificação de Chave do Host

Ao conectar a um novo servidor:
1. O Marix busca a impressão digital do servidor
2. Você é solicitado a verificar e confiar nela
3. Após aceitar, ela é armazenada em Hosts Conhecidos
4. Conexões futuras são verificadas automaticamente

## Avisos de Segurança

### "A chave do host mudou"
Este aviso aparece quando a impressão digital de um servidor difere da armazenada.

**Possíveis causas:**
- O servidor foi reinstalado
- A chave SSH do servidor foi regenerada
- ⚠️ **Ataque man-in-the-middle** (raro mas possível)

**O que fazer:**
1. Verifique com o administrador do servidor se a chave mudou legitimamente
2. Se confirmado, remova a entrada antiga de Hosts Conhecidos
3. Reconecte e aceite a nova impressão digital
4. Se suspeito, não conecte

## Melhores Práticas

1. **Verifique as impressões digitais** ao conectar a novos servidores
2. **Não ignore avisos** sobre chaves de host alteradas
3. **Revise regularmente** sua lista de Hosts Conhecidos
4. **Remova entradas antigas** de servidores que você não usa mais
