import { TestBed } from '@angular/core/testing';

import { RecipieServService } from './recipie-serv.service';

describe('RecipieServService', () => {
  let service: RecipieServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipieServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
