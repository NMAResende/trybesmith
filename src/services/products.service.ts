import IProducts from '../interfaces/products.interface';
import ProductModel from '../models/products.model';

export default class ProductService {
  public newProduct = new ProductModel();

  public async create(product: IProducts): Promise<IProducts> {
    const newPro = await this.newProduct.create(product);
    return newPro;
  }
}