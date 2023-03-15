import { IOrders } from '../interfaces/orders.interface';
import connection from './connection';

export default class ProductModel {
  private connection = connection;

  async getAll(): Promise<IOrders[]> {
    const [orders] = await this.connection.execute(
      `SELECT o.id, o.user_id as userId, 
      JSON_ARRAYAGG(p.id) as productsIds
      FROM Trybesmith.orders as o
      INNER JOIN Trybesmith.products as p
      ON o.id = p.order_id
      GROUP BY o.id`,
    );
    // referência: https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/JSON_ARRAYAGG.html#GUID-6D56077D-78DE-4CC0-9498-225DDC42E054
    return orders as IOrders[];
  }

  // public async create(order: IOrders): Promise<IOrders> {
  //   const { name, amount } = order;

  //   const [result] = await this.connection.execute<ResultSetHeader>(
  //     'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
  //     [name, amount],
  //   );
  //   const { insertId: id } = result;
  
  //   const newProduct: IProducts = { id, name, amount };
  //   return newProduct;
  // }
}