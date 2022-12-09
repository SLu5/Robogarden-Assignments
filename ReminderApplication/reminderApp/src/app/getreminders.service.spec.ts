import { TestBed } from '@angular/core/testing';

import { GetremindersService } from './getreminders.service';

describe('GetremindersService', () => {
  let service: GetremindersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetremindersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
