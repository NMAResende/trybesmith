import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

const productsRouter = Router();

const productController = new ProductsController();

productsRouter.post('/', productController.create);
productsRouter.get('/', productController.getAll);

export default productsRouter;