import Product, { ProductData } from '@domain/entities/Product'
import ProductRepository from '@domain/repositories/ProductRepository'
import data from '@infraestructure/db/memory/data/products.json'


export default class MemoryProductRepository implements ProductRepository {
  private productData: ProductData[] = data

  async getAll(): Promise<Product[]> {
    return this.productData.map(el => new Product(el))
  }

  async find(id: string): Promise<Product | null> {
    const result = this.productData.find(el => el.id == id)
    if(result) {
      return new Product(result)
    }
    return null
  }
}