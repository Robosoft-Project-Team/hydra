import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormValidationService } from 'src/app/shared/services/form-validation.service';

@Component({
  selector: 'app-login-forgot-password',
  templateUrl: './login-forgot-password.component.html',
  styleUrls: ['./login-forgot-password.component.scss']
})
export class LoginForgotPasswordComponent implements OnInit {

  email = { value: '', error: '' };

  constructor(private validation: FormValidationService,
              private router: Router,
              private route: ActivatedRoute ) { }

  ngOnInit(): void {
  }

  isValidEmail(): boolean {
    return this.validation.isValidRobosoftEmail(this.email.value);
  }

  onClickSubmitEmail(): void {
    if (!this.email.value) {
      this.email.error = 'This field is required';
    } else if (!this.isValidEmail()) {
      this.email.error = 'You have entered a invalid mail address';
    } else {
      this.router.navigate(['../verify'], { relativeTo: this.route });
    }
  }
}
