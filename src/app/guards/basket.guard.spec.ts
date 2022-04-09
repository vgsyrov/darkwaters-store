import { TestBed } from '@angular/core/testing';

import { BasketGuard } from './basket.guard';

describe('BasketGuard', () => {
  let guard: BasketGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BasketGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
