import { describe, expect, it } from '@jest/globals';
import { testServer } from '../jest.setup';
import { StatusCodes } from 'http-status-codes';



describe('Cidades- Delete', () => {
  it('Teste - Deleta registro corretamente', async () => {
    const res1 = await testServer
      .post('/cidades')
      .send({ nome: 'Caxias do sul' });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resApagada = await testServer
      .delete(`/cidades/${res1.body}`)
      .send();

    expect(resApagada.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });

  it('Teste - Deleta registro com id < 1', async () => {
    const res1 = await testServer
      .delete('/cidades/0')
      .send();

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.params.id');
  });

  it('Teste - Deleta registro que não existe', async () => {

    const res1 = await testServer
      .delete('/cidades/99999')
      .send();

    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty('errors.default');
  });
});