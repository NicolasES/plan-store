import { container } from 'tsyringe'
import { TOKENS } from './Tokens'

const myContainer = container

//Cache
import RedisCacheData from '@infraestructure/cache/RedisCacheData'
myContainer.register(TOKENS.CacheData, RedisCacheData)

//Repositories
import MemoryProductRepository from '@infraestructure/db/memory/repositories/MemoryProductRepository'
import ShoppingCartCacheRepository from '@infraestructure/db/memory/repositories/ShoppingCartCacheRepository'
myContainer.register(TOKENS.ProductRepository, MemoryProductRepository)
myContainer.register(TOKENS.ShoppingCartRepository, ShoppingCartCacheRepository)

export {
  myContainer as container
}