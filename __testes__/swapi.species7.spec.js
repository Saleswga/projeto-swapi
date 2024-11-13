const request = require('supertest');

test('Deve visualizar informações de cadastro, quando buscar pela espécie "Trandoshan" (ID 7)', async () => {
    const resposta = await request('https://swapi.dev/api').get('/species/7/');  // ID da espécie "Trandoshan"

    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('Trandoshan');
    expect(resposta.body.classification).toBe('reptile');
    expect(resposta.body.designation).toBe('sentient');
    expect(resposta.body.average_height).toBe('200');
    expect(resposta.body.skin_colors).toBe('brown, green');
    expect(resposta.body.hair_colors).toBe('none');
    expect(resposta.body.eye_colors).toBe('yellow, orange');
    expect(resposta.body.average_lifespan).toBe('unknown');
    expect(resposta.body.language).toBe('Dosh');
    
    expect(resposta.body.homeworld).toBe('https://swapi.dev/api/planets/29/');  // Verificando o planeta de origem

    expect(resposta.body.people).toBeDefined();
    expect(resposta.body.people.length).toBeGreaterThan(0);
    expect(resposta.body.people[0]).toBe('https://swapi.dev/api/people/24/');  // Verificando um dos indivíduos

    expect(resposta.body.films).toBeDefined();
    expect(resposta.body.films.length).toBeGreaterThan(0);
    expect(resposta.body.films[0]).toBe('https://swapi.dev/api/films/2/');  // Verificando o filme em que a espécie aparece
});

test('Deve retornar erro 404 ao buscar por uma espécie inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/species/9999/');  // ID inexistente
    
    expect(resposta.status).toBe(404);
});