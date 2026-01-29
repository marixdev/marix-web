# Ferramentas de Rede

Um conjunto abrangente de ferramentas de diagnóstico de rede integradas ao Marix.

## Interface das Ferramentas de Rede

![Interface das Ferramentas de Rede](/loockup.png)

## Abrindo Ferramentas de Rede

Clique em **"Lookup"** na barra lateral.

## Ferramentas Disponíveis

| Ferramenta | Função | Exemplo de Entrada |
|------------|--------|-------------------|
| Registro A | Obter endereço IPv4 | example.com |
| Registro AAAA | Obter endereço IPv6 | example.com |
| Lookup MX | Obter servidores de email | example.com |
| Registro TXT | Obter registros TXT | example.com |
| Verificação SPF | Verificar registro SPF | example.com |
| Lookup CNAME | Obter nome canônico | www.example.com |
| Lookup NS | Obter servidores de nome | example.com |
| Registro SOA | Obter detalhes SOA | example.com |
| Lookup PTR | DNS reverso | 8.8.8.8 |
| Ping | Fazer ping em um host | example.com |
| Traceroute | Rastrear caminho de rede | example.com |
| Porta TCP | Testar se porta está aberta | example.com |
| Verificação Web | Verificar status do site | example.com |
| Blacklist | Verificar blacklists de IP | 1.2.3.4 |
| Verificação DNS | Análise completa de DNS | example.com |
| Info IP | Obter info de propriedade do IP | 8.8.8.8 |
| WHOIS | Info de registro de domínio | example.com |

## Usando uma Ferramenta de Rede

### Passo 1: Selecionar Ferramenta
Clique em uma ferramenta na barra lateral esquerda.

### Passo 2: Inserir Alvo
- Nome de domínio, endereço IP ou hostname
- Para Porta TCP: também insira o número da porta

### Passo 3: Executar
Clique no botão **"Executar"** ou pressione Enter.

### Passo 4: Ver Resultados
- **Badge verde** = Sucesso
- **Badge vermelho** = Falhou/Erro
- Timestamp mostra quando foi executado

## Ferramentas de DNS

### Registro A
Retorna o(s) endereço(s) IPv4 de um domínio.

```
example.com → 93.184.216.34
```

### Registro AAAA
Retorna o(s) endereço(s) IPv6 de um domínio.

```
example.com → 2606:2800:220:1:248:1893:25c8:1946
```

### Lookup MX
Retorna servidores de troca de email de um domínio.

```
example.com →
  10 mail1.example.com
  20 mail2.example.com
```

### Registro TXT
Retorna registros de texto (frequentemente usados para verificação, SPF, DKIM).

```
example.com → "v=spf1 include:_spf.google.com ~all"
```

### Lookup CNAME
Retorna o nome canônico (alias) de um subdomínio.

```
www.example.com → example.com
```

### Lookup NS
Retorna servidores de nome de um domínio.

```
example.com →
  ns1.example.com
  ns2.example.com
```

### Lookup PTR (DNS Reverso)
Retorna o hostname de um endereço IP.

```
8.8.8.8 → dns.google
```

## Diagnósticos de Rede

### Ping
Testa conectividade e mede latência.

```
Pingando example.com:
  Resposta: 64 bytes, tempo=23ms
  Resposta: 64 bytes, tempo=21ms
  Média: 22ms
```

### Traceroute
Rastreia o caminho de rede até um destino.

```
1  router.local (192.168.1.1) 1ms
2  isp-gateway (10.0.0.1) 5ms
3  backbone.isp.net 12ms
...
```

### Teste de Porta TCP
Verifica se uma porta específica está aberta.

**Botões de portas rápidas:** SSH(22), HTTP(80), HTTPS(443), MySQL(3306), etc.

```
example.com:443 → Aberta
example.com:22 → Fechada/Filtrada
```

### Verificação Web
Testa conectividade HTTP/HTTPS e resposta.

```
https://example.com
  Status: 200 OK
  Tempo de resposta: 145ms
  SSL: Válido
```

## Ferramentas de IP

### IP Info
Get ownership and location information for an IP.

```
8.8.8.8 →
  Organization: Google LLC
  Country: United States
  ASN: AS15169
```

### Blacklist Check
Check if an IP is on spam/abuse blacklists.

```
Checking 1.2.3.4:
  ✅ Spamhaus: Clean
  ✅ Barracuda: Clean
  ⚠️ SORBS: Listed
```

## Domain Tools

### WHOIS
Get domain registration information.

```
example.com →
  Registrar: Example Registrar
  Created: 1995-08-14
  Expires: 2025-08-13
  Status: clientTransferProhibited
```

### DNS Check
Comprehensive DNS health check.

```
Checking example.com:
  ✅ NS records found
  ✅ A record resolves
  ✅ MX records configured
  ✅ SPF record valid
```

## Tips

- **Copy results** by selecting and using `Ctrl+C`
- **Run multiple checks** on the same domain
- Results show **timestamps** for reference
- Use **IP Info** to investigate unknown IPs
- **Blacklist check** before sending emails from a new IP
