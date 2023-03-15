import { Router } from 'express';
import OrderController from '../controllers/orders.controller';
import authMiddleware from '../middlewares/auth.middleware';
import ordersValidate from '../middlewares/ordersValidate';

const ordersRouter = Router();

const orderController = new OrderController();

ordersRouter.get('/', orderController.getAll);

ordersRouter.post('/', authMiddleware, ordersValidate, orderController.create);

export default ordersRouter;