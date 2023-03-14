import { Request, Response } from 'express';
import { IUsers } from '../interfaces/users.interface';
import UserService from '../services/users.service';
import generateToken from '../utils/token';

export default class UserController {
  public userService = new UserService();

  public create = async (req: Request, res: Response) => {
    const user = req.body as IUsers;
    await this.userService.create(user);
    const token = generateToken(user);
    res.status(201).json({ token });
  };
}
