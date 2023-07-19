import ProductController from '@application/controllers/ProductController'
import { NextFunction, Request, Response } from 'express'
import GetProducts from '@application/useCases/GetProducts'
import FindProduct from '@application/useCases/FindProduct'

const mockGetProducts = {
  execute: jest.fn()
} as unknown as GetProducts

const mockFindProduct = {
  execute: jest.fn()
} as unknown as FindProduct

const mockRequest = {
  params: {
    productId: 'fakeId'
  }
} as unknown as Request
const mockNext = {} as NextFunction

const mockResponse = {
  json: jest.fn()
} as unknown as Response


describe('ProductController', () => {
  it('should run "getAllProducts()"', async () => {
    const productController = new ProductController(mockGetProducts, mockFindProduct)

    await productController.getAllProducts(mockRequest, mockResponse, mockNext)
    expect(mockGetProducts.execute).toBeCalled()
    expect(mockResponse.json).toBeCalled()
  })

  it('should run "findProduct" successfully', async () => {
    const productController = new ProductController(mockGetProducts, mockFindProduct)

    await productController.findProduct(mockRequest, mockResponse, mockNext)
    expect(mockFindProduct.execute).toBeCalled()
    expect(mockResponse.json).toBeCalled()
  })
})