import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { OrderSubmitComponent } from './order-submit/order-submit.component';

const routes: Routes = [
  {
    path: 'history',
    component: OrderHistoryComponent,
  },
  {
    path: ':orderId',
    component: OrderSubmitComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
