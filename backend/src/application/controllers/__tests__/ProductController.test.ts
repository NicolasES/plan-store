import ProductController from '@application/controllers/ProductController'
import { Request, Response } from 'express'
import GetProducts from '@application/useCases/GetProducts'

const mockProductService = {
  getAllProducts: jest.fn()
} as unknown as GetProducts

const mockRequest = {} as Request

const mockResponse = {
  json: jest.fn()
} as unknown as Response

describe('ProductController', () => {
  it('should run "getAllProducts()"', async () => {
    const productController = new ProductController(mockProductService)

    await productController.getAllProducts(mockRequest, mockResponse)
    expect(mockProductService.getAllProducts).toBeCalled()
    expect(mockResponse.json).toBeCalled()
  })
})