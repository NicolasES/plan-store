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
    expect(cacheDataMock.get).toBeCalledTimes(1)
    expect(shoppingCart.getList()).toEqual([])
  })

  it('should get a ShoppingCart with items', async () => {
    const mockCacheShoppingCart = JSON.stringify([
      {
        id: 'fakeCartItemId',
        product: { id: 'fakeProductId', name: 'fakeProductName', value: 100 },
        quantity: 10
      },
      {
        id: 'fakeCartItemId2',
        product: { id: 'fakeProductId2', name: 'fakeProductName2', value: 200 },
        quantity: 20
      }
    ])

    cacheDataMock.get = jest.fn().mockResolvedValueOnce(mockCacheShoppingCart)
    productRepositoryMock.find = jest.fn().mockResolvedValueOnce(productMock)

    const shoppingCartRepository = new ShoppingCartCacheRepository(productRepositoryMock, cacheDataMock)
    const shoppingCart = await shoppingCartRepository.getShoppingCart()

    expect(cacheDataMock.get).toBeCalledTimes(1)
    expect(productRepositoryMock.find).toBeCalledTimes(2)
    expect(shoppingCart instanceof ShoppingCart).toBe(true)
  })

  it('should save a ShoppingCart with items', async () => {
    productRepositoryMock.find = jest.fn().mockResolvedValueOnce(productMock)

    const shoppingCartRepository = new ShoppingCartCacheRepository(productRepositoryMock, cacheDataMock)
    await shoppingCartRepository.save(shoppingCartMock)

    expect(cacheDataMock.set).toBeCalled()
  })
})