import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product/product.component';
import { RatingModule } from 'primeng/rating';
import { ProductCardFullComponent } from './product-card-full/product-card-full.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { CarouselDirective } from '../../directives/carousel.directive';
import {SharedModule} from "../../shared/shared/shared.module";

@NgModule({
  declarations: [ProductComponent, ProductCardFullComponent, CarouselDirective],
  exports: [CarouselDirective],
  imports: [
    CommonModule,
    ProductRoutingModule,
    RatingModule,
    CarouselModule,
    ButtonModule,
    TabViewModule,
    SharedModule
  ],
})
export class ProductModule {}
