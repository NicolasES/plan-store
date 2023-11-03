import Customer from '@entities/Customer'

describe('Customer', () => {
  it('should create a new Customer successfuly', () => {
    const customerData = {
      name: 'Fake customer name',
      email: 'customerfake@email.com',
      password: '123456'
    }

    const customer = Customer.create(customerData)

    expect(customer instanceof Customer).toBe(true)
    expect(customer.getName()).toBe(customerData.name)
    expect(customer.getEmail()).toBe(customerData.email)
    expect(customer.getPasswordHash()).not.toBe(customerData.password)
    expect(customer.validatePassword(customerData.password)).toBe(true)
  })

  it('should load a Customer successfuly', () => {
    const customerData = {
      id: 'fakeId',
      name: 'Fake customer name',
      email: 'customerfake@email.com',
      passwordHash: '123456'
    }

    const customer = Customer.load(customerData)

    expect(customer instanceof Customer).toBe(true)
    expect(customer.getName()).toBe(customerData.name)
    expect(customer.getEmail()).toBe(customerData.email)
    expect(customer.getPasswordHash()).toBe(customerData.passwordHash)
  })










  // it('should create a Product successfully', () => {
  //   const product = new Product({ id: 'fakeId', ...productData})
  //   expect(product instanceof Product).toBeTruthy()
  //   expect(product.getName()).toBe('product fake name')
  //   expect(product.getValue()).toBe(50.55)
  //   expect(product.getId()).toBe('fakeId')
  // })

  // it('should set a value successfuly', () => {
  //   const product = new Product(productData)
  //   expect(product.getValue()).toBe(50.55)

  //   product.setValue(35)
  //   expect(product.getValue()).toBe(35)
  // })

  // it('should throw an error with invalid value', () => {
  //   const product = new Product(productData)

  //   expect(() => {
  //     product.setValue(-1)
  //   }).toThrow('Value must be greater than 0')
  // })
})