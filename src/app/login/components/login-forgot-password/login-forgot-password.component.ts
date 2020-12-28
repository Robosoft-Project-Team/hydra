import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormValidationService } from 'src/app/shared/services/form-validation.service';
import { ChangePasswordService } from '../../services/change-password.service';

@Component({
  selector: 'app-login-forgot-password',
  templateUrl: './login-forgot-password.component.html',
  styleUrls: ['./login-forgot-password.component.scss']
})
export class LoginForgotPasswordComponent implements OnInit {

  email = { value: '', error: '' };
  buttonDisabled: boolean;

  constructor(
    private validation: FormValidationService,
    private router: Router,
    private route: ActivatedRoute,
    private passwordService: ChangePasswordService) { }

  ngOnInit(): void {
    this.buttonDisabled = true;
  }

  isValidEmail(): boolean {
    return this.validation.isValidRobosoftEmail(this.email.value);
  }

  isValid(): void {
    this.email.error = '';
    if (this.isValidEmail()) {
      this.buttonDisabled = false;
    } else {
      this.buttonDisabled = true;
    }
  }

  validationCheck(): boolean {
    this.passwordService.checkUserExists(this.email.value)
      .subscribe(
        response => {
          if (response.status === 200) {
            return true;
          }
        },
        error => {
          this.email.error = 'Please check your email address';
        }
      );
    return false;
  }

  onClickSubmitEmail(): void {
    if (this.validationCheck()) {
      this.passwordService.setUserEmail(this.email.value);
      this.router.navigate(['../verify'], { relativeTo: this.route });
    }
  }
}
