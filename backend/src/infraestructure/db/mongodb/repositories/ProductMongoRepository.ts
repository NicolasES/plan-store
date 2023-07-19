import ProductRepository from "@domain/repositories/ProductRepository"
import Product from "@domain/entities/Product";
import ProductModel from "@infraestructure/db/mongodb/models/ProductModel"

export default class ProductMongoRepository implements ProductRepository {
  async getAll(): Promise<Product[]> {
    const arrProductData = await ProductModel.find({})
    return arrProductData.map(productData => this.mapToProduct(productData))
  }

  async find(id: string): Promise<Product | null> {
    const productData = await ProductModel.findById(id)
    if (!productData) {
      return null
    }
    return this.mapToProduct(productData)
  }

  private mapToProduct(productDataModel: any): Product {
    return new Product(productDataModel)
  }
}
