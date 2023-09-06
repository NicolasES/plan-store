import winston from 'winston'
import Logger from './Logger'

export default class WinstonLogger implements Logger {
  private logger: winston.Logger

  constructor() {
    this.logger = winston.createLogger({
      level: 'info',
      format: winston.format.combine(
        winston.format.errors({ stack: true }),
        winston.format.timestamp(),
        winston.format.json() 
    ),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/logs.log' }),
      ]
    })
  }

  error(message: string, error?: Error | undefined): void {
    this.logger.error(message, error)
  }

  warn(message: string): void {
    this.logger.warn(message)
  }
  info(message: string): void {
    this.logger.info(message)
  }
  debug(message: string): void {
    this.logger.debug(message)
  }
}
