import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminOverviewComponent } from './pages/admin-overview/admin-overview.component';
import { ProductsComponent } from './pages/products/products.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { RevenueComponent } from './pages/revenue/revenue.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    AdminOverviewComponent,
    ProductsComponent,
    ProductEditComponent,
    ProductAddComponent,
    OrdersComponent,
    RevenueComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
