import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminOverviewComponent } from './pages/admin-overview/admin-overview.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { RevenueComponent } from './pages/revenue/revenue.component';

const routes: Routes = [
  {
    path: '',
    component: AdminOverviewComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'products/add',
        component: ProductAddComponent
      },
      {
        path: 'products/:productId',
        component: ProductEditComponent,
      },
      {
        path: 'orders',
        children: [
          {
            path: '',
            component: OrdersComponent
          }
        ]
      },
      {
        path: 'revenue',
        component: RevenueComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
