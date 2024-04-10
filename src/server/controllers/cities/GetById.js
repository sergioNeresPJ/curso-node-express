import { validation } from '../../shared/middlewares';
import * as yup from 'yup';
import {StatusCodes} from 'http-status-codes';
import {CitiesProvider} from '../../database/providers/cities';


export const getByIdValidation = validation((getSchema) => ({
  params: getSchema(yup.object().shape({
    id: yup.string().required(),
  })),
}));

export const getById = async (req, res) => {
  if (!req.params.id) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: 'O parâmetro "id" precisa ser informado.'
      }
    });
  }

  const result = await CitiesProvider.getById(req.params.id);
  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });
  }

  return res.status(StatusCodes.OK).json(result);
};
