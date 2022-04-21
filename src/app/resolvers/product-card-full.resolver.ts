import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { first, map, Observable, of, tap } from 'rxjs';
import { IState } from '../store/reducers';
import { select, Store } from '@ngrx/store';
import { IProduct } from '../models/product-info.model';
import { getProduct } from '../store/reducers/products.reducer';

@Injectable({
  providedIn: 'root',
})
export class ProductCardFullResolver implements Resolve<IProduct | undefined> {
  constructor(private store: Store<IState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IProduct | undefined> {
    const productId = route.paramMap.get('id') as string;
    return this.store.pipe(select(getProduct, productId), first());
  }
}
