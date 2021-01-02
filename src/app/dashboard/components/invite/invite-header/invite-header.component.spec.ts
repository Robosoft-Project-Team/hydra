import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteHeaderComponent } from './invite-header.component';

describe('InviteHeaderComponent', () => {
  let component: InviteHeaderComponent;
  let fixture: ComponentFixture<InviteHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
