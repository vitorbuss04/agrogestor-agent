// Tool: executar_http
// Recebe os dados preparados e envia para o webhook executor

// Acessa os parâmetros
let requestUrl, requestMethod, requestBody;

try {
  requestUrl = typeof url !== 'undefined' ? url : null;
  requestMethod = typeof method !== 'undefined' ? method : null;
  requestBody = typeof body !== 'undefined' ? body : null;
} catch (e) {
  const params = items[0].json;
  requestUrl = params.url;
  requestMethod = params.method;
  requestBody = params.body;
}

if (!requestUrl || !requestMethod) {
  const inputData = $input.all()[0].json;
  requestUrl = inputData.url;
  requestMethod = inputData.method;
  requestBody = inputData.body;
}

// URL do webhook executor
const webhookUrl = 'https://n8n.vitorbusstech.shop/webhook/requisição-vacas-supabase';

// Payload para o webhook
const webhookPayload = {
  url: requestUrl,
  method: requestMethod,
  body: requestBody
};

// Faz a requisição HTTP para o webhook
try {
  const response = await this.helpers.httpRequest({
    method: 'POST',
    url: webhookUrl,
    body: webhookPayload,
    json: true
  });

  return JSON.stringify({
    status: 'success',
    data: response
  });
} catch (error) {
  return JSON.stringify({
    status: 'error',
    message: error.message
  });
}
