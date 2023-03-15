import { Router } from 'express';
import UserController from '../controllers/users.controller';
import levelValidate from '../middlewares/levelValidate';
import passwordValidate from '../middlewares/passwordValidate';
import usernameValidate from '../middlewares/usernameValidate';
import vocationValidate from '../middlewares/vocationValidate';

const usersRouter = Router();

const userController = new UserController();

usersRouter.post(
  '/', 
  usernameValidate,
  vocationValidate,
  levelValidate,
  passwordValidate,
  userController.create,
);

export default usersRouter;