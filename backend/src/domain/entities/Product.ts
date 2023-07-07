export default class Product {
  private id: string | undefined
  private name: string
  private value!: number

  constructor(data: ProductData) {
    this.id = data.id
    this.name = data.name
    this.setValue(data.value)
  }

  getId() {
    return this.id
  }

  getName() {
    return this.name
  }

  setValue(value: number) {
    if (value <= 0) {
      throw new Error('Value must be greater than 0')
    }
    this.value = value
  }

  getValue() {
    return this.value
  }
}

export type ProductData = {
  id?: string
  name: string
  value: number
}