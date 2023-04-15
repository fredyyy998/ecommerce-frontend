

export interface Customer {
  id: string,
  email: string,
  address?: Address,
  personalInformation?: PersonalInformation,
  paymentInformation?: PaymentInformation
}
export interface Address {
  street: string,
  zip: string,
  city: string,
  country: string
}

export interface PersonalInformation {
  firstName: string,
  lastName: string,
  dateOfBirth: string
}

export interface PaymentInformation {
  address: Address;
}
