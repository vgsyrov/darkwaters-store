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
import {
  getCategories,
  getProducts,
} from '../../../store/reducers/products.reducer';
import { loadProducts } from '../../../store/actions/products.actions';
import { environment } from '../../../../environments/environment';
import { userFeatureSelector } from '../../../store/reducers/user.reducer';

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
  public mainCurrency: string = '';
  public userCurrency: string = '';

  constructor(
    private productService: ProductService,
    private changeDetectorRef: ChangeDetectorRef,
    private store: Store<IState>
  ) {}

  ngOnInit(): void {
    this.mainCurrency = environment.config.mainCurrency;
    this.store.pipe(select(getProducts)).subscribe((data) => {
      this.changeDetectorRef.markForCheck();
      this.products = data;
      this.productsFullList = data;
    });
    this.store.pipe(select(getCategories)).subscribe((categories) => {
      this.changeDetectorRef.markForCheck();
      this.categories = categories;
    });
    this.store.pipe(select(userFeatureSelector)).subscribe((user) => {
      this.changeDetectorRef.markForCheck();
      this.userCurrency = user.shopSum.defaultCurrency;
    });
    this.store.dispatch(loadProducts());
  }

  onSelectedCategory(selectedCategory: string) {
    this.products = this.productsFullList.filter(
      (product) => product.category === selectedCategory
    );
  }
}
