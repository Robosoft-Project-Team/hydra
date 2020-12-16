import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginModule { }
