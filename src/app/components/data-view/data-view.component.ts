import { Component, OnInit } from '@angular/core';
import { SelectItem } from "primeng/api";
import { ProductService } from "../../services/product.service"
import {Product} from "../../models/product-info.model";

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss']
})
export class DataViewComponent implements OnInit {

  products!: Product[];

  sortOptions!: SelectItem[];

  sortOrder: number = -1;

  sortField: string = '';

  sortKey: string = '';

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().then(data => this.products = data);

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

  onInputEvent(event: any) {
    console.log(event);
  }

}
