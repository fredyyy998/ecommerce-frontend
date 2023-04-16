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
  templateUrl: './order-submit.component.html',
  styleUrls: ['./order-submit.component.css']
})
export class OrderSubmitComponent implements OnInit {

  protected readonly faImage = faImage;

  order$?: Observable<Order>;

  deliveryAddress: Address = {
    city: '',
    country: '',
    zip: '',
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

  submitOrder(orderId: string) {
    this.orderService.submitOrder(orderId ,this.deliveryAddress).subscribe({
      next: (result) => {
        this.toastService.addToast('Submitted Order', 'success');
        this.router.navigate(['..', 'history']);
      },
      error: (err) => this.toastService.addToast(err.error, 'error', false)
    });
  }
}
