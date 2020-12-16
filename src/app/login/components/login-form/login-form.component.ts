import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormValidationService } from 'src/app/shared/services/form-validation.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  email = { value: '', error: '', tick: false };
  showMark: boolean;
  password = { value: '', error: '' };

  constructor(
    private validation: FormValidationService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.showMark = false;
  }

  isValidPassword(): void {
    if (!this.password.value) {
      this.password.error = 'Password is required';
    }
    else {
      this.password.error = '';
    }
  }

  isValid(): void {
    this.showMark = true;
    if (this.validation.isValidRobosoftEmail(this.email.value)) {
      this.email.tick = true;
      this.email.error = '';
    } else {
      this.email.tick = false;
      this.email.error = 'You have entered invalid email address';
    }
  }

  onclick(): void {
    this.showMark = true;
    if (!this.email.value) {
      this.email.error = 'Email is required';
    }
    else if (!this.password.value) {
      this.password.error = 'Password is required';
    }
    else if (this.validation.isValidRobosoftEmail(this.email.value)) {
      console.log(this.email.value);
      this.email.tick = true;
      this.email.error = '';
      this.router.navigate(['/dashboard']);
    } else {
      this.email.error = 'You have entered invalid email address';
      this.email.tick = false;
    }
  }
}
