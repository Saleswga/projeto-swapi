const request = require('supertest');

test('Deve retornar erro 404 ao buscar por droides protocolares, um recurso inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/protocol_droids/');
   
    expect(resposta.status).toBe(404);
});
