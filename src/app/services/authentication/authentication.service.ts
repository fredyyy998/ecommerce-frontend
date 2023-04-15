import { Injectable } from '@angular/core';
import { RequestService } from '../request/request.service';
import { BehaviorSubject, catchError, map, Observable, tap } from 'rxjs';
import { Customer } from '../../models/customer';
import { JwtService } from '../jwt/jwt.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl: string = environment.baseUrlAccountService;

  private _isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn$() {
    return this._isLoggedIn$.asObservable();
  }

  constructor(private readonly request: RequestService,
              private readonly jwtService: JwtService) { }

  login(email: string, password: string): Observable<boolean> {
    if (this.jwtService.jwt) {
      this._isLoggedIn$.next(true);
    }
    return this.request.post<undefined, { token: string }>(`${this.baseUrl}/api/Authentication/login?email=${email}&password=${password}`).pipe(
      tap(result => this.jwtService.jwt = result.token),
      tap(_ => this._isLoggedIn$.next(true)),
      map(result => true),
    )
  }

  register(email: string, password: string): Observable<Customer> {
    return this.request.post<{ email: string, password: string}, Customer>(`https://localhost:7259/api/Authentication/register`, {
      email,
      password
    });
  }
}