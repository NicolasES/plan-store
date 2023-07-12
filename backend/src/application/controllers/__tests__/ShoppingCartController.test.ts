import ShoppingCartController from '@application/controllers/ShoppingCartController'
import AddCartItem from '@application/useCases/AddCartItem'
import GetShoppingCart from '@application/useCases/GetShoppingCart'
import RemoveCartItem from '@application/useCases/RemoveCartItem'
import { NextFunction, Request, Response } from 'express'

const mockAddCartItem = {
  execute: jest.fn()
} as unknown as AddCartItem

const mockGetShoppingCart = {
  execute: jest.fn()
} as unknown as GetShoppingCart

const mockRemoveCartItem = {
  execute: jest.fn()
} as unknown as RemoveCartItem

const mockRequest = {
  body: {
    productId: 'fakeProductId',
    quantity: 5
  },
  params: {}
} as Request

const mockResponse = {
  json: jest.fn()
} as unknown as Response

const mockNext = {
} as unknown as NextFunction

describe('ShoppingCartController', () => {
  it('should addToCart successfully', async () => {
    const shoppingCartController =
      new ShoppingCartController(
        mockAddCartItem,
        mockGetShoppingCart,
        mockRemoveCartItem
      )

    await shoppingCartController.addToCart(mockRequest, mockResponse, mockNext)
    expect(mockAddCartItem.execute).toBeCalledWith('fakeProductId', 5)
  })

  it('should runGetShoppingCart successfully', async () => {
    const shoppingCartController =
    new ShoppingCartController(
      mockAddCartItem,
      mockGetShoppingCart,
      mockRemoveCartItem
    )

    await shoppingCartController.runGetShoppingCart(mockRequest, mockResponse, mockNext)
    expect(mockGetShoppingCart.execute).toBeCalled()
    expect(mockResponse.json).toBeCalled()
  })

  it('should removeFromCart successfully', async () => {
    mockRequest.params.cartItemId = 'fakeCartItemId'

    const shoppingCartController =
    new ShoppingCartController(
      mockAddCartItem,
      mockGetShoppingCart,
      mockRemoveCartItem
    )
    
    await shoppingCartController.removeFromCart(mockRequest, mockResponse, mockNext)
    expect(mockRemoveCartItem.execute).toBeCalledWith('fakeCartItemId')
    expect(mockResponse.json).toBeCalled()
  })
})