import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { ShoppingCart } from '../../models/shopping-cart';
import { RequestService } from '../request/request.service';
import { environment } from '../../../environments/environment';
import { Address } from '../../models/customer';
import { Checkout } from '../../models/checkout';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private baseUrl = environment.baseUrlShoppingCartService;

  private shoppingCart$: BehaviorSubject<ShoppingCart | null> = new BehaviorSubject<ShoppingCart | null>(null);

  constructor(private readonly request: RequestService) { }

  getShoppingCart() {
    if (!this.shoppingCart$.getValue()) {
      this.request.get<ShoppingCart>(`${this.baseUrl}/api/ShoppingCart`).pipe(
        tap((data) => this.shoppingCart$.next(data))
      ).subscribe();
    }
    return this.shoppingCart$.asObservable();
  }

  addProduct(productId: string, quantity: number): Observable<ShoppingCart> {
    return this.request.put<{ quantity: number }, undefined>(`${this.baseUrl}/api/ShoppingCart/items/${productId}`,
      { quantity }).pipe(
      switchMap(() =>  this.request.get<ShoppingCart>(`${this.baseUrl}/api/ShoppingCart`)),
      tap((data) => this.shoppingCart$.next(data))
    );
  }

  removeProduct(productId: string): Observable<ShoppingCart> {
    return this.request.delete(`${this.baseUrl}/api/ShoppingCart/items/${productId}`).pipe(
      switchMap(() =>  this.request.get<ShoppingCart>(`${this.baseUrl}/api/ShoppingCart`)),
      tap((data) => this.shoppingCart$.next(data))
    );
  }

  checkout(checkout: Checkout) {
    return this.request.patch<Checkout, undefined>(`${this.baseUrl}/api/ShoppingCart/state/checkout`, checkout);
  }
}
