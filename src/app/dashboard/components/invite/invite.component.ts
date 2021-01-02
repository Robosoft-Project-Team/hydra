import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {
  selectedIndex = 0;
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

  users = [
    {
      name: 'Kaushik Kumar',
      designation: 'Product Manager',
      location: 'Bangalore',
      phone: '+91 9876543210',
      email: 'kaushik_kumar@gmail.com'
    },
    {
      name: 'John Doe',
      designation: 'Product Manager',
      location: 'Bangalore',
      phone: '+91 9876543210',
      email: 'john_doe@gmail.com'
    },
    {
      name: 'James Adams',
      designation: 'Content Manager',
      location: 'Udupi',
      phone: '+91 9876543210',
      email: 'james_adams@gmail.com'
    },
    {
      name: 'Kaushik Kumar',
      designation: 'Product Manager',
      location: 'Bangalore',
      phone: '+91 9876543210',
      email: 'kaushik_kumar@gmail.com'
    },
    {
      name: 'John Doe',
      designation: 'Product Manager',
      location: 'Bangalore',
      phone: '+91 9876543210',
      email: 'john_doe@gmail.com'
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  disp(index: number): void {
    this.selectedIndex = index;
  }

  getUsers(mode: number): any {
    switch (mode) {
      case 1: return this.users.slice(0, 3);
      case 2: return this.users.slice(2, 3);
      case 3: return this.users.slice(1);
      case 4: return this.users.slice(0, 4);
      case 5: return this.users.slice(3);
      case 5: return this.users.slice();
      default: return this.users.slice();
    }
  }
}
