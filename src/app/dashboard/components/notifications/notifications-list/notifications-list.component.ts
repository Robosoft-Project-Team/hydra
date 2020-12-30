import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.scss']
})
export class NotificationsListComponent implements OnInit {

  item = {
    message: 'aaaaaaaaaaaaa', date: 'Today at 10.20am'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
