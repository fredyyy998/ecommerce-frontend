import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/product/product.service';
import { AdminProduct } from '../../../../models/admin-product';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { ToastService } from '../../../../services/toast/toast.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  public readonly faArrowDown = faArrowDown;
  public readonly faArrowUp = faArrowUp;

  product$?: Observable<AdminProduct>;

  public stockUpdate = 1;
  constructor(private readonly productService: ProductService,
              private readonly route: ActivatedRoute,
              private readonly toast: ToastService,
              private readonly router: Router) { }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    this.product$ = this.route.params.pipe(
      switchMap(params => this.productService.getAdminProduct(params['productId']))
    );
  }


  onAddStock(productId: string) {
    this.productService.addProductStock(productId, this.stockUpdate).subscribe({
      next: () => {
        this.toast.addToast('Successfully added stock', 'success');
        this.loadProduct();
      },
      error: (error) => this.toast.addToast(error.error, 'error'),
    });
  }



  onDelete(id: string) {
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        this.toast.addToast('Successfully deleted product', 'success');
        this.router.navigate(['/admin', 'products']);
      },
      error: (error) => this.toast.addToast(error.error, 'error'),
    });
  }

  onSubmit(product: AdminProduct) {
    this.productService.updateProduct(product).subscribe({
      next: () => {
        this.toast.addToast('Successfully updated product', 'success');
        this.loadProduct();
      },
      error: (error) => this.toast.addToast(error.error, 'error'),
    });
  }
}
