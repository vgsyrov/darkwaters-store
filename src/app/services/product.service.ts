import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from "../models/product-info.model"

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
}
