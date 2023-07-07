import CartItem from '@domain/entities/CartItem'
import Product from '@entities/Product'

describe('ShoppingCart', () => {
  it('should create a new CartItem', () => {
    const product = {} as unknown as Product    

    const cartItem = new CartItem({ product, quantity: 5})
    expect(cartItem instanceof CartItem).toBe(true)
    expect(cartItem.getProduct()).toBe(product)
    expect(cartItem.getQuantity()).toBe(5)
  })
})