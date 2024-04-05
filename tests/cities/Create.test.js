import { describe, expect, it } from '@jest/globals';
import { testServer } from '../jest.setup';
import { StatusCodes } from 'http-status-codes';



describe('Cidades- Create', () => {
  it('Teste - Cria registro corretamente', async () => {
    const res1 = await testServer
      .post('/cidades')
      .send({ nome: 'Boituva' });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual(('number'));
  });

  it('Teste - Cria registro com nome muito curto', async () => {
    const res1 = await testServer
      .post('/cidades')
      .send({ nome: 'Bo' });

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.body.nome');
  });

  it('Teste - Cria registro sem corpo na solicitação', async () => {
    const res1 = await testServer
      .post('/cidades')
      .send({ });

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.body.nome');
  });
});