import { validation } from '../../shared/middlewares';
import * as yup from 'yup';

export const createValidation = validation((getSchema) => ({
  body: getSchema(yup.object().shape({
    nome: yup.string().required().min(3),
  })),
}));

export const create = async (req, res) => {
  console.log(req.body);
  return res.send('Create!');
};
