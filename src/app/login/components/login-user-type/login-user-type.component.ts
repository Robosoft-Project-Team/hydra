import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-user-type',
  templateUrl: './login-user-type.component.html',
  styleUrls: ['./login-user-type.component.scss']
})
export class LoginUserTypeComponent implements OnInit {
  recruiterActive = false;
  organizerActive = false;
  approvalActive = false;
  constructor() { }

  ngOnInit(): void {
  }

}
