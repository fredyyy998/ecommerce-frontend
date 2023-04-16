import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { Product } from '../../models/product';
import { RequestService } from '../request/request.service';
import { environment } from '../../../environments/environment';

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
}
