import jwt, { SignOptions } from 'jsonwebtoken';
import { IUsers } from '../interfaces/users.interface';

const JWT_SECRET = process.env.JWT_SECRET || '1234';

const JWT_CONFIG: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '3d',
};

const generateToken = (payload: IUsers) => jwt.sign(payload, JWT_SECRET, JWT_CONFIG);

export default generateToken;