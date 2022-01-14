import { TestBed } from '@angular/core/testing';

import { EcomerseService } from './ecomerse.service';

describe('EcomerseService', () => {
  let service: EcomerseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcomerseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
