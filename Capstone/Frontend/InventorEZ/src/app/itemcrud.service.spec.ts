import { TestBed } from '@angular/core/testing';

import { ItemcrudService } from './itemcrud.service';

describe('ItemcrudService', () => {
  let service: ItemcrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemcrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
