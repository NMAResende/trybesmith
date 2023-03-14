import { IOrders } from '../interfaces/orders.interface';
import OrderModel from '../models/orders.model';

export default class OrderService {
  public orderModel = new OrderModel();

  public async getAll(): Promise<IOrders[]> {
    const orders = await this.orderModel.getAll();

    return orders;
  }
}