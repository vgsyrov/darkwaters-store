import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from '../models/product-info.model';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  private _basket$ = new BehaviorSubject<IProduct[]>([]);

  get basket$(): Observable<IProduct[]> {
    return this._basket$.asObservable();
  }

  addProductToBasket(product: IProduct) {
    this._basket$.next([...this._basket$.value, product]);
  }
}
