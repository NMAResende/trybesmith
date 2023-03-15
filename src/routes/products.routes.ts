import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

import amountValidate from '../middlewares/amountValidate';
import nameValidate from '../middlewares/nameValidate';

const productsRouter = Router();

const productController = new ProductsController();

productsRouter.post('/', nameValidate, amountValidate, productController.create);
productsRouter.get('/', nameValidate, amountValidate, productController.getAll);

export default productsRouter;