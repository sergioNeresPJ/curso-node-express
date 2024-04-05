import { validation } from '../../shared/middlewares';
import * as yup from 'yup';

export const updateByIdValidation = validation((getSchema) => ({
  params: getSchema(yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
  })),
  body: getSchema(yup.object().shape({
    nome: yup.string().required().min(3),
  })),
}));

export const updateById = async (req, res) => {
  console.log(req.params);
  console.log(req.body);
  return res.send('Create!');
};
