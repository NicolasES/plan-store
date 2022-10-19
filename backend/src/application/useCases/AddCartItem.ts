import { inject } from 'tsyringe'
import { TOKENS } from '@config/container'
import ProductRepository from '@domain/repositories/ProductRepository'
import ShoppingCartRepository from '@domain/repositories/ShoppingCartRepository'

export default class AddCartItem {
  constructor(
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