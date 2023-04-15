import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { OfferingsComponent } from './offerings/offerings.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductPreviewComponent } from './components/product-preview/product-preview.component';


@NgModule({
  declarations: [
    OfferingsComponent,
    ProductPreviewComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    FontAwesomeModule
  ]
})
export class ShopModule { }
