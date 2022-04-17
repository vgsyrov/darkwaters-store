import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concat, switchMap } from 'rxjs';
import { ProductService } from '../../services/product.service';
import {
  loadProducts,
  setCategories,
  setProducts,
} from '../actions/products.actions';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductService
  ) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      switchMap(() =>
        concat(
          this.productsService
            .getCategories()
            .pipe(switchMap((categories) => [setCategories(categories)])),
          this.productsService
            .getProducts()
            .pipe(switchMap((products) => [setProducts(products)]))
        )
      )
    )
  );
}
