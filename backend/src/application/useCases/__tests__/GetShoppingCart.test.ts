import GetShoppingCart from "@application/useCases/GetShoppingCart"
import ShoppingCartRepository from "@domain/repositories/ShoppingCartRepository"

const mockShoppingCart = {
  getList: jest.fn()
}

const mockShoppingCartRepository = {
  getShoppingCart: jest.fn().mockResolvedValue(mockShoppingCart)
} as unknown as ShoppingCartRepository

describe('GetShoppingCart', () => {
  it('should get ShoppingCart successfully', async () => {
    const getShoppingCart = new GetShoppingCart(mockShoppingCartRepository)
    await getShoppingCart.execute()
    expect(mockShoppingCartRepository.getShoppingCart).toBeCalled()
  })
})