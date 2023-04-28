import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import IProducts from '../interfaces/products.interface';
import connection from './connection';

export default class ProductModel {
  private connection = connection;

  public async create(product: IProducts): Promise<IProducts> {
    const { name, amount } = product;

    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const { insertId: id } = result;
  
    const newProduct: IProducts = { id, name, amount };
    return newProduct;
  }

  async getAll(): Promise<IProducts[]> {
    const [products] = await this.connection.execute<IProducts[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.products',
    );
    
    return products as IProducts[];
  }

  async updateProduct(orderId: number, productId: number) {
    const [result] = await this.connection.execute(
      'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?',
      [orderId, productId],
    );
    return result;
  }
}
