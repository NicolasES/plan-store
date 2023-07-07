import { Application, Request, Response } from 'express'
import { injectable } from 'tsyringe'

//middlewares
import ErrorMiddleware from '@application/middlewares/ErrorMiddleware'

// controllers
import ProductController from '@application/controllers/ProductController'
import ShoppingCartController from '@application/controllers/ShoppingCartController'

@injectable()
export default class Router {

  constructor(
    private readonly ProductController: ProductController,
    private readonly ShoppingCartController: ShoppingCartController
  ) {}

  async setRoutes(server: Application) {
    server.get('/', (_req: Request, res: Response) => {
      res.send('App ok - ' + (new Date()))
    })

    server.get('/products', (req, res, next) => this.ProductController.getAllProducts(req, res, next))
    server.get('/shopping-cart', (req, res, next) => this.ShoppingCartController.runGetShoppingCart(req, res, next))
    server.post('/shopping-cart/item', (req, res, next) => this.ShoppingCartController.addToCart(req, res, next))

    server.use(ErrorMiddleware)
  }
}
