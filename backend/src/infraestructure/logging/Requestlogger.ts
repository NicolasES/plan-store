import { Request } from 'express'

export default interface RequestLogger {
  log(request: Request): void
}