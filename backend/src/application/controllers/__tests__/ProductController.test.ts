import ProductController from '@application/controllers/ProductController'
import { NextFunction, Request, Response } from 'express'
import GetProducts from '@application/useCases/GetProducts'

const mockGetProducts = {
  execute: jest.fn()
} as unknown as GetProducts

const mockRequest = {} as Request
const mockNext = {} as NextFunction

const mockResponse = {
  json: jest.fn()
} as unknown as Response


describe('ProductController', () => {
  it('should run "getAllProducts()"', async () => {
    const productController = new ProductController(mockGetProducts)

    await productController.getAllProducts(mockRequest, mockResponse, mockNext)
    expect(mockGetProducts.execute).toBeCalled()
    expect(mockResponse.json).toBeCalled()
  })
})