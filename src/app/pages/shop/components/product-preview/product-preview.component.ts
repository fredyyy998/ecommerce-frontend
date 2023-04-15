import { Component, Input, OnInit } from '@angular/core';
import { faImages, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../../../models/product';
import { ShoppingCartService } from '../../../../services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css']
})
export class ProductPreviewComponent implements OnInit {
  public faImage = faImages;
  public faShoppingCart = faShoppingCart;

  @Input() product?: Product;


  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
  }

  onAddProductToCart() {
    if (this.product) {
      this.shoppingCartService.addProduct(this.product.id, 1).subscribe(result => console.log(result));
    }
  }
}
