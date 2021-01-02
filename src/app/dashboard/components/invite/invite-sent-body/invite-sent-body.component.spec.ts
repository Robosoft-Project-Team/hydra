import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteSentBodyComponent } from './invite-sent-body.component';

describe('InviteSentBodyComponent', () => {
  let component: InviteSentBodyComponent;
  let fixture: ComponentFixture<InviteSentBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteSentBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteSentBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
