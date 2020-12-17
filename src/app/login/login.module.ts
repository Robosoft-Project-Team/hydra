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
import { SharedModule } from './../shared/shared.module';

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
  ]
})
export class LoginModule { }