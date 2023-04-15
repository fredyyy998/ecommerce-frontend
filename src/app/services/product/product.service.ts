import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { Product } from '../../models/product';
import { RequestService } from '../request/request.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private readonly request: RequestService) { }

  public getProducts(search?: string): Observable<Product[]> {
    let url = 'https://localhost:7291/api/Products';
    if (search) {
      url += `search=${search}`
    }

    return this.request.get(url);
  }
}
