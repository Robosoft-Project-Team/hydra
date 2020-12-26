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
      designation: 'UI/UX Designer',
      location: 'Udupi'
    },
    {
      designation: 'Figma designer',
      location: 'Udupi'
    },
    {
      designation: 'PHP Developer',
      location: 'Bangaluru'
    },
    {
      designation: 'Angular Dev',
      location: 'Udupi'
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
