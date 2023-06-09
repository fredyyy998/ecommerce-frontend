import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminProduct } from '../../../../models/admin-product';
import { ProductService } from '../../../../services/product/product.service';
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products$?: Observable<AdminProduct[]>;
  constructor(private readonly productService: ProductService) { }

  ngOnInit(): void {
    this.products$ = this.productService.getAdminProducts();
  }

  protected readonly faPen = faPen;
  protected readonly faPlus = faPlus;
}
