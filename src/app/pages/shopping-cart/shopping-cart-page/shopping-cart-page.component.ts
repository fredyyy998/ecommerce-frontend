import { Component, OnInit } from '@angular/core';
import { Address } from '../../../models/customer';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ShoppingCartService } from '../../../services/shopping-cart/shopping-cart.service';
import { ToastService } from '../../../services/toast/toast.service';
import { Checkout } from '../../../models/checkout';

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss']
})
export class ShoppingCartPageComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  address: Address = {
    city: '',
    zipCode: '',
    country: '',
    street: ''
  };

  isCheckoutMode$!: Observable<boolean>;

  constructor(private router: ActivatedRoute,
              private shoppingCartService: ShoppingCartService,
              private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.isCheckoutMode$ = this.router.queryParams.pipe(
      map(params => {
        return !!params['checkout'];

      })
    );
  }

  onCheckoutClick() {
    const checkout: Checkout = {
      customerId: 'e72a1747-c1cc-4cca-a26b-5add99045cf5', // TODO take id from jwt
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      shippingAddress: this.address,
      billingAddress: this.address, // TODO allow user to use another address
    }

    this.shoppingCartService.checkout(checkout).subscribe({
      next: () => this.toastService.addToast('Successfully Checkedout Shopping Cart', 'success'),
      error: (err) => this.toastService.addToast(err.error, 'error', false)
    });
  }

}
