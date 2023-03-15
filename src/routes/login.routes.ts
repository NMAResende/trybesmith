import { Router } from 'express';
import UserController from '../controllers/users.controller';
import loginValidate from '../middlewares/login';

const loginRouter = Router();

const userController = new UserController();

loginRouter.post('/', loginValidate, userController.login);

export default loginRouter;