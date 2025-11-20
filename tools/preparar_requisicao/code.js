// Tool: preparar_requisicao
// Prepara os parâmetros da requisição HTTP para o banco de dados PostgREST

// Acessa os inputs via 'query' conforme especificação do n8n Code Tool
const reqMethod = query.method;
const reqResource = query.resource;
const reqQueryParams = query.query_params || '';
const reqBody = query.body || {};

// Configuração da Base URL
const baseUrl = 'https://nrqyljoxvdjdfknmxtjl.supabase.co/rest/v1';

// Construção da URL completa
const fullUrl = `${baseUrl}/${reqResource}${reqQueryParams ? '?' + reqQueryParams : ''}`;

// Retorna os parâmetros estruturados (sem headers, serão adicionados pelo webhook)
// Body sempre presente, mesmo que null
return JSON.stringify({
  url: fullUrl,
  method: reqMethod,
  body: (reqMethod === 'POST' || reqMethod === 'PATCH') ? reqBody : null
});
