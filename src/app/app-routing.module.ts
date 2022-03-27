import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCardFullComponent } from './components/product-card-full/product-card-full.component';
import { ListPageComponent } from './pages/list-page/list-page/list-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/list-page', pathMatch: 'full' },
  { path: 'list-page', component: ListPageComponent },
  {
    path: 'product-card-full/:id',
    data: { label: 'Полное описание товара' },
    children: [
      {
        path: '',
        component: ProductCardFullComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
