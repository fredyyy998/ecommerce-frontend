export interface Price {
  grossPrice: number,
  netPrice: number,
  salesTax: number,
  currencyCode: string
}

export interface Product {
  id: string,
  name: string,
  description: string,
  price: Price,
  information: { [key: string]: string }[]
}
