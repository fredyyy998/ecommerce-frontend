import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminOverviewComponent } from './pages/admin-overview/admin-overview.component';
import { ProductsComponent } from './pages/products/products.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminOverviewComponent,
    ProductsComponent,
    ProductEditComponent
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
