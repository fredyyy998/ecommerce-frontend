import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartPageComponent } from './shopping-cart-page/shopping-cart-page.component';
import { ShoppingCartComponent } from '../../components/shopping-cart/shopping-cart.component';
import { AddressInputComponent } from './address-input/address-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShoppingCartPageComponent,
    AddressInputComponent,
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    ShoppingCartComponent,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ShoppingCartModule { }
