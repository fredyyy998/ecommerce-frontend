import { Address } from './customer';

export interface Checkout {
    customerId: string,
    firstName: string,
    lastName: string,
    email: string,
    shippingAddress: Address,
    billingAddress: Address,
}
