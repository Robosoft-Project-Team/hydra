import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormValidationService } from 'src/app/shared/services/form-validation.service';
import { SignInService } from '../../services/sign-in.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  email = { value: '', error: '', tick: false };
  password = { value: '', error: '' };
  showMark: boolean;
  buttonDisabled: boolean;
  role = 'recruiter';

  constructor(
    private validation: FormValidationService,
    private router: Router,
    private signInService: SignInService
  ) { }

  ngOnInit(): void {
    this.showMark = false;
    this.buttonDisabled = true;
  }

  validateUsername(): void {
    this.email.error = '';
    if (this.validation.isValidRobosoftEmail(this.email.value)) {
      this.email.tick = true;
    } else {
      this.email.tick = false;
    }
    this.enableButton();
  }

  isValid(): void {
    this.showMark = true;
    if (!this.email.value) {
      this.email.error = 'Email is required';
    } else if (!this.validation.isValidRobosoftEmail(this.email.value)) {
      this.email.error = 'You have entered invalid email address';
    } else {
      this.email.error = '';
    }
  }

  isValidPassword(): void {
    if (this.password.value.length < 8) {
      this.password.error = 'Enter Password (minimum 8 characters)';
    }
  }

  enableButton(): void {
    if (!this.password.error && this.password.value.length >= 8 && !this.email.error && this.email.tick) {
      this.buttonDisabled = false;
    } else {
      this.buttonDisabled = true;
    }
  }

  onClickSignIn(): void {
    this.signInService.signInDetails(this.email.value, this.password.value, this.role)
    .subscribe(
      res => {
        if (res.status === 200) {
          this.signInService.storeCredentials(res);
          this.router.navigate(['/dashboard']);
        } else if (res.status === 401) {
          this.email.error = res.message;
        }
      },
      err => {
        this.email.error = err.statusText;
        console.log('Error : ', err);
      }
    );
  }
}
