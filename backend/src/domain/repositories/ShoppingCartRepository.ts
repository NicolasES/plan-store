import ShoppingCart from '@entities/ShoppingCart'

export default interface ShoppingCartRepository {
  getShoppingCart(): Promise<ShoppingCart>
  save(shoppingCart: ShoppingCart): Promise<void>
}