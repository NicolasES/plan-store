import { inject, injectable } from 'tsyringe'
import { TOKENS } from '@config/container'
import ProductRepository from '@domain/repositories/ProductRepository'
import Product from '@entities/Product'

@injectable()
export default class FindProduct {
  constructor(
    @inject(TOKENS.ProductRepository)
    private readonly productRepository: ProductRepository
  ) { }

  async execute(productId: string): Promise<Product> {
    const product = await this.productRepository.find(productId)
    if (!product) {
      throw new Error('Product not found.')
    }

    return product
  }
}