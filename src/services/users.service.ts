import { ILogin, IUsers } from '../interfaces/users.interface';
import UserModel from '../models/users.model';
import HttpException from '../shared/http.exception';
import generateToken from '../utils/token';

export default class UserService {
  public userModel = new UserModel();

  public async create(user: IUsers): Promise<IUsers> {
    const newUser = await this.userModel.create(user);
    return newUser;
  }

  public async login(login: ILogin) {
    const users = await this.userModel.login(login);
    console.log(users);
    
    if (!users) throw new HttpException(401, 'Username or password invalid');

    // if (users[0].password !== login.password) {
    //   throw new HttpException(401, 'Username or password invalid');
    // }

    const token = generateToken({ username: login.username }); 
    return token;
  }
}