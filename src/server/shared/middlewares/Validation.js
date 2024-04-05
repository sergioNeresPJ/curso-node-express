import { StatusCodes } from 'http-status-codes';

export const validation = (getAllSchemas) => async (req, res, next) => {
  const schemas = getAllSchemas((schema) => schema);

  const errorsResult = {};

  Object.entries(schemas).forEach(([key, schema]) => {
    try {
      schema.validateSync(req[key], { abortEarly: false });
    } catch (err) {
      const errors = {};

      err.inner.forEach(error => {
        if (error.path === undefined) return;
        errors[error.path] = error.message;
      });

      errorsResult[key] = errors;
    }
  });

  if (Object.entries(errorsResult).length === 0) {
    return next();
  } else {
    return res.status(StatusCodes.BAD_REQUEST).json({ errors: errorsResult });
  }
};
