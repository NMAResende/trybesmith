import { Request, Response } from 'express';
import OrderService from '../services/orders.service';

export default class OrderController {
  public orderService = new OrderService();

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getAll();
    return res.status(200).json(orders);
  };

  public create = async (req: Request, res: Response) => {
    const order = req.body;
    const newOrder = await this.orderService.create(order);
    res.status(201).json(newOrder);
  };
}
