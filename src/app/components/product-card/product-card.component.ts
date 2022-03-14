import {Component, Input, OnInit} from '@angular/core';
import { IProduct} from "../../models/product-info.model";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit {

  @Input()
  public product: IProduct = {} as IProduct;

  constructor() { }

  ngOnInit(): void {
  }

  redirectToProductInfo() {

  }

  addToBasket() {

  }
}
