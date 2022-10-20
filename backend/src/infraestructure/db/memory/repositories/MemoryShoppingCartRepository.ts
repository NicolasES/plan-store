import { inject } from 'tsyringe'
import { TOKENS } from '@config/container'
import ShoppingCart from '@domain/entities/ShoppingCart'
import ProductRepository from '@domain/repositories/ProductRepository'
import ShoppingCartRepository from '@domain/repositories/ShoppingCartRepository'

export default class MemoryShoppingCartRepository implements ShoppingCartRepository {

  private static shoppingCartData: ShoppingCartData = {
    cartItems: []
  }

  constructor(
    @inject(TOKENS.ProductRepository)
    private readonly productRepository: ProductRepository
  ) { }

  async getShoppingCart(): Promise<ShoppingCart> {
    const shoppingCart = new ShoppingCart()

    for (const el of MemoryShoppingCartRepository.shoppingCartData.cartItems) {
      const product = await this.productRepository.find(el.productId)
        if (product) {
          shoppingCart.addProduct(product, el.quantity)
        }
    }

    return shoppingCart
  }

  async save(shoppingCart: ShoppingCart): Promise<void> {
    const itemsData: ItemsData = shoppingCart.getList().map(el => {
      return { productId: el.getProduct().getId()!, quantity: el.getQuantity() }
    })

    MemoryShoppingCartRepository.shoppingCartData = { cartItems: itemsData }
  }
}

type ShoppingCartData = {
  cartItems: ItemsData
}

type ItemsData = Array<{
  productId: string,
  quantity: number
}>
