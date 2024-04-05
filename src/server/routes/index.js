import { Router } from 'express';
import {CitiesController} from '../controllers/index';
const router = Router();

router.get('/cities/:id', CitiesController.getByIdValidation, CitiesController.getById);
router.put('/cities/:id', CitiesController.updateByIdValidation, CitiesController.updateById);
router.delete('/cities/:id', CitiesController.deleteByIdValidation, CitiesController.deleteById);
router.get('/cities', CitiesController.getAllValidation, CitiesController.getAll);
router.post('/cities', CitiesController.createValidation, CitiesController.create);

export { router };
