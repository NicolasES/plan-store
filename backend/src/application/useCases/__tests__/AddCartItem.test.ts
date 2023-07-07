import ShoppingCart from '@domain/entities/ShoppingCart'
import ProductRepository from '@domain/repositories/ProductRepository'
import ShoppingCartRepository from '@domain/repositories/ShoppingCartRepository'
import AddCartItem from '@application/useCases/AddCartItem'


const producRepositoryMock = {
  find: jest.fn().mockResolvedValue({})
} as unknown as ProductRepository

const shoppingCartMock = {
  addProduct: jest.fn()
} as unknown as ShoppingCart

const shoppingCartRepositoryMock = {
  getShoppingCart: jest.fn().mockResolvedValue(shoppingCartMock),
  save: jest.fn().mockResolvedValue({}),
} as unknown as ShoppingCartRepository


describe('AddCartItem', () => {
  it('should add a product to shopping cart', async () => {
    const addCartItem = new AddCartItem(shoppingCartRepositoryMock, producRepositoryMock)

    await expect(addCartItem.execute('produc', 3)).resolves.toBeUndefined()
    expect(producRepositoryMock.find).toBeCalled()
    expect(shoppingCartRepositoryMock.getShoppingCart).toBeCalled()
    expect(shoppingCartRepositoryMock.save).toBeCalled()
  })

  it('should throw an erro with product not found', async () => {
    producRepositoryMock.find = jest.fn().mockResolvedValueOnce(null)

    const addCartItem = new AddCartItem(shoppingCartRepositoryMock, producRepositoryMock)
    await expect(addCartItem.execute('produc', 3)).rejects.toEqual(new Error('Product not found'))
  })
})