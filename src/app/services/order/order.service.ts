import { Injectable } from '@angular/core';
import { RequestService } from '../request/request.service';
import { environment } from '../../../environments/environment';
import { Order } from '../../models/order';
import { Address } from '../../models/customer';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private readonly baseUrl = environment.baseUrlFulfillmentService;

  constructor(private readonly request: RequestService) { }

  getOrderHistory() {
    return this.request.get<Order[]>(`${this.baseUrl}/api/orders`);
  }

  getOrder(id: string) {
    return this.request.get<Order>(`${this.baseUrl}/api/orders/${id}`);
  }

  submitOrder(orderId: string, deliveryAddress: Address) {
    return this.request.put(`${this.baseUrl}/api/orders/${orderId}/state/submit`, deliveryAddress);
  }
}
