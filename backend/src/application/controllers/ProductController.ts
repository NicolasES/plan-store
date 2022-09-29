import { injectable } from 'tsyringe'
import { Request, Response } from 'express'
import GetProducts from '@application/useCases/GetProducts'

@injectable()
export default class ProductController {
  constructor(
    private readonly getProducts: GetProducts
  ) {}

  async getAllProducts(_req: Request, res: Response) {
    const result = await this.getProducts.getAllProducts()
    res.json(result)
  }
}