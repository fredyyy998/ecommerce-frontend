import { Component } from '@angular/core';
import { faCheck, faExclamationTriangle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ToastService } from './services/toast/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce-frontend';
  protected readonly faTimes = faTimes;
  protected readonly faCheck = faCheck;

  constructor(public readonly toastService: ToastService) {
  }

  protected readonly faExclamationTriangle = faExclamationTriangle;
}
