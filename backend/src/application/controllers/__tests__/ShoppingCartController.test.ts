import ShoppingCartController from '@application/controllers/ShoppingCartController'
import AddCartItem from '@application/useCases/AddCartItem'
import GetShoppingCart from '@application/useCases/GetShoppingCart'
import { NextFunction, Request, Response } from 'express'

const mockAddCartItem = {
  execute: jest.fn()
} as unknown as AddCartItem

const mockGetShoppingCart = {
  execute: jest.fn()
} as unknown as GetShoppingCart

const mockRequest = {
  body: {
    productId: 'fakeProductId',
    quantity: 5
  }
} as Request

const mockResponse = {
  json: jest.fn()
} as unknown as Response

const mockNext = {
} as unknown as NextFunction

describe('ShoppingCartController', () => {
  it('should addToCart successfully', async () => {
    const shoppingCartController = new ShoppingCartController(mockAddCartItem, mockGetShoppingCart)

    await shoppingCartController.addToCart(mockRequest, mockResponse, mockNext)
    expect(mockAddCartItem.execute).toBeCalledWith('fakeProductId', 5)
  })

  it('should runGetShoppingCart successfully', async() => {
    const shoppingCartController = new ShoppingCartController(mockAddCartItem, mockGetShoppingCart)
    
    await shoppingCartController.runGetShoppingCart(mockRequest, mockResponse, mockNext)
    expect(mockGetShoppingCart.execute).toBeCalled()
    expect(mockResponse.json).toBeCalled()
  })
})