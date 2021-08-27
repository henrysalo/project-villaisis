import { TestBed } from '@angular/core/testing';

import { FormActivateByLoginService } from './form-activate-by-login.service';

describe('FormActivateByLoginService', () => {
  let service: FormActivateByLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormActivateByLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
