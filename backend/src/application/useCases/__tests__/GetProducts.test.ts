import PlanRepository from '@domain/repositories/ProductRepository'
import GetProducts from '@application/useCases/GetProducts'

const mockProductss = [
  { name: 'prodcut1' },
  { name: 'prodcut2' }
]

const mockProductRepository = {
  getAll: jest.fn().mockResolvedValue(mockProductss)
} as unknown as jest.Mocked<PlanRepository>


describe('GetProducts', () => {
  it('should get all producst', async () => {
    const getProducts = new GetProducts(mockProductRepository)

    const products = await getProducts.execute()
    expect(mockProductRepository.getAll).toBeCalled()
    expect(products).toEqual(mockProductss)
  })
})