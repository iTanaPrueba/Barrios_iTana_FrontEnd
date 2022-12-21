import { TestBed } from '@angular/core/testing';

import { MobileSubscriptionService } from './mobile-subscription.service';

describe('MobileSubscriptionService', () => {
  let service: MobileSubscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileSubscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
