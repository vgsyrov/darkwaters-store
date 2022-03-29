import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { IProduct } from '../../../models/product-info.model';
import { environment } from '../../../../environments/environment';

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
    private productService: ProductService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  public product: IProduct | null = null;

  ngOnInit(): void {
    const productId = this.activatedRoute.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProduct(productId).then((product) => {
        this.product = product;
        this.changeDetectorRef.markForCheck();
      });
    }
  }
}
