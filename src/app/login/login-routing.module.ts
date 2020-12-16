import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  LoginForgotPasswordComponent,
  LoginUserTypeComponent,
  LoginFormComponent,
  VerifyOtpComponent,
  ChangePasswordComponent,
  ResetSuccessComponent,
  SignUpComponent
} from './components';

const routes: Routes = [
  {
    path: '', component: LoginComponent,
    children: [
      { path: '', redirectTo: 'user-type' },
      { path: 'user-type', component: LoginUserTypeComponent },
      { path: 'form', component: LoginFormComponent },
      { path: 'forgot-password', component: LoginForgotPasswordComponent },
      { path: 'verify', component: VerifyOtpComponent },
      { path: 'change-password', component: ChangePasswordComponent },
      { path: 'success', component: ResetSuccessComponent },
      { path: 'sign-up', component: SignUpComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
