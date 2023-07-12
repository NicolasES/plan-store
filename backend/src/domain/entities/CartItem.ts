import { generateId } from '@application/helper/helper'
import Product from '@entities/Product'

export default class CartItem {
  private id: string
  private product: Product
  private quantity: number

  constructor(data: CartItemData) {
    this.id = data.id ? data.id : generateId()
    this.product = data.product
    this.quantity = data.quantity
  }

  getId() {
    return this.id
  }

  getProduct() {
    return this.product
  }

  getQuantity() {
    return this.quantity
  }
}

export type CartItemData = {
  id?: string
  product: Product
  quantity: number
}