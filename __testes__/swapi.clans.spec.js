const request = require('supertest');

test('Deve retornar erro 404 ao buscar por clãs, um recurso inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/clans/');
    
    expect(resposta.status).toBe(404);
});