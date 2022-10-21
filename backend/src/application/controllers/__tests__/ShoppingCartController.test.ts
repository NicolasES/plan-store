import ShoppingCartController from '@application/controllers/ShoppingCartController'
import AddCartItem from '@application/useCases/AddCartItem'
import { Request, Response } from 'express'

const mockAddCartItem = {
  execute: jest.fn()
} as unknown as AddCartItem

const mockRequest = {
  body: {
    productId: 'fakeProductId',
    quantity: 5
  }
} as Request

const mockResponse = {
  json: jest.fn()
} as unknown as Response

describe('ShoppingCartController', () => {
  it('should addToCart successfully', async () => {
    const shoppingCartController = new ShoppingCartController(mockAddCartItem)

    await shoppingCartController.addToCart(mockRequest, mockResponse)
    expect(mockAddCartItem.execute).toBeCalledWith('fakeProductId', 5)
  })
})