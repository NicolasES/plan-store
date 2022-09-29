import { container } from 'tsyringe'
import { TOKENS } from './Tokens'

const myContainer = container

//Repositories
import MemoryProductRepository from '@infraestructure/db/memory/repositories/MemoryProductRepository'
myContainer.register(TOKENS.ProductRepository, MemoryProductRepository)

export {
  myContainer as container
}