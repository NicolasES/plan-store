import { NextFunction, Request, Response } from 'express'
import AddCartItem from '@application/useCases/AddCartItem'
import { injectable } from 'tsyringe'
import GetShoppingCart from '@application/useCases/GetShoppingCart'
import RemoveCartItem from '@application/useCases/RemoveCartItem'

@injectable()
export default class ShoppingCartController {
  constructor(
    private readonly addCartItem: AddCartItem,
    private readonly getShoppingCart: GetShoppingCart,
    private readonly removeCartItem: RemoveCartItem
  ) { }

  async addToCart(req: Request, res: Response, next: NextFunction) {
    try {
      const productId = req.body.productId
      const quantity = req.body.quantity

      await this.addCartItem.execute(productId, quantity)

      return res.json({ success: 'ok' })
    } catch (err) {
      next(err)
    }
  }

  async runGetShoppingCart(_req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.getShoppingCart.execute()
      return res.json(result)
    } catch (err) {
      next(err)
    }
  }

  async removeFromCart(req: Request, res: Response, next: NextFunction) {
    try {
      await this.removeCartItem.execute(req.params.cartItemId)
      return res.json({ success: 'ok' })
    } catch (err) {
      next(err)
    }
  }
}