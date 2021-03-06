import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../../models/product-info.model';
import { environment } from '../../../../environments/environment';
import { BasketService } from '../../../services/basket.service';
import { select, Store } from '@ngrx/store';
import { IState } from '../../../store/reducers';
import { getProduct } from '../../../store/reducers/products.reducer';

@Component({
  selector: 'app-product-card-full',
  templateUrl: './product-card-full.component.html',
  styleUrls: ['./product-card-full.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardFullComponent implements OnInit {
  public readonly currencies: string[] = environment.config.supportedCurrencies;
  constructor(
    private activatedRoute: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef,
    private basketService: BasketService,
    private store: Store<IState>
  ) {}

  public product: IProduct | null = null;

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.product = response.product;
    });
  }

  onAddToBasket() {
    this.basketService.addProductToBasket(this.product!);
  }
}
