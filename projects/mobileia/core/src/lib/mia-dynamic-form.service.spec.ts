import { TestBed, inject } from '@angular/core/testing';

import { MiaDynamicFormService } from './mia-dynamic-form.service';

describe('MiaDynamicFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MiaDynamicFormService]
    });
  });

  it('should be created', inject([MiaDynamicFormService], (service: MiaDynamicFormService) => {
    expect(service).toBeTruthy();
  }));
});
