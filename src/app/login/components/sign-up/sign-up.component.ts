import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  name = { value: '', error: false };
  email = { value: '', error: false };
  mobile =  { value: '', error: false };
  designation = { value: '', error: false };
  position = 'recruiter';
  password;
  rePassword = { value: '', error: false };

  constructor() { }

  ngOnInit(): void {
  }

  isValidFields(): boolean {
    return true;
  }

  submit(): void {
  }

}
