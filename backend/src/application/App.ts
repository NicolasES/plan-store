import express from 'express'
import cors from 'cors'
import { injectable } from 'tsyringe'
import Router from './Router'

@injectable()
export default class App {
  private server: express.Application
  
  constructor(
    private router: Router
  ) {
    this.server = express()
    this.server.use(express.json())
    this.server.use(cors())
    this.routes()
  }

  private routes() {
    this.router.setRoutes(this.server)
  }

  start(port: number) {
    this.server.listen(port, () => {
      console.log(`App listening at port ${port}.`)
    })
  }
}
