let mockGenerateId = jest.fn()
jest.mock('@application/helper/helper', () => ({
  generateId: mockGenerateId
}))

import ShoppingCart from '@entities/ShoppingCart'
import Product from '@entities/Product'
import CartItem from '@entities/CartItem'

const product = {} as unknown as Product

describe('ShoppingCart', () => {
  afterEach(() => {
    mockGenerateId.mockReset()
  });

  it('should add a new product to a shoppingCart', () => {
    mockGenerateId.mockImplementation(jest.fn().mockReturnValue('fakeId'))

    const shoppingCart = new ShoppingCart()
    const expectedList = [
      { id: 'fakeId', product, quantity: 3 } as unknown as CartItem
    ]

    shoppingCart.addProduct(product, 3)

    expect(shoppingCart instanceof ShoppingCart).toBe(true)
    expect(shoppingCart.getList()).toEqual(expectedList)
  })

  it('should remove an item from ShoppingCart', () => {
    mockGenerateId.mockImplementation(
      jest.fn().mockReturnValueOnce('fakeId1')
        .mockReturnValueOnce('fakeId2')
        .mockReturnValueOnce('fakeId3')
    )

    const shoppingCart = new ShoppingCart()
    shoppingCart.addProduct(product, 10)
    shoppingCart.addProduct(product, 20)
    shoppingCart.addProduct(product, 30)

    let expectedList = [
      { id: 'fakeId1', product, quantity: 10 } as unknown as CartItem,
      { id: 'fakeId2', product, quantity: 20 } as unknown as CartItem,
      { id: 'fakeId3', product, quantity: 30 } as unknown as CartItem
    ]
    expect(shoppingCart.getList()).toEqual(expectedList)

    shoppingCart.removeItem('fakeId2')

    expectedList = [
      { id: 'fakeId1', product, quantity: 10 } as unknown as CartItem,
      { id: 'fakeId3', product, quantity: 30 } as unknown as CartItem
    ]
    expect(shoppingCart.getList()).toEqual(expectedList)
  })

  it('should not remove an item with invalid id', () => {
    mockGenerateId.mockImplementation(
      jest.fn().mockReturnValueOnce('fakeId1')
        .mockReturnValueOnce('fakeId2')
        .mockReturnValueOnce('fakeId3')
    )

    const shoppingCart = new ShoppingCart()
    shoppingCart.addProduct(product, 10)
    shoppingCart.addProduct(product, 20)
    shoppingCart.addProduct(product, 30)

    let expectedList = [
      { id: 'fakeId1', product, quantity: 10 } as unknown as CartItem,
      { id: 'fakeId2', product, quantity: 20 } as unknown as CartItem,
      { id: 'fakeId3', product, quantity: 30 } as unknown as CartItem
    ]
    expect(shoppingCart.getList()).toEqual(expectedList)

    shoppingCart.removeItem('invalidId')

    expect(shoppingCart.getList()).toEqual(expectedList)
  })

  it('should set the item list', () => {
    mockGenerateId.mockImplementation(
      jest.fn().mockReturnValueOnce('fakeId1')
        .mockReturnValueOnce('fakeId2')
        .mockReturnValueOnce('fakeId3')
    )

    const cartItem1 = new CartItem({ product, quantity: 1 })
    const cartItem2 = new CartItem({ product, quantity: 2 })
    const cartItem3 = new CartItem({ product, quantity: 3 })

    const shoppingCart = new ShoppingCart()
    shoppingCart.setList([cartItem1, cartItem2, cartItem3])

    let expectedList = [
      { id: 'fakeId1', product, quantity: 1 } as unknown as CartItem,
      { id: 'fakeId2', product, quantity: 2 } as unknown as CartItem,
      { id: 'fakeId3', product, quantity: 3 } as unknown as CartItem
    ]

    expect(shoppingCart.getList()).toEqual(expectedList)
  })
})