import { injectable } from 'tsyringe'
import { NextFunction, Request, Response } from 'express'
import GetProducts from '@application/useCases/GetProducts'
import FindProduct from '@application/useCases/FindProduct'

@injectable()
export default class ProductController {
  constructor(
    private readonly getProducts: GetProducts,
    private readonly findProductUseCase: FindProduct,
  ) {}

  async getAllProducts(_req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.getProducts.execute()
      return res.json(result)
    } catch(err) {
      next(err)
    }
  }

  async findProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.findProductUseCase.execute(req.params.productId)
      return res.json(result)
    } catch(err) {
      next(err)
    }
  }
}