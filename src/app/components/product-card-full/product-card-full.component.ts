import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product-info.model";

@Component({
  selector: 'app-product-card-full',
  templateUrl: './product-card-full.component.html',
  styleUrls: ['./product-card-full.component.sass']
})
export class ProductCardFullComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService) { }

  public product: Product  | null = null;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const productId = params['id'];
      console.log(`incumming param = ${productId}`);
      this.productService.getProduct(productId).then(product => { this.product = product} );
      console.log();
    });
  }

}
