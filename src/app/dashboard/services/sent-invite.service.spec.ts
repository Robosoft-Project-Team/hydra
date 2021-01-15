import { TestBed } from '@angular/core/testing';

import { SentInviteService } from './sent-invite.service';

describe('SentInviteService', () => {
  let service: SentInviteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SentInviteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
