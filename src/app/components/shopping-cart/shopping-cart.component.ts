import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../../models/shopping-cart';
import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  shoppingCart$?: Observable<ShoppingCart>;

  constructor(private readonly shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.shoppingCart$ = this.shoppingCartService.getShoppingCart();
  }

  protected readonly faImage = faImage;
}
