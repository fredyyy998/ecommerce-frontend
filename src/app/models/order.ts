import { Price } from './product';

export interface Order {
  id: string,
  buyerId: string,
  products: OrderItem[],
  state: string,
  totalPrice: OrderPrice,
  orderDate: string
}

export interface OrderPrice {
  grossPrice: number,
  netPrice: number,
  currency: string
}

export interface OrderItem {
  name: string,
  productId: string,
  quantity: number,
  totalPrice: Price
}
