import IProducts from '../interfaces/products.interface';
import ProductModel from '../models/products.model';

export default class ProductService {
  public productModel = new ProductModel();

  public async create(product: IProducts): Promise<IProducts> {
    const newPro = await this.productModel.create(product);
    return newPro;
  }

  public async getAll(): Promise<IProducts[]> {
    const products = await this.productModel.getAll();

    return products;
  }
}