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
    const user = await this.userModel.login(login);
    // console.log(users);
    
    if (!user) {
      throw new HttpException(401, 'Username or password invalid');
    }

    const token = generateToken({ username: user.username }); 
    return token;
  }
}