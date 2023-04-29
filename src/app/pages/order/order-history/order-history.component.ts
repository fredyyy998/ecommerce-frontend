import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order/order.service';
import { Observable } from 'rxjs';
import { Order } from '../../../models/order';
import { faImage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {

  orders$?: Observable<Order[]>;

  constructor(private readonly orderService: OrderService) { }

  ngOnInit(): void {
    this.orders$ = this.orderService.getOrderHistory();
  }

  protected readonly faImage = faImage;

  onPayOrderClick(orderId: string) {
    this.orderService.payOrder(orderId)
  }
}
