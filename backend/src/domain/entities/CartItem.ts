import Product from '@entities/Product'

export default class CartItem {
  private product: Product
  private quantity: number

  constructor(data: CartItemData) {
    this.product = data.product
    this.quantity = data.quantity
  }

  getProduct() {
    return this.product
  }

  getQuantity() {
    return this.quantity
  }
}

export type CartItemData = {
  product: Product
  quantity: number
}