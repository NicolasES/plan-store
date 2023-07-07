import ShoppingCart from '@entities/ShoppingCart'
import Product from '@entities/Product'
import CartItem from '../CartItem'

const product = {} as unknown as Product

describe('ShoppingCart', () => {
  it('should add a new product to a shoppingCart', () => {
    const shoppingCart = new ShoppingCart()
    const expectedList = [
      { product, quantity: 3 } as unknown as CartItem
    ]

    shoppingCart.addProduct(product, 3)

    expect(shoppingCart instanceof ShoppingCart).toBe(true)
    expect(shoppingCart.getList()).toEqual(expectedList)
  })
})