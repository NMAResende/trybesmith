import { IUsers } from '../interfaces/users.interface';
import UserModel from '../models/users.model';

export default class UserService {
  public userModel = new UserModel();

  public async create(user: IUsers): Promise<IUsers> {
    const newUser = await this.userModel.create(user);
    return newUser;
  }
}