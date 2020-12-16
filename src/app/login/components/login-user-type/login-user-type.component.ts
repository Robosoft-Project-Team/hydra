import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-user-type',
  templateUrl: './login-user-type.component.html',
  styleUrls: ['./login-user-type.component.scss']
})
export class LoginUserTypeComponent implements OnInit {
  selectedItem = 0;
  userTypes = [
    'Recruiter',
    'Organizer',
    'Approval Authority'
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onSelectUserType(id: number): void {
    this.selectedItem = id;
    console.log(this.userTypes[this.selectedItem]);
  }
}
