import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NotificationList } from 'src/app/core/models';
import { NotificationListService } from 'src/app/dashboard/services/notification-list.service';

@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.scss']
})
export class NotificationsListComponent implements OnInit {

  date = moment().format('YYYY, MMMM DD');
  notifications: NotificationList[];
  isNotificationExists = false;

  constructor(private notification: NotificationListService) { }

  ngOnInit(): void {
    this.notification.getNotificationList().subscribe(
      response => {
        this.notifications = response.data;
        this.isNotificationExists = this.notifications.length > 0 ? true : false;
      }
    );
  }

  formatDate(date: number[]): string {
    return moment(new Date(date[0], date[1], date[2], date[3], date[4], date[5])).format('MMMM DD, hh:mm a');
  }

  onClose(id: number): void {
    this.notifications.splice(id, 1);
    this.isNotificationExists = this.notifications.length > 0 ? true : false;
  }

}