import FindProduct from "@application/useCases/FindProduct"
import ProductRepository from "@domain/repositories/ProductRepository"

const mockProductRepository = {
  find: jest.fn().mockResolvedValue({ id: 'fakeId' })
} as unknown as ProductRepository

describe('FindProducts', () => {
  // afterEach(() => {
  //   mockProductRepository.find.mockReset()
  // })
  
  it('should find a product by id', async () => {
    const findProduct = new FindProduct(mockProductRepository)
    const result = await findProduct.execute('fakeId')

    expect(mockProductRepository.find).toBeCalledWith('fakeId')
    expect(result).toEqual({ id: 'fakeId' })
  })

  it('should throw an erro "not found" with invalid product id', async () => {
    mockProductRepository.find = jest.fn().mockResolvedValue(null)
    const findProduct = new FindProduct(mockProductRepository)
    
    await expect(
      findProduct.execute('fakeId')
    ).rejects.toEqual(new Error('Product not found.'))
  })
}) 