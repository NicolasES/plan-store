import { Request, Response } from 'express'
import AddCartItem from '@application/useCases/AddCartItem'

export default class ShoppingCartController {
  constructor(private readonly addCartItem: AddCartItem) { }

  async addToCart(req: Request, res: Response) {
    const productId = req.body.productId 
    const quantity = req.body.quantity

    await this.addCartItem.execute(productId, quantity)

    return res.json({ success: 'ok' })
  }
}