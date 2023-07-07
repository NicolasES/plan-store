import { inject, injectable } from 'tsyringe'
import { TOKENS } from '@config/container'
import ProductRepository from '@domain/repositories/ProductRepository'
import Product from '@entities/Product'

@injectable()
export default class GetProducts {
  constructor(
    @inject(TOKENS.ProductRepository)
    private readonly productRepository: ProductRepository
  ) { }

  execute(): Promise<Array<Product>> {
    return this.productRepository.getAll()
  }
}