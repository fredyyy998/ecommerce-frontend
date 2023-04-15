import { Injectable } from '@angular/core';

export interface Toast {
  type: 'success' | 'error' | undefined;
  text: string;
  autoClose: boolean,
  timer: number;
}
@Injectable({
  providedIn: 'root'
})
export class ToastService {

  public toasts: Toast[] = [];

  constructor() { }

  public addToast(text: string, type?: 'success' | 'error', autoClose: boolean = true, timer: number = 5000)  {
    const toast: Toast = {
      type,
      text,
      autoClose,
      timer
    }
    this.toasts.push(toast);
    setTimeout(() => this.removeToast(toast), timer);
  }

  public removeToast(toast: Toast) {
    const index = this.toasts.indexOf(toast);
    if (index >= 0) {
      this.toasts.splice(index, 1);
    }
  }

}
