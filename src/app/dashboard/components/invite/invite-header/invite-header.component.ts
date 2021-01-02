import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/core/models';

@Component({
  selector: 'app-invite-header',
  templateUrl: './invite-header.component.html',
  styleUrls: ['./invite-header.component.scss']
})
export class InviteHeaderComponent implements OnInit {
  user: Profile = {
    name: 'Renuka Shetty',
    designation: 'Recruiter',
    imageURL: 'https://randomuser.me/api/portraits/women/11.jpg'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
