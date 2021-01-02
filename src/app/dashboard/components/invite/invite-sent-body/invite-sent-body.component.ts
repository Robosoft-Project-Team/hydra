import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite-sent-body',
  templateUrl: './invite-sent-body.component.html',
  styleUrls: ['./invite-sent-body.component.scss']
})
export class InviteSentBodyComponent implements OnInit {

  user = {
    name: 'Kaushik Kumar', designation: 'Product Manager',
    location: 'Bangalore', phone: '+91 9876543210', email:'kaushik_kumar@gmail.com'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
