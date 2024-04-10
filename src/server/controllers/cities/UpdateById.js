import { validation } from '../../shared/middlewares';
import * as yup from 'yup';
import {StatusCodes} from 'http-status-codes';
import {CitiesProvider} from '../../database/providers/cities';


export const updateByIdValidation = validation((getSchema) => ({
  params: getSchema(yup.object().shape({
    id: yup.string().required(),
  })),
  body: getSchema(yup.object().shape({
    nome: yup.string().required().min(3),
  })),
}));

export const updateById = async (req, res) => {
  if (!req.params.id) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: 'O parâmetro "id" precisa ser informado.'
      }
    });
  }

  const result = await CitiesProvider.updateById(req.params.id, req.body);
  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });
  }

  return res.status(StatusCodes.NO_CONTENT).json(result);
};
