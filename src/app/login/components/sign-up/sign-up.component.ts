import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormValidationService } from 'src/app/shared/services/form-validation.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  //Reactive Forms
  signupForm: FormGroup;
  formError = false;


  constructor(
    private validation: FormValidationService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email, this.isEmailValid]),
      'mobile': new FormControl(null, Validators.required),
      'designation': new FormControl(null, Validators.required),
      'radio': new FormControl('recruiter'),
      'password': new FormControl(null, [Validators.required, this.isPasswordValid.bind(this)]),
      'rePassword': new FormControl(null, [Validators.required, this.isPasswordMatching.bind(this)]),
    });

    this.signupForm.setValue({
      'name': '',
      'email': '',
      'mobile': '',
      'designation': '',
      'radio': 'recruiter',
      'password': '',
      'rePassword': ''
    })
  }

  onSubmit(): void {
    console.log(this.signupForm);
    if (this.signupForm.invalid) {
      this.formError = true;
      return;
    }
    this.router.navigate(['../form'], { relativeTo: this.route });
  }

  isEmailValid(control: FormControl): { [s: string]: boolean } {
    if (!control.value) {
      return { 'invalidCompanyEmail': true };
    }
    if (this.validation.isValidRobosoftEmail(control.value)) {
      return null;
    }
  }

  isPasswordValid(control: FormControl): { [s: string]: boolean } {
    if (!control.value) {
      return { 'invalidPassword': true };
    }
    if (this.validation.isValidPassword(control.value)) {
      return null;
    }
  }

  isPasswordMatching(control: FormControl): { [s: string]: boolean } {
    if (
      !control.value ||
      !this.signupForm.get('password').value ||
      this.signupForm.get('password').value !== control.value
    ) {
      return { 'passwordMatchError': true }
    }
    return null;
  }
}
