import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { BasketService } from '../../../services/basket.service';
import { Observable, Subscription, tap } from 'rxjs';
import { IProduct } from '../../../models/product-info.model';
import { FormBuilder, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { IState } from '../../../store/reducers';
import { setShopSum } from '../../../store/actions/user.actions';
import { CurrencyPipe } from '../../../pipes/currency.pipe';
import { environment } from '../../../../environments/environment';
import { userFeatureSelector } from '../../../store/reducers/user.reducer';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketComponent implements OnDestroy {
  basket$: Observable<IProduct[]> = this.basketService.basket$;

  form = this.formBuilder.group({
    counters: this.formBuilder.array([]),
  });

  private basketSubs: Subscription | null;
  public storeCurrency: string = '';
  public userCurrency: string = '';

  constructor(
    private basketService: BasketService,
    private formBuilder: FormBuilder,
    private store: Store<IState>
  ) {
    this.basketSubs = null;
  }

  ngOnInit(): void {
    this.storeCurrency = environment.config.mainCurrency;
    this.store.pipe(select(userFeatureSelector)).subscribe((user) => {
      this.userCurrency = user.shopSum.defaultCurrency;
    });
    this.form.valueChanges.subscribe((x) => {
      console.log('counters =', x);
      let finalSum = 0;
      x.counters.forEach((counter: number, index: number) => {
        if (!!counter && !!x.price && x.price[index]) {
          finalSum += counter * x.price[index];
        }
      });
      console.log('finalSum =', finalSum);
      this.store.dispatch(
        setShopSum(
          CurrencyPipe.calculateSum(
            finalSum,
            this.storeCurrency,
            this.userCurrency
          )
        )
      );
    });
    this.basketSubs = this.basketService.basket$.subscribe((basket) => {
      this.form.setControl(
        'counters',
        this.formBuilder.array(
          new Array(basket.length)
            .fill(1)
            .map((value) => [value, [Validators.max(10), Validators.min(0)]])
        )
      );
      this.form.setControl(
        'price',
        this.formBuilder.array(
          new Array(basket.length)
            .fill(0)
            .map((value, index) => (value = basket[index].price))
        )
      );
    });
  }

  ngOnDestroy(): void {
    if (this.basketSubs) {
      this.basketSubs.unsubscribe();
    }
  }
}
