import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormValidationService } from 'src/app/shared/services/form-validation.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  name = { value: '', error: false };
  email = { value: '', error: false };
  mobile = { value: '', error: false };
  designation = { value: '', error: false };
  rePassword = { value: '', error: false };
  position = 'recruiter';
  password: string;

  constructor(
    private validation: FormValidationService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  resetErrorFields(): void {
    this.name.error = false;
    this.email.error = false;
    this.mobile.error = false;
    this.designation.error = false;
    this.rePassword.error = false;
  }

  getValues(): object {
    return {
      name: this.name.value,
      email: this.email.value,
      mobile: this.mobile.value,
      designation: this.designation.value,
      password: this.password,
      position: this.position
    };
  }

  isValidFields(): boolean {
    if (!this.name.value) {
      this.name.error = true;
    }
    if (!this.validation.isValidRobosoftEmail(this.email.value)) {
      this.email.error = true;
    }
    if (!this.validation.isValidMobileNumber(this.mobile.value)) {
      this.mobile.error = true;
    }
    if (!this.designation.value) {
      this.designation.error = true;
    }
    return true;
  }

  isPasswordMatching(): boolean {
    if (!this.password ||
      !this.rePassword.value ||
      this.password !== this.rePassword.value) {
      this.rePassword.error = true;
      return false;
    }
    return true;
  }

  onClickSubmit(): void {
    console.log(
      this.name.error,
      this.email.error,
      this.mobile.error,
      this.designation.error,
      this.position,
      this.rePassword.error,
      this.password
    );
    this.resetErrorFields();
    if (this.isValidFields() && this.isPasswordMatching()) {
      console.log(this.getValues());
      this.router.navigate(['../form'], { relativeTo: this.route });
    }
  }

}
