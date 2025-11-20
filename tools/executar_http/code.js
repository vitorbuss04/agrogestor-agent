// Tool: executar_http
// Recebe os dados preparados e envia para o webhook executor

// Acessa os inputs via 'query' conforme especificação do n8n Code Tool
const requestUrl = query.url;
const requestMethod = query.method;
const requestBody = query.body;

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
