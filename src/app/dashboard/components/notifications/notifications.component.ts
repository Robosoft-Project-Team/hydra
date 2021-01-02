import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';
import { DashboardService } from 'src/app/dashboard/services/dashboard.service';
import { User } from 'src/app/core/models';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  user: User = {
    name: '',
    designation: '',
    image: {
      url: ''
    }
  };

  constructor(
    private storageService: StorageService,
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.user.name = this.storageService.getUserProfile()?.employeeName || 'User';
    this.user.designation = this.storageService.getUserProfile()?.employeeRole || 'Employee';
    this.user.image.url = this.dashboardService.dashboardData.user.image.url;
  }

}
