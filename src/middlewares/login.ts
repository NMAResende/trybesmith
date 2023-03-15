import { NextFunction, Request, Response } from 'express';

export default function loginValidate(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body;

  if (!username) {
    return res.status(400).json({ message: '"username" is required' });
  }
  // throw new HttpException(400, '"username" is required');
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  // throw new HttpException(400, '"password" is required');

  next();
}