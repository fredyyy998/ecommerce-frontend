import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../../../models/order';
import { OrderService } from '../../../../services/order/order.service';
import { ToastService } from '../../../../services/toast/toast.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders$?: Observable<Order[]>

  showReadyToShip: boolean = false;
  constructor(private readonly orderService: OrderService,
              private readonly toastService: ToastService) { }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
    let state;

    if (this.showReadyToShip) {
      state = 'Paid';
    }

    this.orders$ = this.orderService.getAdminOrders(state);

  }

  shipOrder(id: string) {
    this.orderService.shipOrder(id).subscribe({
      next: () => this.toastService.addToast('Successfully shipped order'),
      error: (error) => this.toastService.addToast(error.err)
    });
  }
}
