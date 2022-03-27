import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { IProduct } from '../../../models/product-info.model';
import { MenuItem } from 'primeng/api';
import { ProductService } from '../../../services/product.service';
import { mapTo, Observable, timer } from 'rxjs';
import { IUser } from '../../../models/user.model';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.sass'],
})
export class ListPageComponent implements OnInit {
  title = environment.applicationName;
  public products: IProduct[] = [];
  public categories: MenuItem[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getProducts()
      .subscribe((data) => (this.products = data));
    this.productService.getCategories().subscribe((categories) => {
      this.categories = categories.map((c: string) => {
        return {
          label: c,
          command: () => {
            this.onMenuClicked(c);
          },
        };
      });
      console.log(this.categories);
    });
  }

  onMenuClicked(s: any) {
    console.log(s);
  }
}
