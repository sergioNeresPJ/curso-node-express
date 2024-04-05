import { describe, expect, it } from '@jest/globals';
import { testServer } from '../jest.setup';
import { StatusCodes } from 'http-status-codes';



describe('Cidades - UpdateById', () => {

  it('Teste - Atualiza registro', async () => {

    const res1 = await testServer
      .post('/cidades')
      .send({ nome: 'Caxias do sul' });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resAtualizada = await testServer
      .put(`/cidades/${res1.body}`)
      .send({ nome: 'Caxias' });

    expect(resAtualizada.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });
  it('Teste - Tenta atualizar registro que não existe', async () => {

    const res1 = await testServer
      .put('/cidades/99999')
      .send({ nome: 'Caxias' });

    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty('errors.default');
  });
});