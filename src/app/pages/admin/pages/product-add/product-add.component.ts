import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/product/product.service';
import { Router } from '@angular/router';
import { ToastService } from '../../../../services/toast/toast.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  name: string = '';
  description: string = '';
  grossPrice: number = 0;
  constructor(private readonly productService: ProductService,
              private readonly router: Router,
              private readonly toastService: ToastService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.productService.addProduct(this.name, this.description, this.grossPrice).subscribe({
      next: (result) => {
        this.toastService.addToast('Successfully added product', 'success');
        this.router.navigate(['/admin', 'products', result.id]);
      }
    })
  }
}
