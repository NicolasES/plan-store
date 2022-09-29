
const mockData = [
  {
    id: "1",
    name: "product-fake-1",
    value: 400
  },
  {
    id: "2",
    name: "product-fake-2",
    value: 259.99
  },
]
jest.mock('@infraestructure/db/memory/data/products.json', () => {
  return mockData
})

import Product from '@domain/entities/Product'
import MemoryProductRepository from '@infraestructure/db/memory/repositories/MemoryProductRepository'

describe('MemoryProductRepository', () => {
  it('should run "getAll()" successfully', async () => {
    const expected = [
      new Product(mockData[0]),
      new Product(mockData[1]),
    ]

    const repository = new MemoryProductRepository()

    const result = await repository.getAll()
    expect(result).toEqual(expected)
  })
})
