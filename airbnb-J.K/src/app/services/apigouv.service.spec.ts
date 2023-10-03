import { TestBed } from '@angular/core/testing';

import { ApigouvService } from './apigouv.service';

describe('ApigouvService', () => {
  let service: ApigouvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApigouvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
