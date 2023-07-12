import { inject, injectable } from 'tsyringe'
import { TOKENS } from '@config/container/Tokens'
import ShoppingCart from "@domain/entities/ShoppingCart"
import ShoppingCartRepository from "@domain/repositories/ShoppingCartRepository"
import ProductRepository from '@domain/repositories/ProductRepository'
import CacheData from "@domain/repositories/CacheData"
import CartItem from '@domain/entities/CartItem'

@injectable()
export default class ShoppingCartCacheRepository implements ShoppingCartRepository {
  private readonly cacheKey = 'shoppingCart'

  constructor(
    @inject(TOKENS.ProductRepository)
    private readonly productRepository: ProductRepository,
    @inject(TOKENS.CacheData)
    private readonly cache: CacheData
  ) { }

  async getShoppingCart(): Promise<ShoppingCart> {
    const shoppingCart = new ShoppingCart()

    const cacheData = await this.cache.get(this.cacheKey)
    if (!cacheData) {
      return shoppingCart
    }

    const cartItemList: CartItem[] = []

    for (const item of JSON.parse(cacheData)) {
      const product = await this.productRepository.find(item.product.id)
      if (product) {
        const cartIemData = new CartItem({
          id: item.id,
          product: product,
          quantity: item.quantity
        })
        cartItemList.push(cartIemData)
      }
    }

    shoppingCart.setList(cartItemList)
    return shoppingCart
  }

  async save(shoppingCart: ShoppingCart): Promise<void> {
    const itemsData = shoppingCart.getList()
    this.cache.set(this.cacheKey, JSON.stringify(itemsData))
  }
}
