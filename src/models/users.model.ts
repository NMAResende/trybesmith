import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { ILogin, IUsers } from '../interfaces/users.interface';
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

  public async login(login: ILogin): Promise<IUsers[]> {
    const { username } = login;

    const [rows] = await this.connection.execute<IUsers[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.users WHERE username = ?', 
      [username],
    );
    
    return rows;
  }
}