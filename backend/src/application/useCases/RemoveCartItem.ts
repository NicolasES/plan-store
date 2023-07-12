import { TOKENS } from "@config/container";
import ShoppingCartRepository from "@domain/repositories/ShoppingCartRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export default class RemoveCartItem {
  constructor(
    @inject(TOKENS.ShoppingCartRepository)
    private readonly shoppingCartRepository: ShoppingCartRepository
  ) { }

  async execute(cartItemId: string) {
    const shoppingCart = await this.shoppingCartRepository.getShoppingCart()
    shoppingCart.removeItem(cartItemId)
    this.shoppingCartRepository.save(shoppingCart)    
  }
}