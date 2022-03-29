import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BasketService } from '../../../services/basket.service';
import { Observable } from 'rxjs';
import { IProduct } from '../../../models/product-info.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketComponent {
  basket$: Observable<IProduct[]> = this.basketService.basket$;

  constructor(private basketService: BasketService) {}
}
