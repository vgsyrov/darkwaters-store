import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BasketService } from '../../../services/basket.service';
import { Observable, tap } from 'rxjs';
import { IProduct } from '../../../models/product-info.model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketComponent {
  basket$: Observable<IProduct[]> = this.basketService.basket$.pipe(
    tap((basket) => {
      this.form.setControl(
        'counters',
        this.formBuilder.array(
          new Array(basket.length)
            .fill(1)
            .map((value) => [value, [Validators.max(10), Validators.min(0)]])
        )
      );
    })
  );
  form = this.formBuilder.group({
    counters: this.formBuilder.array([]),
  });

  constructor(
    private basketService: BasketService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form.valueChanges.subscribe(console.log);
  }
}
