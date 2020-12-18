import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ChangePasswordService } from 'src/app/login/services/change-password.service';
import { FormValidationService } from 'src/app/shared/services/form-validation.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  message: string;
  buttonDisabled: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private passwordService: ChangePasswordService,
    private validation: FormValidationService
  ) {
    this.buttonDisabled = true;
  }

  changepassword: FormGroup = new FormGroup({
    newPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    reEnterPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  ngOnInit(): void {
  }

  buttonState(): void {
    if (this.changepassword.invalid ||
      !this.validation.isValidPassword(this.changepassword.get('newPassword').value)) {
      this.message = 'Enter Strong Password (8 - 16 chars)';
      this.buttonDisabled = true;
    }
    else if (this.changepassword.get('newPassword').value !== this.changepassword.get('reEnterPassword').value) {
      this.message = 'Password do not match!';
      this.buttonDisabled = true;
    }
    else {
      this.message = '';
      this.buttonDisabled = false;
    }
  }

  submitPassword(): void {
    this.passwordService.changePassword(this.changepassword.get('newPassword').value)
      .subscribe(
        res => {
          if (res.status === 200) {
            this.router.navigate(['../reset-success'], { relativeTo: this.route });
          }
        },
        err => {
          this.message = err.messageText;
        }
      );
  }
}
