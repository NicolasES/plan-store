import { injectable } from 'tsyringe'
import { NextFunction, Request, Response } from 'express'
import GetProducts from '@application/useCases/GetProducts'

@injectable()
export default class ProductController {
  constructor(
    private readonly getProducts: GetProducts
  ) {}

  async getAllProducts(_req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.getProducts.execute()
      return res.json(result)
    } catch(err) {
      next(err)
    }
  }
}