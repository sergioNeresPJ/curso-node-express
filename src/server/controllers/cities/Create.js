import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

const bodyValidation = yup.object().shape({
  name: yup.string().required().min(3),
  state: yup.string().required().min(3),
});

export async function create(req, res) {
  try {
    await bodyValidation.validate(req.body, { abortEarly: false });
    return res.send('Create!');
  } catch (err) {
    const validationErrors = {};
    
    err.inner.forEach((error) => {
      if(error.path === undefined) return;
      validationErrors[error.path] = error.message;
    });

    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: validationErrors,
    });
  }
}
