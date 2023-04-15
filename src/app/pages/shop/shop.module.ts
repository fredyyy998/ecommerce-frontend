import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { OfferingsComponent } from './offerings/offerings.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductPreviewComponent } from './components/product-preview/product-preview.component';
import { ShopHeaderComponent } from './components/shop-header/shop-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OfferingsComponent,
    ProductPreviewComponent,
    ShopHeaderComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ShopModule { }
