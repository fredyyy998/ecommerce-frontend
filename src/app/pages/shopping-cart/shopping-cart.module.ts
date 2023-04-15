import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartPageComponent } from './shopping-cart-page/shopping-cart-page.component';
import { ShoppingCartComponent } from '../../components/shopping-cart/shopping-cart.component';


@NgModule({
  declarations: [
    ShoppingCartPageComponent
  ],
    imports: [
        CommonModule,
        ShoppingCartRoutingModule,
        ShoppingCartComponent
    ]
})
export class ShoppingCartModule { }
