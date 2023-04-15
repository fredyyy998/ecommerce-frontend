import { Injectable } from '@angular/core';
import { RequestService } from '../request/request.service';
import { catchError, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _jwt?: string;


  get jwt(): string | undefined {
    return this._jwt;
  }

  constructor(private readonly request: RequestService) { }

  public login(email: string, password: string): Observable<boolean> {
    return this.request.post<undefined, { token: string }>(`https://localhost:7259/api/Authentication/login?email=${email}&password=${password}`).pipe(
      tap(result => this._jwt = result.token),
      map(result => true),
    )
  }
}
