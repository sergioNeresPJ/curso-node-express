import { validation } from '../../shared/middlewares';
import * as yup from 'yup';
import {StatusCodes} from 'http-status-codes';
import {CitiesProvider} from '../../database/providers/cities';


export const getAllValidation = validation((getSchema) => ({
  query: getSchema(yup.object().shape({
    page: yup.number().moreThan(0),
    limit: yup.number().moreThan(0),
  })),
}));

export const getAll = async (req, res) => {
  const result = await CitiesProvider.getAll(req.query.page || 1, req.query.limit || 7);
  const count = await CitiesProvider.count(req.query.filter);

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: { default: result.message }
    });
  } else if (count instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: { default: count.message }
    });
  }

  res.setHeader('access-control-expose-headers', 'x-total-count');
  res.setHeader('x-total-count', count);

  return res.status(StatusCodes.OK).json(result);
};
