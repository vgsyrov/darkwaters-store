import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { IProduct } from '../../../models/product-info.model';
import { MenuItem } from 'primeng/api';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  public products: IProduct[] = [];
  public categories: MenuItem[] = [];

  constructor(
    private productService: ProductService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.changeDetectorRef.markForCheck();
      this.products = data;
    });
    this.productService.getCategories().subscribe((categories) => {
      this.categories = categories.map((c: string) => {
        this.changeDetectorRef.markForCheck();
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
