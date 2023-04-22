import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { Product } from '../../models/product';
import { RequestService } from '../request/request.service';
import { environment } from '../../../environments/environment';
import { AdminProduct } from '../../models/admin-product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly baseUrl = environment.baseUrlInventoryService;
  constructor(private readonly request: RequestService) { }

  public getProducts(search?: string): Observable<Product[]> {
    let url = `${this.baseUrl}/api/Products`;
    if (search) {
      url += `?search=${search}`
    }

    return this.request.get(url);
  }

  getAdminProducts(): Observable<AdminProduct[]> {
    return this.request.get(`${this.baseUrl}/api/ProductManagement`);
  }

  getAdminProduct(productId: number): Observable<AdminProduct> {
    return this.request.get(`${this.baseUrl}/api/ProductManagement/${productId}`);
  }

  addProductStock(productId: string, quantity: number) {
    return this.request.post(`${this.baseUrl}/api/ProductManagement/${productId}/stock/add`, { quantity });
  }

  removeProductStock(productId: string, quantity: number) {
    return this.request.post(`${this.baseUrl}/api/ProductManagement/${productId}/stock/add`, { quantity });
  }

  deleteProduct(productId: string) {
    return this.request.delete<undefined>(`${this.baseUrl}/api/ProductManagement/${productId}`);
  }

  updateProduct(product: AdminProduct) {
    return this.request.patch(`${this.baseUrl}/api/ProductManagement/${product.id}`, {
      name: product.name,
      description: product.description,
      grossPrice: product.price.grossPrice,
      productInformation: product.information ?? []
    });
  }

  addProduct(name: string, description: string, grossPrice: number) {
    return this.request.post<any, AdminProduct>(`${this.baseUrl}/api/ProductManagement/`, {
      name,
      description,
      grossPrice
    });
  }
}
