import { NextFunction, Request, Response } from 'express';

export default function usernameValidate(req: Request, res: Response, next: NextFunction) {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  // throw new HttpException(400, '"name" is required');

  if (typeof name !== 'string') {
    return res.status(422).json({ message: '"name" must be a string' });
  }
  
  // throw new HttpException(422, '"name" must be a string');

  if (name.length < 3) {
    return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
  }
  
  // {
  //   throw new HttpException(422, '"name" length must be at least 3 characters long');
  // }
  next();
}