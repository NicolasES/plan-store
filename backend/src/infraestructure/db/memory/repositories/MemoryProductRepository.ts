import { injectable } from 'tsyringe'
import Product, { ProductData } from '@domain/entities/Product'
import ProductRepository from '@domain/repositories/ProductRepository'
import data from '@infraestructure/db/memory/data/products.json'

@injectable()
export default class MemoryProductRepository implements ProductRepository {
  private productData: ProductData[] = data

  async getAll(): Promise<Product[]> {
    const arrayProducts = this.productData.map(el => new Product(el))
    return arrayProducts
  }

  async find(id: string): Promise<Product | null> {
    const result = this.productData.find(el => el.id == id)
    if(result) {
      return new Product(result)
    }
    return null
  }
}