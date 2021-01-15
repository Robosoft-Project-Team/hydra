import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUserTypeComponent } from './login-user-type.component';

describe('LoginUserTypeComponent', () => {
  let component: LoginUserTypeComponent;
  let fixture: ComponentFixture<LoginUserTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginUserTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginUserTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
