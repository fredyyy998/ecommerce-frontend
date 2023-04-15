import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-offerings',
  templateUrl: './offerings.component.html',
  styleUrls: ['./offerings.component.css']
})
export class OfferingsComponent implements OnInit {
  products$?: Observable<Product[]>;
  constructor(private readonly productService: ProductService) { }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }

}
