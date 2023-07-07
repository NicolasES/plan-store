import { inject, injectable } from 'tsyringe'
import { TOKENS } from '@config/container/Tokens'
import ProductRepository from '@domain/repositories/ProductRepository'
import ShoppingCartRepository from '@domain/repositories/ShoppingCartRepository'

@injectable()
export default class AddCartItem {
  constructor(
    @inject(TOKENS.ShoppingCartRepository)
    private readonly shoppingCartRepository: ShoppingCartRepository,
    @inject(TOKENS.ProductRepository)
    private readonly productRepository: ProductRepository
    ) { }


  async execute(productId: string, quantity: number) {
    const product = await this.productRepository.find(productId)
    if (!product) {
      throw new Error('Product not found')
    }

    const shoppingCart = await this.shoppingCartRepository.getShoppingCart()

    shoppingCart.addProduct(product, quantity)
    this.shoppingCartRepository.save(shoppingCart)
  }
}