const request = require('supertest');

test('Deve retornar erro 404 ao buscar por alianças, um recurso inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/alliances/');
    
    expect(resposta.status).toBe(404);
});