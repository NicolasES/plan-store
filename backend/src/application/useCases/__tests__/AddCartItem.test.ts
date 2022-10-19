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

    // expect(() => addCartItem.run('productId', 3)).not.toThrow()
    await expect(addCartItem.execute('produc', 3)).resolves.toBeUndefined()
    expect(producRepositoryMock.find).toBeCalled()
    expect(shoppingCartRepositoryMock.getShoppingCart).toBeCalled()
    expect(shoppingCartRepositoryMock.save).toBeCalled()
  })
})