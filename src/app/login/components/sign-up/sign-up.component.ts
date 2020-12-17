import { SignUpValidators } from './signup.validator';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface User {
  name: string;
  email: string;
  mobile: string;
  designation: string;
  position: string;
  password: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  // Reactive Forms
  signupForm: FormGroup;
  formError = false;

  formData: User = {
    name: '',
    email: '',
    mobile: '',
    designation: '',
    position: 'recruiter',
    password: '',
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name: new FormControl(this.formData.name, [Validators.required, SignUpValidators.isValidUsername()]),
      email: new FormControl(
        this.formData.email,
        [
          Validators.required,
          SignUpValidators.isValidEmail(),
          SignUpValidators.isCompanyEmail()
        ]),
      mobile: new FormControl(this.formData.mobile, [Validators.required, SignUpValidators.isValidMobileNumber()]),
      designation: new FormControl(this.formData.designation, Validators.required),
      position: new FormControl(this.formData.position),
      passwordForm: new FormGroup({
        password: new FormControl(this.formData.password, [Validators.required, SignUpValidators.isValidPassword()]),
        rePassword: new FormControl(
          this.formData.password,
          [
            Validators.required,
            SignUpValidators.isValidPassword()
          ]
        ),
      }, SignUpValidators.isPasswordMatching('password', 'rePassword'))
    });
  }

  get signup(): any {
    return this.signupForm.controls;
  }

  setFormData(): void {
    this.formData.name = this.signup.name.value || '';
    this.formData.email = this.signup.email.value || '';
    this.formData.mobile = this.signup.mobile.value || '';
    this.formData.designation = this.signup.designation.value || '';
    this.formData.position = this.signup.position.value || 'recruiter';
    this.formData.password = this.signup.passwordForm?.controls?.rePassword?.value || '';
  }

  onSubmit(): void {
    if (this.signupForm.invalid) {
      this.formError = true;
      return;
    }
    this.setFormData();
    console.log(this.formData);
    this.router.navigate(['../form'], { relativeTo: this.route });
  }
}
