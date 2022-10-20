import ShoppingCart from '@domain/entities/ShoppingCart'
import ProductRepository from '@domain/repositories/ProductRepository'
import MemoryShoppingCartRepository from '@infraestructure/db/memory/repositories/MemoryShoppingCartRepository'

const productRepositoryMock = {
  find: jest.fn()
} as unknown as ProductRepository

const productMock = {
  getId: jest.fn().mockReturnValue('fakeId')
}

const shoppingCartMock = {
  getList: jest.fn().mockReturnValue(
    [
      {
        getProduct: jest.fn().mockReturnValue(
          productMock
        ),
        getQuantity: jest.fn().mockReturnValue(3)
      }
    ]
  )
} as unknown as ShoppingCart

describe('ShoppingCartRepository', () => {
  it('should get an empty ShoppingCart', async () => {
    const shoppingCartRepository = new MemoryShoppingCartRepository(productRepositoryMock)
    const shoppingCart = await shoppingCartRepository.getShoppingCart()
    expect(shoppingCart instanceof ShoppingCart).toBe(true)
    expect(shoppingCart.getList()).toEqual([])
  })

  it('should get a ShoppingCart with items', async () => {
    productRepositoryMock.find = jest.fn().mockResolvedValueOnce(productMock)

    const shoppingCartRepository = new MemoryShoppingCartRepository(productRepositoryMock)
    await shoppingCartRepository.save(shoppingCartMock)
    const saved = await shoppingCartRepository.getShoppingCart()

    expect(saved instanceof ShoppingCart).toBe(true)
    expect(saved.getList()[0].getProduct().getId()).toBe('fakeId')
    expect(saved.getList()[0].getQuantity()).toBe(3)
  })
})