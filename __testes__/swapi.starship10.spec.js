const request = require('supertest');

test('Deve visualizar informações de cadastro, quando buscar pela nave "Millennium Falcon" (ID 10)', async () => {
    const resposta = await request('https://swapi.dev/api').get('/starships/10/');  // ID da nave "Millennium Falcon"

    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('Millennium Falcon');
    expect(resposta.body.model).toBe('YT-1300 light freighter');
    expect(resposta.body.manufacturer).toBe('Corellian Engineering Corporation');
    expect(resposta.body.cost_in_credits).toBe('100000');
    expect(resposta.body.length).toBe('34.37');
    expect(resposta.body.max_atmosphering_speed).toBe('1050');
    expect(resposta.body.crew).toBe('4');
    expect(resposta.body.passengers).toBe('6');
    expect(resposta.body.cargo_capacity).toBe('100000');
    expect(resposta.body.consumables).toBe('2 months');
    expect(resposta.body.hyperdrive_rating).toBe('0.5');
    expect(resposta.body.MGLT).toBe('75');
    expect(resposta.body.starship_class).toBe('Light freighter');
    
    expect(resposta.body.pilots).toBeDefined();
    expect(resposta.body.pilots.length).toBeGreaterThan(0);
    expect(resposta.body.pilots[0]).toBe('https://swapi.dev/api/people/13/');  // Verificando um dos pilotos

    expect(resposta.body.films).toBeDefined();
    expect(resposta.body.films.length).toBeGreaterThan(0);
    expect(resposta.body.films[0]).toBe('https://swapi.dev/api/films/1/');  // Verificando um dos filmes

});

test('Deve retornar erro 404 ao buscar por uma nave inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/starships/9999/');  // ID inexistente
    
    expect(resposta.status).toBe(404);
});