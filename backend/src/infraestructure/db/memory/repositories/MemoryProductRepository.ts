import Product, { ProductData } from '@domain/entities/Product'
import ProductRepository from '@domain/repositories/ProductRepository'
import data from '@infraestructure/db/memory/data/products.json'


export default class MemoryProductRepository implements ProductRepository {
  private productData: ProductData[] = data

  async getAll(): Promise<Product[]> {
    return this.productData.map(el => new Product(el))
  }

}