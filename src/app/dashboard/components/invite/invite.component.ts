import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {
  showFormBackground: false;
  list = [
    {
      designation: 'Invite Candidates',
      location: ''
    },
    {
      designation: 'Today (04 Mar 2020)',
      location: '09 Invited'
    },
    {
      designation: 'Yesterday',
      location: '03 Invited'
    },
    {
      designation: 'Past One Month',
      location: '24 Invited'
    },
    {
      designation: 'November',
      location: '20 Invited'
    },
    {
      designation: '2019',
      location: '302 Invited'
    },
    {
      designation: '2018',
      location: '520 Invited'
    }
  ];

  index = 0;
  constructor() { }

  ngOnInit(): void {
    this.disp(0);
  }

  disp(index): void {
    this.index = index;
    console.log('selected index: ', index);
  }

}
