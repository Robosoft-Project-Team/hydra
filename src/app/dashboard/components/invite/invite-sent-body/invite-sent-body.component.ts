import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite-sent-body',
  templateUrl: './invite-sent-body.component.html',
  styleUrls: ['./invite-sent-body.component.scss']
})
export class InviteSentBodyComponent implements OnInit {
  @Input() users;

  constructor() { }

  ngOnInit(): void {
  }

}
