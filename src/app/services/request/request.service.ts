import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private request: HttpClient) { }

  public get<T>(url: string): Observable<T> {
    return this.request.get<T>(url);
  }

  public post<TRequestBody, TResponseBody>(url: string, body?: TRequestBody): Observable<TResponseBody> {
    return this.request.post<TResponseBody>(url, body);
  }
}
