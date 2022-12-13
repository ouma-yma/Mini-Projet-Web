import { TestBed } from '@angular/core/testing';

import { ProfileDetailsServiceService } from './profile-details.service.service';

describe('ProfileDetailsServiceService', () => {
  let service: ProfileDetailsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileDetailsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
