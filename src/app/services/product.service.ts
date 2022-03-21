import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from "../models/product-info.model"
import {concatMap, distinct, from, map, Observable, toArray} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any>('assets/data/products_full.json')
      .toPromise()
      .then(res => <Product[]>res.data)
      .then(data => { return data; });
  }

  getCategories(): Observable<any> {
    return this.http.get<any>('assets/data/products_full.json')
      .pipe(
        map( res=> <Product[]>res.data),
        map( data => <Product[]>data.map( item => item.category)),
        concatMap( array => from(array)),
        distinct(),
        toArray()
      );
  }

  getProduct(id: string) {
    return this.http.get<any>('assets/data/products_full.json')
      .toPromise()
      .then(res => <Product[]>res.data)
      .then(data => { return data; })
      .then(filter => {return filter.filter(item => item.id === id)[0]})
      ;
  }

}
