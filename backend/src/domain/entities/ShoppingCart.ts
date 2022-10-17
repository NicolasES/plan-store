import Product from '@entities/Product'
import CartItem from '@entities/CartItem'

export default class ShoppingCart {
  private itemList: CartItem[] = []


  addProduct(product: Product, quantity: number) {
    const cartItem = new CartItem({ product, quantity })
    this.itemList.push(cartItem)
  }

  getList(): CartItem[] {
    return this.itemList
  } 
}