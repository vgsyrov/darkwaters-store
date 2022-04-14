import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { IProduct } from '../../../models/product-info.model';
import { ProductService } from '../../../services/product.service';
import { select, Store } from '@ngrx/store';
import { IState } from '../../../store/reducers';
import { getProducts } from '../../../store/reducers/products.reducer';
import { loadProducts } from '../../../store/actions/products.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  public products: IProduct[] = [];
  public productsFullList: IProduct[] = [];
  public categories: string[] = [];

  constructor(
    private productService: ProductService,
    private changeDetectorRef: ChangeDetectorRef,
    private store: Store<IState>
  ) {}

  ngOnInit(): void {
    this.store.pipe(select(getProducts)).subscribe((data) => {
      this.changeDetectorRef.markForCheck();
      this.products = data;
      this.productsFullList = data;
    });
    this.store.dispatch(loadProducts());
    // this.productService.getProducts().subscribe((data) => {
    //   this.changeDetectorRef.markForCheck();
    //   this.products = data;
    //   this.productsFullList = data;
    // });
    this.productService.getCategories().subscribe((categories) => {
      this.changeDetectorRef.markForCheck();
      this.categories = categories;
    });
  }

  onSelectedCategory(selectedCategory: string) {
    this.products = this.productsFullList.filter(
      (product) => product.category === selectedCategory
    );
  }
}
