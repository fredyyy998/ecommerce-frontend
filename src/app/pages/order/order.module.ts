import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    OrderHistoryComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    FontAwesomeModule
  ]
})
export class OrderModule { }
