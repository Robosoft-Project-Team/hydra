import { FormControl } from '@angular/forms';
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
  notificationStatus = true;
  isClickable: boolean[];
  date = moment().format('YYYY, MMMM DD');
  notifications: NotificationList[];
  isNotificationExists = false;

  constructor(private notification: NotificationListService) { }

  ngOnInit(): void {
    this.notification.getNotificationList().subscribe(
      response => {
        this.notifications = response.data.reverse();
        this.isNotificationExists = this.notifications.length > 0 ? true : false;
        this.isClickable = new Array(this.notifications.length).fill(true);
      }
    );
  }

  formatDate(date: number[]): string {
    return moment(new Date(Date.UTC(date[0], date[1] - 1, date[2], date[3], date[4], date[5]))).format('MMMM DD, hh:mm a');
  }

  onClose(id: number): void {
    this.notification.deleteNotification(this.notifications[id].notificationId).subscribe(
      response => {
        this.notifications.splice(id, 1);
      },
      error => {
        console.log('Error =', error);
      }
    );
    this.isNotificationExists = this.notifications.length > 0 ? true : false;
  }

  joinDecline(id: string | number, status: any): void {
    this.notification.joinDeclineEvent(this.notifications[id].notificationId, this.notifications[id].eventId, status).subscribe(
      response => {
        if (response.status === 200) {
          this.isClickable[id] = false;
        }
      },
      error => {
        console.log('Join Decline Error = ', error);
      }
    );
    console.log(this.notificationStatus);

    this.notification.getNotificationList().subscribe(
      response => {
        this.notifications = response.data.reverse();
        this.isNotificationExists = this.notifications.length > 0 ? true : false;
        this.isClickable = new Array(this.notifications.length).fill(true);
      }
    );
  }
}
