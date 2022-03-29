import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/api';

import { IProduct } from '../../../models/product-info.model';
import { BasketService } from '../../../services/basket.service';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataViewComponent implements OnInit {
  @Input()
  products!: IProduct[];

  @Output()
  sortOptions!: SelectItem[];

  sortOrder: number = -1;

  sortField: string = '';

  sortKey: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private basketService: BasketService
  ) {}

  ngOnInit() {
    this.sortOptions = [
      { label: 'Сначала дорогие', value: '!price' },
      { label: 'Сначала дешевые', value: 'price' },
    ];
  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  onProductDetails(event: MouseEvent, id: string) {
    if ((event.target as HTMLElement).innerText === 'В корзину') {
    } else {
      this.router.navigate([`product-card-full`, id]);
    }
  }

  onAddToCart(event: any, id: string) {
    event.stopPropagation();
    this.basketService.addProductToBasket(
      this.products.find((product) => product.id === id)!
    );
  }
}
