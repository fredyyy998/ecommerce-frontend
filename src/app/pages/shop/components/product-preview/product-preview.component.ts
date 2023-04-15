import { Component, Input, OnInit } from '@angular/core';
import { faImages, faShoppingCart, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../../../models/product';
import { ShoppingCartService } from '../../../../services/shopping-cart/shopping-cart.service';
import { ToastService } from '../../../../services/toast/toast.service';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css']
})
export class ProductPreviewComponent implements OnInit {
  public faImage = faImages;
  public faShoppingCart = faShoppingCart;

  public requestExecuting = false;

  @Input() product?: Product;


  constructor(private shoppingCartService: ShoppingCartService,
              private readonly toastService: ToastService) { }

  ngOnInit(): void {
  }

  onAddProductToCart() {
    if (this.product) {
      this.requestExecuting = true;
      this.shoppingCartService.addProduct(this.product.id, 1).subscribe({
        next: () => this.toastService.addToast('Product added to Cart', 'success'),
        error: () => this.toastService.addToast('There was an error adding the item to the cart', 'error', false),
        complete: () => this.requestExecuting = false
      });
    }
  }

  protected readonly faSpinner = faSpinner;
}
