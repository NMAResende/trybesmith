import { Request, Response } from 'express';
import { ILogin, IUsers } from '../interfaces/users.interface';
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

  public login = async (req: Request<object, object, ILogin>, res: Response) => {
    const { body } = req;
    const token = await this.userService.login(body);

    // if (!token) {
    //   return res.status(401).json({ message: 'Username or password invalid' });
    // }
    
    return res.status(200).json({ token });
  };
}
