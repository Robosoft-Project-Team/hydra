import { Component, OnInit } from '@angular/core';
import { Profile, User } from 'src/app/core/models';
import { DashboardService } from 'src/app/dashboard/services/dashboard.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-invite-header',
  templateUrl: './invite-header.component.html',
  styleUrls: ['./invite-header.component.scss']
})
export class InviteHeaderComponent implements OnInit {
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
