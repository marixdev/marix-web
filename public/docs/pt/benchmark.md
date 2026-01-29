# Benchmark de Servidor

Teste e meça o desempenho do seu servidor diretamente do terminal SSH com benchmarks abrangentes de sistema, disco e rede.

## Interface de Benchmark de Servidor

![Interface de Benchmark de Servidor](/benchmark.png)

## Visão Geral

O recurso de Benchmark de Servidor fornece uma análise completa de desempenho do seu servidor remoto, incluindo:

- **Informações do Sistema**: Detalhes de hardware e software
- **Desempenho do Disco**: Velocidades de leitura/escrita sequencial, latência de I/O e IOPS aleatórios
- **Velocidade de Rede**: Testes de velocidade multi-região com medições de download, upload e latência

## Como Usar

### Iniciando um Benchmark

1. Conecte-se a um servidor via SSH
2. Clique no botão **📊 Benchmark** no rodapé do terminal
3. (Opcional) Marque **"Upload to paste.dev"** para compartilhar resultados online
4. Clique em **Start Benchmark**

### Fases do Benchmark

O benchmark é executado em 4 fases:

| Fase | Descrição | Duração |
|------|-----------|---------|
| 1. Info do Sistema | Coleta informações de OS, CPU, RAM, disco | ~2 segundos |
| 2. Teste de Disco | Executa testes dd, ioping e fio | ~45 segundos |
| 3. Teste de Rede | Testa velocidade para 18 regiões globais | ~3-5 minutos |
| 4. Concluído | Mostra resultados e opções de exportação | - |

## Detalhes do Benchmark

### Informações do Sistema

Os dados coletados incluem:

| Campo | Descrição |
|-------|-----------|
| OS | Nome e versão do sistema operacional |
| Kernel | Versão do kernel Linux |
| Architecture | Arquitetura da CPU (x86_64, arm64, etc.) |
| Hostname | Nome do host do servidor |
| CPU Model | Nome e especificações do processador |
| CPU Cores | Número de núcleos da CPU |
| CPU Frequency | Frequência atual da CPU |
| Memory | RAM usada / total |
| Swap | Espaço swap usado / total |
| Disk | Espaço em disco usado / total |
| Uptime | Tempo de atividade do servidor |
| Load Average | Médias de carga de 1/5/15 minutos |
| Virtualization | Tipo de VM (KVM, VMware, OpenVZ, etc.) |

### Desempenho do Disco

#### Escrita/Leitura Sequencial (dd)

- **Método**: `dd if=/dev/zero of=test bs=64k count=16k conv=fdatasync`
- **Execuções**: 3 vezes, calculada a média para precisão
- **Local do Teste**: Diretório home (não /tmp para evitar tmpfs)
- **Mede**: Taxa de transferência sequencial em MB/s ou GB/s

#### Latência de I/O (ioping)

- **Método**: `ioping -c 10 -q /`
- **Mede**: Tempo de resposta de I/O do disco em microssegundos
- **Alvo**: Sistema de arquivos raiz para latência real do disco

#### IOPS Aleatórios 4K (fio)

- **Método**: fio com leitura/escrita aleatória 4K, profundidade de fila 64
- **Tempo de execução**: 30 segundos
- **Mede**:
  - Read IOPS
  - Write IOPS
  - Read Bandwidth
  - Write Bandwidth

> **Nota**: Se `fio` ou `ioping` não estiverem instalados, o benchmark tentará instalá-los automaticamente.

### Velocidade de Rede

Os testes são realizados contra servidores Speedtest.net em 18 regiões globais:

| Região | Localizações |
|--------|--------------|
| Ásia | Singapura, Tóquio, Hong Kong, Seul, Mumbai |
| Europa | Londres, Frankfurt, Paris, Amsterdã |
| Américas | Los Angeles, Nova York, Chicago, Toronto, São Paulo |
| Oceania | Sydney, Auckland |
| Oriente Médio/África | Dubai, Joanesburgo |

Para cada servidor, o benchmark mede:
- **Velocidade de Download**: MB/s ou Gbps
- **Velocidade de Upload**: MB/s ou Gbps
- **Latência**: Tempo de ida e volta em milissegundos

## Opções de Exportação

Após a conclusão do benchmark, você pode exportar os resultados em múltiplos formatos:

### 🌐 HTML

Arquivo HTML independente com layout estilizado. Recursos:
- Design de tema escuro
- Layout responsivo
- Todos os dados do benchmark em cartões
- Rodapé com links do marix.dev e GitHub

### 📋 JSON

Dados JSON estruturados com:
- Resultados completos do benchmark
- Timestamps
- Objeto meta com links do site e GitHub
- Formato legível por máquina para automação

### 🖼️ PNG

Captura de tela de imagem em alta resolução:
- Escala 2x para telas retina
- Cores RGB (compatível com html2canvas)
- Todas as seções incluídas
- Rodapé com marca

### 📄 TXT

Arquivo de texto formatado em arte ASCII:
- Caracteres de desenho de caixa para tabelas
- Fácil de copiar e colar
- Saída estilo terminal
- Rodapé com links

## Integração com paste.dev

Compartilhe seus resultados de benchmark online com um clique:

### Como Funciona

1. Marque **"Upload to paste.dev"** antes de iniciar o benchmark
2. Execute o benchmark
3. Após a conclusão, os resultados são automaticamente enviados
4. Um link compartilhável aparece com botões **Copy** e **Open**

### Recursos

- **Upload Automático**: Formato TXT enviado quando o benchmark é concluído
- **Copiar Link**: Clique em 📋 Copy para copiar URL para a área de transferência
- **Abrir Link**: Clique em 🔗 Open para ver no navegador
- **Compartilhamento Público**: Qualquer pessoa com o link pode ver os resultados

## Requisitos

### Requisitos do Servidor

| Ferramenta | Propósito | Auto-Instalação |
|------------|-----------|-----------------|
| `dd` | Velocidade de escrita/leitura do disco | Geralmente pré-instalado |
| `ioping` | Medição de latência de I/O | ✅ Sim |
| `fio` | Teste de IOPS aleatórios | ✅ Sim |
| `curl` | Testes de velocidade de rede | Geralmente pré-instalado |

### Gerenciadores de Pacotes Suportados

A auto-instalação funciona com:
- **apt** (Debian, Ubuntu)
- **yum** (CentOS, RHEL)
- **dnf** (Fedora)
- **pacman** (Arch Linux)
- **apk** (Alpine Linux)
- **zypper** (openSUSE)

## Solução de Problemas

### Teste de Disco Mostra Velocidades Irreais (5+ GB/s)

**Causa**: `/tmp` está montado como tmpfs (disco RAM)

**Solução**: O benchmark detecta isso automaticamente e usa o diretório home em vez disso.

### Teste de Rede Demora Muito

**Causa**: Algumas regiões podem estar lentas ou inacessíveis

**Solução**: O benchmark testa múltiplas regiões. Regiões lentas terão timeout após 30 segundos.

### "Permission Denied" ao Instalar Ferramentas

**Causa**: O usuário não tem acesso sudo

**Solução**: Peça ao administrador do servidor para instalar `fio` e `ioping`:

```bash
# Debian/Ubuntu
sudo apt install fio ioping

# CentOS/RHEL
sudo yum install fio ioping

# Fedora
sudo dnf install fio ioping
```

### Erro de Exportação PNG "oklch"

**Causa**: html2canvas não suporta o formato de cor oklch

**Solução**: Corrigido na v1.0.19. PNG agora usa cores RGB hexadecimais.

## Exemplo de Saída

### Amostra de Formato TXT

```
════════════════════════════════════════════════════════════
  MARIX SERVER BENCHMARK - my-server.com
  1/29/2026, 10:30:45 AM
════════════════════════════════════════════════════════════

┌────────────────────────────────────────────────────────────┐
│                    SYSTEM INFORMATION                      │
└────────────────────────────────────────────────────────────┘
  OS            : Ubuntu 22.04.3 LTS
  CPU           : AMD EPYC 7B13 64-Core Processor
  CPU Cores     : 4
  Memory        : 2.1 GB / 8.0 GB (26%)
  Disk          : 45 GB / 160 GB (28%)
  Virtualization: KVM

┌────────────────────────────────────────────────────────────┐
│                    DISK PERFORMANCE                        │
└────────────────────────────────────────────────────────────┘
  Sequential Write : 580 MB/s
  Sequential Read  : 1.2 GB/s
  I/O Latency      : 227 µs

  Random 4K IOPS (fio):
    Read IOPS   : 45,230
    Write IOPS  : 15,076
    Read BW     : 176.7 MB/s
    Write BW    : 58.9 MB/s

┌────────────────────────────────────────────────────────────┐
│                    NETWORK SPEED                           │
└────────────────────────────────────────────────────────────┘
  Singapore    : ↓ 892 Mbps  ↑ 456 Mbps  (12ms)
  Tokyo        : ↓ 756 Mbps  ↑ 389 Mbps  (45ms)
  Frankfurt    : ↓ 234 Mbps  ↑ 178 Mbps  (156ms)
  ...

────────────────────────────────────────────────────────────
  marix.dev | https://github.com/marixdev/marix
  Generated by Marix SSH Client v1.0.19
────────────────────────────────────────────────────────────
```

## Notas de Segurança

- O benchmark executa comandos no servidor remoto via SSH
- Nenhum dado é enviado para servidores externos exceto Speedtest.net (para testes de velocidade)
- Os uploads para paste.dev são opcionais e iniciados pelo usuário
- Arquivos de teste temporários são automaticamente limpos após o benchmark
