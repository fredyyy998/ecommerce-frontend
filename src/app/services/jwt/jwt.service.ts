import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  private readonly localStorageKey = 'jwt';

  private _jwt?: string;


  get jwt(): string | undefined {
    if (!this._jwt) {
      this.loadJtwFromLocalStorage();
    }
    return this._jwt;
  }

  set jwt(value: string | undefined) {
    this._jwt = value;
    this.saveJwtToLocalStorage();
  }

  constructor(private localStorage: LocalStorageService) {
  }

  private loadJtwFromLocalStorage() {
    this._jwt = this.localStorage.getItem(this.localStorageKey) || undefined;
  }

  saveJwtToLocalStorage() {
    this.localStorage.setItem(this.localStorageKey, this.jwt as string);
  }
}
