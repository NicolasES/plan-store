import { inject, injectable } from "tsyringe"
import { TOKENS } from "@config/container"
import ShoppingCartRepository from "@domain/repositories/ShoppingCartRepository"

@injectable()
export default class GetShoppingCart {
    constructor(
        @inject(TOKENS.ShoppingCartRepository)
        private readonly shoppingCartRepository: ShoppingCartRepository
    ) {}

    execute() {
        return this.shoppingCartRepository.getShoppingCart()
    }
}