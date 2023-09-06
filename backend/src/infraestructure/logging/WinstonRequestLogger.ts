import RequestLogger from './Requestlogger'
import { Request } from 'express'
import winston from 'winston'
import { ElasticsearchTransport } from 'winston-elasticsearch'

export default class WinstonRequestLogger implements RequestLogger {
  private logger: winston.Logger

  constructor() {
    this.logger = winston.createLogger({
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      ),
      transports: [
        new winston.transports.Console(),
        new ElasticsearchTransport({
          level: 'info',
          indexPrefix: 'request-logs',
          clientOpts: { node: 'http://elasticsearch01:9200' }
        })
      ]
    })
  }

  log(request: Request): void {
    this.logger.info({
      message: 'Request received',
      method: request.method,
      url: request.originalUrl,
      userAgent: request.headers['user-agent'],
      body: request.body
    })
  }
}


