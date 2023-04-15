import { Component, OnInit } from '@angular/core';
import { faShoppingCart, faSignInAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Customer } from '../../../../models/customer';
import { CustomerService } from '../../../../services/customer/customer.service';

@Component({
  selector: 'app-shop-header',
  templateUrl: './shop-header.component.html',
  styleUrls: ['./shop-header.component.css']
})
export class ShopHeaderComponent implements OnInit {
  protected faSignInAlt = faSignInAlt;
  protected faShoppingCart = faShoppingCart;
  protected faUserCircle = faUserCircle;

  customer$?: Observable<Customer | null>;

  constructor(private readonly customerService: CustomerService) { }

  ngOnInit(): void {
    this.customer$ = this.customerService.getMyAccount();
  }



}
