# AgroGestor - AI Agent para Gestão de Fazendas

Agente de IA especializado em gerenciar dados de fazendas via API PostgREST (Supabase).

## 📋 Estrutura do Repositório

```
agrogestor-agent/
├── README.md                    # Este arquivo
├── prompts/
│   └── system_prompt.md         # Prompt do sistema para o AI Agent
└── tools/
    ├── preparar_requisicao/
    │   ├── schema.json          # Schema da tool
    │   └── code.js              # Código JavaScript
    └── executar_http/
        ├── schema.json          # Schema da tool
        └── code.js              # Código JavaScript
```

## 🚀 Como Usar no n8n

### 1. System Prompt

Copie o conteúdo de `prompts/system_prompt.md` para o campo **System Message** do nó **AI Agent**.

### 2. Tool: preparar_requisicao

**Criar Code Tool:**
1. Nome: `preparar_requisicao`
2. Description: `Prepara requisições HTTP para o banco de dados PostgREST`
3. Schema: Cole o conteúdo de `tools/preparar_requisicao/schema.json`
4. Code: Cole o conteúdo de `tools/preparar_requisicao/code.js`

### 3. Tool: executar_http

**Criar Code Tool:**
1. Nome: `executar_http`
2. Description: `Executa a requisição HTTP preparada enviando para o webhook`
3. Schema: Cole o conteúdo de `tools/executar_http/schema.json`
4. Code: Cole o conteúdo de `tools/executar_http/code.js`

## 🔧 Configuração

### Variáveis de Ambiente

Atualize as seguintes variáveis no código das tools:

- **Supabase URL:** `https://nrqyljoxvdjdfknmxtjl.supabase.co/rest/v1`
- **Webhook URL:** `https://n8n.vitorbusstech.shop/webhook/requisição-vacas-supabase`

## 📊 Banco de Dados

O agente tem acesso às seguintes tabelas:

### `vacas` (Animais)
- `brinco` (PK) - Número do brinco
- `nome` - Nome do animal
- `status_geral` - Ativa, Vendida, Falecida
- `status_reprodutivo` - Vazia, Prenha, Amamentando, Cio
- `status_saude` - Saudável, Em Tratamento, Atenção
- E outros campos...

### `eventos` (Histórico)
- `id` (PK) - Auto-incremento
- `brinco_id` (FK) - Referência para vacas
- `tipo_evento` - Ex: Vacina, Parto, Inseminação
- `data_evento` - Timestamp do evento

## 🎯 Exemplos de Uso

**Listar vacas prenhas:**
```
Liste todas as vacas que estão prenhas
```

**Cadastrar nova vaca:**
```
Cadastre a vaca Mimosa, brinco 500, nascida hoje
```

**Registrar evento:**
```
Registre uma vacina para a vaca chamada Malhada
```

## 📝 Licença

MIT
