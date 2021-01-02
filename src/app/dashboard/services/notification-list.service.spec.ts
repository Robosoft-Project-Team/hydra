import { TestBed } from '@angular/core/testing';

import { NotificationListService } from './notification-list.service';

describe('NotificationListService', () => {
  let service: NotificationListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
