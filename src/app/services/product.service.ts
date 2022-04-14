import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../models/product-info.model';
import {concatMap, distinct, filter, flatMap, from, map, Observable, of, switchMap, toArray} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<any>('/products').pipe(
      map((res) => <IProduct[]>res.data),
      map((data) => {
        return data;
      })
    );
  }

  getCategories(): Observable<string[]> {
    return this.http.get<any>('/products').pipe(
      map((res) => <IProduct[]>res.data),
      switchMap((data) => of((<IProduct[]>data.map((item) => item.category))) as Observable<string[]>),
      concatMap((array) => from(array)),
      distinct(),
      toArray()
    );
  }

  getProduct(id: string): Observable<IProduct> {
    return this.http
      .get<any>('/products').pipe(
        map((res) => <IProduct[]>res.data),
        map((data) => {
          return data;
        }),
        map((filter) => filter.filter((item) => item.id === id)[0])
      ) ;



  }
}
