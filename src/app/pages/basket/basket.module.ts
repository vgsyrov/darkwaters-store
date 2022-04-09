import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketRoutingModule } from './basket-routing.module';
import { BasketComponent } from './basket/basket.component';
import { OrderListModule } from 'primeng/orderlist';
import { AddressComponent } from './address/address.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BasketComponent, AddressComponent],
  imports: [
    CommonModule,
    BasketRoutingModule,
    OrderListModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
  ],
})
export class BasketModule {}
