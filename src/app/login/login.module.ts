import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {
  LoginFormComponent,
  LoginForgotPasswordComponent,
  LoginUserTypeComponent, VerifyOtpComponent,
  ChangePasswordComponent,
  ResetSuccessComponent
} from './components';


@NgModule({
  declarations: [
    LoginComponent,
    LoginUserTypeComponent,
    LoginFormComponent,
    LoginForgotPasswordComponent,
    VerifyOtpComponent,
    ChangePasswordComponent,
    ResetSuccessComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
