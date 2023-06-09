import { Injectable } from '@angular/core';
import { RequestService } from '../request/request.service';
import { environment } from '../../../environments/environment';
import { Order } from '../../models/order';
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

  payOrder(orderId: string) {
    return this.request.put(`${this.baseUrl}/api/orders/${orderId}/state/pay`);
  }

  getAdminOrders(state?: string) {
    let url = `${this.baseUrl}/api/OrderManagement`;
    if (state) {
      url += `?Status=${state}`;
    }
    return this.request.get<Order[]>(url);
  }

  shipOrder(orderId: string) {
    return this.request.put(`${this.baseUrl}/api/OrderManagement/${orderId}/state/ship`);
  }
}
