import { TestBed, inject } from '@angular/core/testing';

import { MiaFileService } from './mia-file.service';

describe('MiaFileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MiaFileService]
    });
  });

  it('should be created', inject([MiaFileService], (service: MiaFileService) => {
    expect(service).toBeTruthy();
  }));
});
