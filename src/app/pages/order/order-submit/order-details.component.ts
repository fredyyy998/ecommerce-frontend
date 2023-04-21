import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../../../models/order';
import { filter, Observable, switchMap } from 'rxjs';
import { OrderService } from '../../../services/order/order.service';
import { Address } from '../../../models/customer';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { ToastService } from '../../../services/toast/toast.service';

@Component({
  selector: 'app-order-submit',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetails implements OnInit {

  protected readonly faImage = faImage;

  order$?: Observable<Order>;

  deliveryAddress: Address = {
    city: '',
    country: '',
    zipCode: '',
    street: ''
  }

  constructor(private readonly route: ActivatedRoute,
              private readonly orderService: OrderService,
              private readonly toastService: ToastService,
              private readonly router: Router) { }

  ngOnInit(): void {
    this.order$ = this.route.params.pipe(
      switchMap(params => this.orderService.getOrder(params['orderId']))
    );
  }

  onPayOrderClick(orderId: string) {
    this.orderService.payOrder(orderId).subscribe({
      next: (result) => {
        this.toastService.addToast('Payed Order', 'success');
        this.router.navigate(['..', 'history']);
      },
      error: (err) => this.toastService.addToast(err.error, 'error', false)
    });
  }
}
