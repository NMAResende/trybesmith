import { NextFunction, Request, Response } from 'express';

export default function usernameValidate(req: Request, res: Response, next: NextFunction) {
  const { amount } = req.body;

  if (!amount) {
    return res.status(400).json({ message: '"amount" is required' });
  }
  // throw new HttpException(400, '"amount" is required');

  if (typeof amount !== 'string') {
    return res.status(422).json({ message: '"amount" must be a string' });
  }
  // throw new HttpException(422, '"amount" must be a string');

  if (amount.length < 3) {
    return res.status(422).json({ message: '"amount" length must be at least 3 characters long' });
  } 
  // {
  //   throw new HttpException(422, '"name" length must be at least 3 characters long');
  // }
  next();
}