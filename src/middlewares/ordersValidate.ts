import { NextFunction, Request, Response } from 'express';

export default function usernameValidate(req: Request, res: Response, next: NextFunction) {
  const { productsIds } = req.body;

  if (!productsIds) {
    return res.status(400).json({ message: '"productsIds" is required' });
  }
 
  // referência: https://www.freecodecamp.org/news/check-if-javascript-array-is-empty-or-not-with-length/#:~:text=To%20check%20if%20an%20array,0%20elements%20inside%20of%20it.
  if (!Array.isArray(productsIds)) {
    return res.status(422).json({ message: '"productsIds" must be an array' });
  }

  if (productsIds.length === 0) {
    return res.status(422)
      .json({ message: '"productsIds" must include only numbers' });
  } 
  next();
}