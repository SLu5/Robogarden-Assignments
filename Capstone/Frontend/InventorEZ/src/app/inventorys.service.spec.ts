import { TestBed } from '@angular/core/testing';

import { InventorysService } from './inventorys.service';

describe('InventorysService', () => {
  let service: InventorysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventorysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
