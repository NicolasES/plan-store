import { inject, injectable } from "tsyringe"
import { TOKENS } from "@config/container"
import ShoppingCartRepository from "@domain/repositories/ShoppingCartRepository"

@injectable()
export default class GetShoppingCart {
    constructor(
        @inject(TOKENS.ShoppingCartRepository)
        private readonly shoppingCartRepository: ShoppingCartRepository
    ) {}

    async execute() {
        const shoppingCart= await this.shoppingCartRepository.getShoppingCart()
        return shoppingCart.getList()
    }
}