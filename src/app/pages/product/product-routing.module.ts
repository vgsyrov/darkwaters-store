import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import {ProductCardFullResolver} from "../../resolvers/product-card-full.resolver";

const routes: Routes = [
  {
    path: ':id',
    component: ProductComponent,
    resolve: {
      product: ProductCardFullResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ ProductCardFullResolver ]
})
export class ProductRoutingModule {}
