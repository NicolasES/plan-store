import Product from '@entities/Product'

const productData = {
  name: 'product fake name',
  value: 50.55
}

describe('Product', () => {
  it('should create a Product successfully', () => {
    const product = new Product({ id: 'fakeId', ...productData})
    expect(product instanceof Product).toBeTruthy()
    expect(product.getName()).toBe('product fake name')
    expect(product.getValue()).toBe(50.55)
    expect(product.getId()).toBe('fakeId')
  })

  it('should set a value successfuly', () => {
    const product = new Product(productData)
    expect(product.getValue()).toBe(50.55)

    product.setValue(35)
    expect(product.getValue()).toBe(35)
  })

  it('should throw an error with invalid value', () => {
    const product = new Product(productData)

    expect(() => {
      product.setValue(-1)
    }).toThrow('Value must be greater than 0')
  })
})