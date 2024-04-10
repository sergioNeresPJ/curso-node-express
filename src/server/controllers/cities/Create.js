import { CitiesProvider } from '../../database/providers/cities';
import { validation } from '../../shared/middlewares';
import * as yup from 'yup';
import { StatusCodes } from 'http-status-codes';

export const createValidation = validation((getSchema) => ({
  body: getSchema(yup.object().shape({
    nome: yup.string().required().min(3),
  })),
}));

export const create = async (req, res) => {
  console.log(req.body);
  const result = await CitiesProvider.create(req.body);

  if (result instanceof Error){
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message,
      }
    });
  }
  return res.status(StatusCodes.CREATED).json(result);
};
