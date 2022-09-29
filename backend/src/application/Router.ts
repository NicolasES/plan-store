import { Application, Request, Response } from 'express'
import { injectable } from 'tsyringe'

//middlewares
import ErrorMiddleware from '@application/middlewares/ErrorMiddleware'

// controllers
import ProductController from '@application/controllers/ProductController'

@injectable()
export default class Router {

  constructor(
    private readonly ProductController: ProductController,
  ) {}

  setRoutes(server: Application) {
    server.get('/', (_req: Request, res: Response) => {
      res.send('App ok - ' + (new Date()))
    })

    server.get('/products', (req, res) => this.ProductController.getAllProducts(req, res))

    server.use(ErrorMiddleware)
  }

}