import { validation } from '../../shared/middlewares';
import * as yup from 'yup';

export const getAllValidation = validation((getSchema) => ({
  query: getSchema(yup.object().shape({
    page: yup.number().moreThan(0),
    limit: yup.number().moreThan(0),
    filter: yup.string(),
  })),
}));

export const getAll = async (req, res) => {
  console.log(req.query);
  res.setHeader('access-control-expose-headers', 'x-total-count');
  return res.send('Create!');
};
