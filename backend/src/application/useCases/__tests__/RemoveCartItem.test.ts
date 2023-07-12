import ShoppingCartRepository from "@domain/repositories/ShoppingCartRepository"
import RemoveCartItem from "@application/useCases/RemoveCartItem"

const mockShoppingCart = {
  removeItem: jest.fn()
}

const mockShoppingCartrepository = {
  getShoppingCart: jest.fn().mockResolvedValue(mockShoppingCart),
  save: jest.fn()
} as unknown as ShoppingCartRepository

describe('RemoveCartItem', () => {
  it('should run "execute()" successfully', async () => {
    const removeCartItem = new RemoveCartItem(mockShoppingCartrepository)

    await removeCartItem.execute('fakeId')
    expect(mockShoppingCart.removeItem).toBeCalledWith('fakeId')
    expect(mockShoppingCartrepository.save).toBeCalledWith(mockShoppingCart)
  })
})