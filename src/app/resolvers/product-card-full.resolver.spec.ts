import { TestBed } from '@angular/core/testing';

import { ProductCardFullResolver } from './product-card-full.resolver';

describe('ProductCardFullResolver', () => {
  let resolver: ProductCardFullResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProductCardFullResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
