import { TestBed } from '@angular/core/testing';

import { ProductsingleService } from './productsingle.service';

describe('ProductsingleService', () => {
  let service: ProductsingleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsingleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
