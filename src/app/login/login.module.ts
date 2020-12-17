import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {
  LoginFormComponent,
  LoginForgotPasswordComponent,
  LoginUserTypeComponent, VerifyOtpComponent,
  ChangePasswordComponent,
  ResetSuccessComponent,
  SignUpComponent
} from './components';

@NgModule({
  declarations: [
    LoginComponent,
    LoginUserTypeComponent,
    LoginFormComponent,
    LoginForgotPasswordComponent,
    VerifyOtpComponent,
    ChangePasswordComponent,
    ResetSuccessComponent,
    SignUpComponent
  ],
  imports: [
    LoginRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
