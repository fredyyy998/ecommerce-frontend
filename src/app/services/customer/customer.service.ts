import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { Customer } from '../../models/customer';
import { RequestService } from '../request/request.service';
import { environment } from '../../../environments/environment';
import { JwtService } from '../jwt/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = environment.baseUrlAccountService;

  private customer$: BehaviorSubject<Customer | null> = new BehaviorSubject<Customer | null>(null);

  constructor(private readonly request: RequestService,
              private readonly jwtService: JwtService) { }

  public getMyAccount(forceRefresh?: boolean): Observable<Customer | null> {
    if (!this.jwtService.jwt) {
      return of(null);
    }
    if (!forceRefresh && this.customer$.getValue() !== null) {
      // Return cached data if already loaded
      return this.customer$.asObservable();
    }
    return this.request.get<Customer>(`${this.baseUrl}/api/CustomerProfiles`).pipe(
      tap(profile => {
        // Update cache with new data
        this.customer$.next(profile);
      })
    );
  }
}
