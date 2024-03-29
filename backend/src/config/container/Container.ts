import { container } from 'tsyringe'
import { TOKENS } from './Tokens'

const myContainer = container

//Cache
import RedisCacheData from '@infraestructure/cache/RedisCacheData'
myContainer.register(TOKENS.CacheData, RedisCacheData)

//Repositories
import ProductMongoRepository from '@infraestructure/db/mongodb/repositories/ProductMongoRepository'
import ShoppingCartCacheRepository from '@infraestructure/db/memory/repositories/ShoppingCartCacheRepository'
myContainer.register(TOKENS.ProductRepository, ProductMongoRepository)
myContainer.register(TOKENS.ShoppingCartRepository, ShoppingCartCacheRepository)

//Logs
import WinstonRequestLogger from '@infraestructure/logging/WinstonRequestLogger'
myContainer.registerSingleton(TOKENS.RequestLogger, WinstonRequestLogger)

export {
  myContainer as container
}