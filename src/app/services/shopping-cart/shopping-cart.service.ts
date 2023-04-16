import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { ShoppingCart } from '../../models/shopping-cart';
import { RequestService } from '../request/request.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private baseUrl = environment.baseUrlShoppingCartService;

  private shoppingCart$: BehaviorSubject<ShoppingCart | null> = new BehaviorSubject<ShoppingCart | null>(null);

  constructor(private readonly request: RequestService) { }

  getShoppingCart() {
    if (!this.shoppingCart$.getValue()) {
      this.request.get<ShoppingCart>(`${this.baseUrl}/api/ShoppingBasket`).pipe(
        tap((data) => this.shoppingCart$.next(data))
      ).subscribe();
    }
    return this.shoppingCart$.asObservable();
  }

  addProduct(productId: string, quantity: number): Observable<ShoppingCart> {
    return this.request.put<{productId: string, quantity: number }, undefined>(`${this.baseUrl}/api/ShoppingBasket`, { productId, quantity }).pipe(
      switchMap(() =>  this.request.get<ShoppingCart>(`${this.baseUrl}/api/ShoppingBasket`)),
      tap((data) => this.shoppingCart$.next(data))
    );
  }

  removeProduct(productId: string): Observable<ShoppingCart> {
    return this.request.delete(`${this.baseUrl}/api/ShoppingBasket/product/${productId}`).pipe(
      switchMap(() =>  this.request.get<ShoppingCart>(`${this.baseUrl}/api/ShoppingBasket`)),
      tap((data) => this.shoppingCart$.next(data))
    );
  }

  goToCheckout() {
    return this.request.patch(`${this.baseUrl}/api/ShoppingBasket`);
  }
}
