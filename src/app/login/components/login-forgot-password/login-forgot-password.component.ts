import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-forgot-password',
  templateUrl: './login-forgot-password.component.html',
  styleUrls: ['./login-forgot-password.component.scss']
})
export class LoginForgotPasswordComponent implements OnInit {

  email = { value: '', error: false };

  constructor() { }

  ngOnInit(): void {
  }

}
