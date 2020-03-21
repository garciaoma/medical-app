import { TestBed } from '@angular/core/testing';

import { ProductsDaoService } from './products.dao.service';

describe('ProductsDaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsDaoService = TestBed.get(ProductsDaoService);
    expect(service).toBeTruthy();
  });
});
