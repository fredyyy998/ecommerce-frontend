import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { OfferingsComponent } from './offerings/offerings.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductPreviewComponent } from './components/product-preview/product-preview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserHeaderComponent } from '../../components/user-header/user-header.component';


@NgModule({
  declarations: [
    OfferingsComponent,
    ProductPreviewComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    UserHeaderComponent
  ]
})
export class ShopModule { }
