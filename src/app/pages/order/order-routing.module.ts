import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { OrderDetails } from './order-submit/order-details.component';

const routes: Routes = [
  {
    path: 'history',
    component: OrderHistoryComponent,
  },
  {
    path: ':orderId',
    component: OrderDetails
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
