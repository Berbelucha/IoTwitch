import { TestBed, inject } from '@angular/core/testing';

import { SocialApiService } from './social-api.service';

describe('SocialApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocialApiService]
    });
  });

  it('should ...', inject([SocialApiService], (service: SocialApiService) => {
    expect(service).toBeTruthy();
  }));
});
