const request = require('supertest');

test('Deve visualizar informações de cadastro, quando buscar pelo planeta "Bespin" (ID 6)', async () => {
    const resposta = await request('https://swapi.dev/api').get('/planets/6/');  // ID do planeta "Bespin"

    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('Bespin');
    expect(resposta.body.rotation_period).toBe('12');
    expect(resposta.body.orbital_period).toBe('5110');
    expect(resposta.body.diameter).toBe('118000');
    expect(resposta.body.climate).toBe('temperate');
    expect(resposta.body.gravity).toBe('1.5 (surface), 1 standard (Cloud City)');
    expect(resposta.body.terrain).toBe('gas giant');
    expect(resposta.body.surface_water).toBe('0');
    expect(resposta.body.population).toBe('6000000');
    
    expect(resposta.body.residents).toBeDefined();
    expect(resposta.body.residents.length).toBeGreaterThan(0);
    expect(resposta.body.residents[0]).toBe('https://swapi.dev/api/people/26/');  // Verificando um dos residentes

    expect(resposta.body.films).toBeDefined();
    expect(resposta.body.films.length).toBeGreaterThan(0);
    expect(resposta.body.films[0]).toBe('https://swapi.dev/api/films/2/');  // Verificando o filme em que o planeta aparece
});

test('Deve retornar erro 404 ao buscar por um planeta inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/planets/9999/');  // ID inexistente
    
    expect(resposta.status).toBe(404);
});