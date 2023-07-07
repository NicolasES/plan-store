import ShoppingCart from '@domain/entities/ShoppingCart'
import CacheData from '@domain/repositories/CacheData'
import ProductRepository from '@domain/repositories/ProductRepository'
import ShoppingCartCacheRepository from '@infraestructure/db/memory/repositories/ShoppingCartCacheRepository'

const productRepositoryMock = {
  find: jest.fn()
} as unknown as ProductRepository

const cacheDataMock = {
  set: jest.fn(),
  get: jest.fn()
} as unknown as CacheData

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

describe('ShoppingCartCacheRepository.test', () => {
  it('should get an empty ShoppingCart', async () => {
    const shoppingCartRepository = new ShoppingCartCacheRepository(productRepositoryMock, cacheDataMock)
    const shoppingCart = await shoppingCartRepository.getShoppingCart()
    expect(shoppingCart instanceof ShoppingCart).toBe(true)
    expect(shoppingCart.getList()).toEqual([])
  })

  it('should get a ShoppingCart with items', async () => {
    productRepositoryMock.find = jest.fn().mockResolvedValueOnce(productMock)

    const shoppingCartRepository = new ShoppingCartCacheRepository(productRepositoryMock, cacheDataMock)
    await shoppingCartRepository.save(shoppingCartMock)

    expect(cacheDataMock.set).toBeCalled()
  })
})