import { Component } from '@angular/core';
import { IProduct, oneProduct } from './mocks/product';
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = environment.applicationName;
  public product: IProduct = oneProduct;
}
