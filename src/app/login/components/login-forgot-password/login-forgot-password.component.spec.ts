import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginForgotPasswordComponent } from './login-forgot-password.component';

describe('LoginForgotPasswordComponent', () => {
  let component: LoginForgotPasswordComponent;
  let fixture: ComponentFixture<LoginForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginForgotPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
