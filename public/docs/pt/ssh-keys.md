# Gerenciador de Chaves SSH

Gerencie chaves SSH para autenticação sem senha nos seus servidores.

## Interface do Gerenciador de Chaves SSH

![Interface do Gerenciador de Chaves SSH](/sshkey.png)

## Abrindo o Gerenciador de Chaves SSH

Clique em **"Chave SSH"** no menu da barra lateral.

## Gerar uma Nova Chave SSH

### Passo 1: Abrir Gerador
Clique no botão **"Gerar Chave"**

### Passo 2: Preencher Detalhes

| Campo | Descrição | Obrigatório |
|-------|-----------|-------------|
| Nome da Chave | Um nome para identificar esta chave (ex: "laptop-trabalho") | Sim |
| Tipo de Chave | ed25519 (recomendado), RSA ou ECDSA | Sim |
| Frase Secreta | Senha para criptografar a chave (opcional mas recomendado) | Não |
| Comentário | Nota adicional (ex: endereço de email) | Não |

### Passo 3: Gerar
Clique em **"Gerar"**

### Passo 4: Pronto
A chave aparece na sua lista com:
- Nome
- Badge de tipo (ED25519, RSA, ECDSA)
- Impressão digital
- Data de criação

## Comparação de Tipos de Chave

| Tipo | Segurança | Compatibilidade | Recomendação |
|------|-----------|-----------------|--------------|
| **ED25519** | Excelente | Servidores modernos | ✅ Recomendado |
| **RSA (4096)** | Muito Boa | Universal | Bom para sistemas antigos |
| **ECDSA** | Boa | Maioria dos servidores | Alternativa ao ED25519 |

## Importar uma Chave Existente

### Passo 1: Abrir Importador
Clique no botão **"Importar Chave"**

### Passo 2: Fornecer Dados da Chave

| Campo | Descrição | Obrigatório |
|-------|-----------|-------------|
| Nome da Chave | Um nome para esta chave | Sim |
| Chave Privada | Cole o conteúdo da chave OU clique em "Selecionar Arquivo" | Sim |
| Comentário | Nota adicional | Não |

### Passo 3: Importar
Clique em **"Importar"**

## Ver Chave Pública

1. Clique em uma chave na lista
2. O painel de detalhes aparece à direita
3. Clique em **"Mostrar Chave Pública"**
4. Copie a chave pública para adicionar ao `~/.ssh/authorized_keys` do seu servidor

## Exportar uma Chave

1. Encontre a chave na lista
2. Clique no botão **Exportar** (ou clique direito → Exportar)
3. Escolha:
   - **Exportar Apenas Chave Pública** - Mais seguro, para compartilhar
   - **Exportar Ambas as Chaves** - Privada + Pública (mantenha seguro!)
4. Selecione o local para salvar
5. As chaves são salvas como arquivos

## Excluir uma Chave

1. Encontre a chave na lista
2. Clique no botão **Excluir** (ícone de lixeira)
3. Confirme a exclusão

> ⚠️ **Aviso:** Chaves excluídas não podem ser recuperadas. Certifique-se de ter backups se necessário.

## Usar uma Chave para Conexão com Servidor

1. Ao adicionar/editar um servidor
2. Defina Autenticação como **"Chave SSH"**
3. No dropdown **"Chave SSH do Chaveiro"**
4. Selecione sua chave importada
5. Se a chave tem frase secreta, digite-a no campo Frase Secreta

## Adicionar Chave Pública ao Servidor

Para habilitar login sem senha, adicione sua chave pública ao servidor:

### Método 1: Manual
```bash
# Na sua máquina local, copie a chave pública
# Então no servidor:
echo "sua-chave-publica-aqui" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

### Método 2: Usando ssh-copy-id (se disponível)
```bash
ssh-copy-id -i ~/.ssh/sua_chave.pub usuario@servidor
```

## Melhores Práticas

1. **Use ED25519** para novas chaves quando possível
2. **Adicione uma frase secreta** para segurança adicional
3. **Use chaves diferentes** para propósitos diferentes (trabalho, pessoal)
4. **Faça backup das suas chaves** com segurança
5. **Nunca compartilhe chaves privadas** - apenas compartilhe chaves públicas
6. **Rotacione chaves periodicamente** para segurança
