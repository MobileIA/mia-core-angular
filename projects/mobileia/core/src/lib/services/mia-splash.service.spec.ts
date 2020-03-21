import { TestBed } from '@angular/core/testing';

import { MiaSplashService } from './mia-splash.service';

describe('MiaSplashService', () => {
  let service: MiaSplashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiaSplashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
