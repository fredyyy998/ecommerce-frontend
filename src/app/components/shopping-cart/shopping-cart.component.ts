import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ShoppingCart, ShoppingCartItem } from '../../models/shopping-cart';
import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faImage, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToastService } from '../../services/toast/toast.service';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  protected readonly faImage = faImage;
  protected readonly faTrash = faTrash;

  shoppingCart$?: Observable<ShoppingCart | null>;

  constructor(private readonly shoppingCartService: ShoppingCartService,
              private readonly toastSerivce: ToastService) { }

  ngOnInit(): void {
    this.shoppingCart$ = this.shoppingCartService.getShoppingCart();
  }

  onRemoveCartItem(shoppingCartItem: ShoppingCartItem) {
    this.shoppingCartService.removeProduct(shoppingCartItem.productId).subscribe({
      next: () => this.toastSerivce.addToast('Removed Item from cart', 'success'),
      error: (err) => this.toastSerivce.addToast(err.error, 'error', false)
    });
  }
}
