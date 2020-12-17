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

  constructor(private validation: FormValidationService,
              private router: Router,
              private route: ActivatedRoute,
              private passwordService: ChangePasswordService ) { }

  ngOnInit(): void {
  }

  isValidEmail(): boolean {
    return this.validation.isValidRobosoftEmail(this.email.value);
  }

  checkUserExists(): boolean {
    this.passwordService.checkUserExists(this.email.value)
    .subscribe(
      res => {
        if (res.status === 200) {
          return true;
        }
      },
      err => {
        this.email.error = err.message;
      }
    );
    return false;
  }

  validationCheck(): boolean {
    if (!this.email.value) {
      this.email.error = 'This field is required';
      return false;
    } else if (!this.isValidEmail() || !this.checkUserExists()) {
      this.email.error = 'You have entered a invalid mail address';
      return false;
    } else {
      return true;
    }
  }

  onClickSubmitEmail(): void {
    if (this.validationCheck()) {
      this.passwordService.setUserEmail(this.email.value);
      this.router.navigate(['../verify'], { relativeTo: this.route });
    }
  }
}
