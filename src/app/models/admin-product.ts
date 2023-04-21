import { Product } from './product';

export interface AdminProduct extends Product {
  stock: number,
}
