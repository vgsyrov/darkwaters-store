import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { AddressComponent } from './address/address.component';
import { BasketGuard } from '../../guards/basket.guard';

const routes: Routes = [
  {
    path: '',
    component: BasketComponent,
    canActivate: [BasketGuard],
  },
  {
    path: 'address',
    component: AddressComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasketRoutingModule {}
