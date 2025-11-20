// Tool: preparar_requisicao
// Prepara os parâmetros da requisição HTTP para o banco de dados PostgREST

// Estratégia robusta: tenta acessar como variáveis globais (Tool) ou via items (Code Node)
let reqMethod, reqResource, reqQueryParams, reqBody;

try {
  // Tenta acessar como variáveis globais (contexto de Custom Tool)
  reqMethod = typeof method !== 'undefined' ? method : null;
  reqResource = typeof resource !== 'undefined' ? resource : null;
  reqQueryParams = typeof query_params !== 'undefined' ? query_params : '';
  reqBody = typeof body !== 'undefined' ? body : {};
} catch (e) {
  // Fallback para contexto de Code Node
  const params = items[0].json;
  reqMethod = params.method;
  reqResource = params.resource;
  reqQueryParams = params.query_params || '';
  reqBody = params.body || {};
}

// Se ainda não temos os parâmetros, tenta via $input
if (!reqMethod || !reqResource) {
  const inputData = $input.all()[0].json;
  reqMethod = inputData.method;
  reqResource = inputData.resource;
  reqQueryParams = inputData.query_params || '';
  reqBody = inputData.body || {};
}

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
