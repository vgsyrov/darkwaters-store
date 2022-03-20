import {Component, OnInit } from '@angular/core';
import {environment} from "../environments/environment";
import { ProductService } from "./services/product.service";
import { Product } from "./models/product-info.model";
import { MenuItem } from "primeng/api";
import { mapTo, Observable, timer} from "rxjs";
import {IUser} from "./models/user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent  implements OnInit{
  title = environment.applicationName;
  public products: Product[] = [];
  public categories: MenuItem[] = [];
  public currencies: string[] = ['RUR', 'USD', 'EUR', 'CAP']

  constructor(private productService: ProductService)
  { }

  ngOnInit(): void {
    this.productService.getProducts().then(data => this.products = data);
    console.log("!");
    this.productService.getCategories().subscribe(categories => {
      this.categories = categories.map((c: string) => {return {label: c, command: () => { this.onMenuClicked(c); }}});
      console.log(this.categories);
    });
  }

  onMenuClicked(s: any) {
    console.log(s);
  }

  public getUser$(): Observable<IUser> {
    return timer(1000).pipe(
      mapTo( {
        name: 'Chosen One',
        role: 'Guest',
        shopSum:
          {
            value: 1000,
            defaultCurrency: 'RUR',
          },
      }),
    );
  }

  public getUser(): IUser {
    return  {
        name: 'Chosen One 2',
        role: 'Guest',
        shopSum:
          {
            value: 1000,
            defaultCurrency: 'RUR',
          },
      };
  }


}
