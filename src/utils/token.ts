import jwt, { SignOptions } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || '1234';

const JWT_CONFIG: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '3d',
};

const generateToken = (payload: { username: string }) => jwt.sign(payload, JWT_SECRET, JWT_CONFIG);

export default generateToken;