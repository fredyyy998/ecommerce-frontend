import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthenticationService } from '../authentication/authentication.service';
import { JwtService } from '../jwt/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private request: HttpClient,
              private jwtService: JwtService) { }

  public get<T>(url: string): Observable<T> {
    let headers = this.getHeaders();
    return this.request.get<T>(url, { headers });
  }

  public post<TRequestBody, TResponseBody>(url: string, body?: TRequestBody): Observable<TResponseBody> {
    let headers = this.getHeaders();
    return this.request.post<TResponseBody>(url, body, { headers });
  }

  public put<TRequestBody, TResponseBody>(url: string, body?: TRequestBody): Observable<TResponseBody> {
    let headers = this.getHeaders();
    return this.request.put<TResponseBody>(url, body, { headers });
  }

  public patch<TRequestBody, TResponseBody>(url: string, body?: TRequestBody): Observable<TResponseBody> {
    let headers = this.getHeaders();
    return this.request.patch<TResponseBody>(url, body, { headers });
  }

  public delete<TResponseBody>(url: string): Observable<TResponseBody> {
    let headers = this.getHeaders();
    return this.request.delete<TResponseBody>(url, { headers });
  }

  private getHeaders() {
    let headers = new HttpHeaders();
    if (this.jwtService.jwt) {
      headers = headers.set('Authorization', `Bearer ${this.jwtService.jwt}`);
    }
    return headers;
  }
}
