import {Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SelectItem } from "primeng/api";
import { RouterModule } from '@angular/router';

import { Product } from "../../models/product-info.model";


@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss']
})
export class DataViewComponent implements OnInit {

  @Input()
  products!: Product[];

  sortOptions!: SelectItem[];

  sortOrder: number = -1;

  sortField: string = '';

  sortKey: string = '';

  constructor(private route: ActivatedRoute,
              private router: Router) { }



  ngOnInit() {
    this.sortOptions = [
      {label: 'Сначала дорогие', value: '!price'},
      {label: 'Сначала дешевые', value: 'price'}
    ];
  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }


  onProductDetails(event: MouseEvent, id: string) {
    if ((event.target as HTMLElement).innerText === 'В корзину') {
      console.log(`otladka ---> add to cart ${id}`);
      console.log(event.target);
    } else {
      this.router.navigate([`product-card-full`, id]);
    }
  }

  onAddToCart(id: string) {

  }
}
