import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OrderSubmitComponent } from './order-submit/order-submit.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OrderHistoryComponent,
    OrderSubmitComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class OrderModule { }
