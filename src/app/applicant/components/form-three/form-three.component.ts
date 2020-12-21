import { SignUpValidators } from '../../../login/components/sign-up/signup.validator';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//Chips
// import {COMMA, ENTER} from '@angular/cdk/keycodes';
// import {MatChipInputEvent} from '@angular/material/chips';
// export interface Fruit {
//   name: string;
// }

interface User {
  name: string;
  email: string;
  mobile: string;
  designation: string;
  position: string;
  password: string;
}

@Component({
  selector: 'app-form-three',
  templateUrl: './form-three.component.html',
  styleUrls: ['./form-three.component.scss']
})
export class FormThreeComponent implements OnInit {

  //chips
  // visible = true;
  // selectable = true;
  // removable = true;
  // addOnBlur = true;
  // readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  // fruits: Fruit[] = [
  //   {name: 'Lemon'},
  //   {name: 'Lime'},
  //   {name: 'Apple'},
  // ];

  // add(event: MatChipInputEvent): void {
  //   const input = event.input;
  //   const value = event.value;

  //   // Add our fruit
  //   if ((value || '').trim()) {
  //     this.fruits.push({name: value.trim()});
  //   }

  //   // Reset the input value
  //   if (input) {
  //     input.value = '';
  //   }
  // }

  // remove(fruit: Fruit): void {
  //   const index = this.fruits.indexOf(fruit);

  //   if (index >= 0) {
  //     this.fruits.splice(index, 1);
  //   }
  // }
  //chips close


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

  //FileDragDrop
  file: FileList;

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




  //FileDragDrop

  // tslint:disable-next-line: typedef
  handleFileInput(event) {
    this.file = event.item(0);
    this.details();
  }

  // tslint:disable-next-line: typedef
  dragDropFile(files) {
    console.log(files);
    this.file = files.item(0);
  }

  convertSize(fileSize: number): string {
    return fileSize < 1024000
      ? (fileSize / 1024).toFixed(2) + ' KB'
      : (fileSize / 1024000).toFixed(2) + ' MB';
  }

  reset(): void {
    this.file = null;
    this.details();
  }

  details(): void {
    // console.log(this.file.name);
    // console.log(this.convertSize(this.file.size));
  }

}

