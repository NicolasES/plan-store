import { NextFunction, Request, Response } from "express";
import { TOKENS, container } from '@config/container'
import RequestLogger from "@infraestructure/logging/Requestlogger";


export default function(req: Request, _res: Response, next: NextFunction) {
  const logger = container.resolve<RequestLogger>(TOKENS.RequestLogger)
  logger.log(req)
  next()
}