import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-offerings',
  templateUrl: './offerings.component.html',
  styleUrls: ['./offerings.component.scss']
})
export class OfferingsComponent implements OnInit {
  products$?: Observable<Product[]>;
  searchKey = '';

  constructor(private readonly productService: ProductService) { }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }

  onSearch() {
    this.products$ = this.productService.getProducts(this.searchKey);
  }
}
