import Product from '@entities/Product'

export default interface ProductRepository {
  getAll(): Promise<Array<Product>>
  find(id: string): Promise<Product | null>
}