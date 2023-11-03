import { crypto } from '@application/helper/helper'

export default class Customer {
  id: string | undefined
  private name: string
  private email: string
  private passwordHash!: string

  private constructor(customerData: CustomerData) {
    this.name = customerData.name
    this.email = customerData.email
  }

  static create(createCustomerData: CreateCustomerData) {
    const $customer = new Customer(createCustomerData)
    $customer.setPassword(createCustomerData.password)
    return $customer
  }

  static load(loadCustomerData: LoadCustomerData) {
    const $customer = new Customer(loadCustomerData)
    $customer.id = loadCustomerData.id
    $customer.passwordHash = loadCustomerData.passwordHash
    return $customer
  }

  getName() {
    return this.name
  }

  getEmail() {
    return this.email
  }

  getPasswordHash() {
    return this.passwordHash
  }

  setPassword(password: string) {
    this.passwordHash = crypto.hash(password)
  }

  validatePassword(password: string) {
    return crypto.compare(password, this.passwordHash)
  }
}

interface CustomerData {
  name: string,
  email: string,
}

interface CreateCustomerData extends CustomerData {
  password: string
}

interface LoadCustomerData extends CustomerData {
  id: string
  passwordHash: string
}