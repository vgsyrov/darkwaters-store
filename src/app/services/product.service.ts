import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../models/product-info.model';
import { concatMap, distinct, from, map, Observable, toArray } from 'rxjs';

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

  getCategories(): Observable<any[]> {
    return this.http.get<any>('/products').pipe(
      map((res) => <IProduct[]>res.data),
      map((data) => <IProduct[]>data.map((item) => item.category)),
      concatMap((array) => from(array)),
      distinct(),
      toArray()
    );
  }

  getProduct(id: string) {
    return this.http
      .get<any>('/products')
      .toPromise()
      .then((res) => <IProduct[]>res.data)
      .then((data) => {
        return data;
      })
      .then((filter) => {
        return filter.filter((item) => item.id === id)[0];
      });
  }
}
