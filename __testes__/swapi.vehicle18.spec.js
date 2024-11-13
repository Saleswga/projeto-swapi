const request = require('supertest');

test('Deve visualizar informações de cadastro, quando buscar pelo veículo "AT-AT" (ID 18)', async () => {
    const resposta = await request('https://swapi.dev/api').get('/vehicles/18/');  // ID do veículo "AT-AT"

    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('AT-AT');
    expect(resposta.body.model).toBe('All Terrain Armored Transport');
    expect(resposta.body.manufacturer).toBe('Kuat Drive Yards, Imperial Department of Military Research');
    expect(resposta.body.cost_in_credits).toBe('unknown');
    expect(resposta.body.length).toBe('20');
    expect(resposta.body.max_atmosphering_speed).toBe('60');
    expect(resposta.body.crew).toBe('5');
    expect(resposta.body.passengers).toBe('40');
    expect(resposta.body.cargo_capacity).toBe('1000');
    expect(resposta.body.consumables).toBe('unknown');
    expect(resposta.body.vehicle_class).toBe('assault walker');
    
    // Verificando que o array de pilotos está vazio
    expect(resposta.body.pilots).toBeDefined();
    expect(resposta.body.pilots.length).toBe(0);

    // Verificando os filmes nos quais o veículo aparece
    expect(resposta.body.films).toBeDefined();
    expect(resposta.body.films.length).toBeGreaterThan(0);
    expect(resposta.body.films[0]).toBe('https://swapi.dev/api/films/2/');  // Verificando o primeiro filme
    expect(resposta.body.films[1]).toBe('https://swapi.dev/api/films/3/');  // Verificando o segundo filme
});

test('Deve retornar erro 404 ao buscar por um veículo inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/vehicles/9999/');  // ID inexistente
    
    expect(resposta.status).toBe(404);
});