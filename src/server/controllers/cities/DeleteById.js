import { validation } from '../../shared/middlewares';
import * as yup from 'yup';

export const deleteByIdValidation = validation((getSchema) => ({
  params: getSchema(yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
  })),
}));

export const deleteById = async (req, res) => {
  console.log(req.params);
  return res.send('Create!');
};
