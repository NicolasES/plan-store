
const mockProductModel = {
  find: jest.fn().mockResolvedValue([
    { id: 'fakeId1', name: 'productName1', value: 10 },
    { id: 'fakeId2', name: 'productName2', value: 20 }
  ]),
  findById: jest.fn().mockResolvedValue(
    { id: 'fakeId1', name: 'productName1', value: 10 }
  )
}

jest.mock('@infraestructure/db/mongodb/models/ProductModel', () => mockProductModel)

import Product from "@domain/entities/Product"
import ProductMongoRepository from "../ProductMongoRepository"

describe('ProductMongoRepository', () => {
  it('should run "getAll()" successfully', async () => {
    const productMongoRepository = new ProductMongoRepository()
    const products = await productMongoRepository.getAll()

    expect(mockProductModel.find).toBeCalled()
    expect(products.length).toBe(2)
    expect(products instanceof Array<Product>).toBe(true)
  })

  it('should run "find()" successfully', async () => {
    const productMongoRepository = new ProductMongoRepository()
    const product = await productMongoRepository.find('fakeId')

    expect(mockProductModel.findById).toBeCalled()
    expect(product instanceof Product).toBe(true)
  })

  it('should run "find()" and return null', async () => {
    mockProductModel.findById = jest.fn().mockResolvedValueOnce(null)

    const productMongoRepository = new ProductMongoRepository()
    const product = await productMongoRepository.find('fakeId')

    expect(mockProductModel.findById).toBeCalled()
    expect(product).toBeNull()
  })
})