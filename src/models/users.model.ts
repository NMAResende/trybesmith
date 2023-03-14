import { ResultSetHeader } from 'mysql2/promise';
import { IUsers } from '../interfaces/users.interface';
import connection from './connection';

export default class UserModel {
  private connection = connection;

  public async create(user: IUsers): Promise<IUsers> {
    const { username, vocation, level, password } = user;

    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );
    const { insertId } = result;
  
    return { id: insertId, username, vocation, level };
  }
}