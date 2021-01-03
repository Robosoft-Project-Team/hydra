import { TestBed } from '@angular/core/testing';

import { ResendInviteService } from './resend-invite.service';

describe('ResendInviteService', () => {
  let service: ResendInviteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResendInviteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
