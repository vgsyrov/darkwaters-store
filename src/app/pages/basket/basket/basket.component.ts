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

  constructor(
    private basketService: BasketService,
    private formBuilder: FormBuilder
  ) {
    this.basketSubs = null;
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(console.log);
    this.basketSubs = this.basketService.basket$.subscribe((basket) => {
      this.form.setControl(
        'counters',
        this.formBuilder.array(
          new Array(basket.length)
            .fill(1)
            .map((value) => [value, [Validators.max(10), Validators.min(0)]])
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
