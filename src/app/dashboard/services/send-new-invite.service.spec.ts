import { TestBed } from '@angular/core/testing';

import { SendNewInviteService } from './send-new-invite.service';

describe('SendNewInviteService', () => {
  let service: SendNewInviteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendNewInviteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
