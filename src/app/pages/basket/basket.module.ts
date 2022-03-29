import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketRoutingModule } from './basket-routing.module';
import { BasketComponent } from './basket/basket.component';
import { OrderListModule } from 'primeng/orderlist';

@NgModule({
  declarations: [BasketComponent],
  imports: [CommonModule, BasketRoutingModule, OrderListModule],
})
export class BasketModule {}
