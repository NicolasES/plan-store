import Product from '@entities/Product'

export default interface ProductRepository {
  getAll(): Promise<Array<Product>>
}