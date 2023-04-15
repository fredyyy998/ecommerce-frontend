export interface ShoppingCartItem {
  productId: string,
  name: string,
  description: string,
  price: number,
  currencyCode: string,
  quantity: number
}

export interface ShoppingCart {
  id: string,
  items: ShoppingCartItem[];
}
