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
  changePasswordForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private passwordService: ChangePasswordService,
    private validation: FormValidationService
  ) {
    this.buttonDisabled = true;
  }

  ngOnInit(): void {
    this.changePasswordForm = new FormGroup({
      newPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
      reEnterPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  get form(): any {
    return this.changePasswordForm.controls;
  }

  buttonState(): void {
    if (!this.validation.isValidPassword(this.form.newPassword.value)) {
      this.message = 'Enter Strong Password (8 - 16 chars)';
      this.buttonDisabled = true;
      return;
    }

    if (this.form.newPassword.value !== this.form.reEnterPassword.value) {
      this.message = 'Password do not match!';
      this.buttonDisabled = true;
      return;
    }

    this.message = '';
    this.buttonDisabled = false;

  }

  submitPassword(): void {
    this.passwordService.changePassword(this.changePasswordForm.get('newPassword').value)
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
