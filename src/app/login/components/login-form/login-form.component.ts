import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormValidationService } from 'src/app/shared/services/form-validation.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { SignInService } from 'src/app/login/services/sign-in.service';

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
  role = 'ROLE_RECRUITER';

  constructor(
    private validation: FormValidationService,
    private router: Router,
    private route: ActivatedRoute,
    private signInService: SignInService,
    private storageService: StorageService
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
      this.password.error = 'Enter Password (min 8 chars)';
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
        response => {
          if (response.status === 200) {
            this.router.navigate(['/dashboard']);
            this.signInService.storeCredentials(response.data.accessToken);
            this.storageService.setUserProfile(response.data.employeeName, response.data.roles[0].id);
          }
        },
        error => {
          this.email.error = 'Invalid username or password';
        }
      );
  }
}
