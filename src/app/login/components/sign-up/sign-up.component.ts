import { SignUpValidators } from './signup.validator';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignInService } from '../../services/sign-in.service';

interface User {
  name: string;
  username: string;
  mobile_no: string;
  designation: string;
  role: string;
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
    username: '',
    mobile_no: '',
    designation: '',
    role: 'recruiter',
    password: '',
  };

  constructor(
    private signInService: SignInService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name: new FormControl(this.formData.name, [Validators.required, SignUpValidators.isValidUsername()]),
      username: new FormControl(
        this.formData.username,
        [
          Validators.required,
          SignUpValidators.isValidEmail(),
          SignUpValidators.isCompanyEmail()
        ]),
      mobile_no: new FormControl(this.formData.mobile_no, [Validators.required, SignUpValidators.isValidMobileNumber()]),
      designation: new FormControl(this.formData.designation, Validators.required),
      role: new FormControl(this.formData.role),
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
    this.formData.username = this.signup.username.value || '';
    this.formData.mobile_no = this.signup.mobile_no.value || '';
    this.formData.designation = this.signup.designation.value || '';
    this.formData.role = this.signup.role.value || 'recruiter';
    this.formData.password = this.signup.passwordForm?.controls?.rePassword?.value || '';
  }

  onSubmit(): void {
    if (this.signupForm.invalid) {
      this.formError = true;
      return;
    }
    this.setFormData();
    this.signInService.registerUser(this.formData)
      .subscribe(
        response => {
          if (response.status === 201) {
            this.router.navigate(['../form'], { relativeTo: this.route });
          }
        },
        error => console.log('user exists', error)
      );
  }
}
