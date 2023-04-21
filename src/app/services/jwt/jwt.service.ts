import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';
import jwt_decode from "jwt-decode";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  private readonly localStorageKey = 'jwt';

  private _jwt?: string;

  public decodedJwt?: {
    email: string;
    customerId: string;
    role: string;
    expiring: Date
  };

  get jwt(): string | undefined {
    if (!this._jwt) {
      this.loadJtwFromLocalStorage();
    }
    return this._jwt;
  }

  set jwt(value: string | undefined) {
    this._jwt = value;
    if (typeof value === "string") {
      this.setParsedJwt(value);
    }
    this.saveJwtToLocalStorage();
  }

  constructor(private localStorage: LocalStorageService) {
  }


  private loadJtwFromLocalStorage() {
    this.jwt = this.localStorage.getItem(this.localStorageKey) || undefined;
  }

  saveJwtToLocalStorage() {
    this.localStorage.setItem(this.localStorageKey, this.jwt as string);
  }

  private setParsedJwt(jwt: string) {
    const decoded: any = jwt_decode(jwt);
    this.decodedJwt = {
        expiring: new Date(decoded.exp * 1000),
        email: decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'],
        customerId: decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'],
        role: decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
      }
  }

}
