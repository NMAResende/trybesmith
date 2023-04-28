import { IOrders } from '../interfaces/orders.interface';
import OrderModel from '../models/orders.model';
import ProductModel from '../models/products.model';

export default class OrderService {
  public orderModel = new OrderModel();

  public productModel = new ProductModel();

  public async getAll(): Promise<IOrders[]> {
    const orders = await this.orderModel.getAll();

    return orders;
  }

  public async create(userId: number, productsIds: number[]) {
    const newOrderId = await this.orderModel.create(userId);
    return Promise.all(productsIds
      .map((productId) => this.productModel.updateProduct(newOrderId, productId)));
  }
}