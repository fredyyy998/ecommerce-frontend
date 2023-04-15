import { Component, Input, OnInit } from '@angular/core';
import { faImages, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../../../models/product';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css']
})
export class ProductPreviewComponent implements OnInit {
  public faImage = faImages;
  public faShoppingCart = faShoppingCart;

  @Input() product?: Product;


  constructor() { }

  ngOnInit(): void {
  }

}
