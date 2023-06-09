import { Request, Response } from 'express';

import IProducts from '../interfaces/products.interface';
import ProductsService from '../services/products.service';

export default class ProductController {
  public productService = new ProductsService();

  public create = async (req: Request, res: Response) => {
    const product = req.body as IProducts;
    const newProduct = await this.productService.create(product);
    res.status(201).json(newProduct);
  };

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.productService.getAll();
    return res.status(200).json(products);
  };
}