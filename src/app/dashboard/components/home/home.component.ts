import { DashboardService } from './../../services/dashboard.service';
import { DashboardData } from 'src/app/core/models';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit, OnDestroy {
  dashboardData: DashboardData;
  subscription: Subscription;
  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.dashboardData = this.dashboardService.getData();
    this.subscription = this.dashboardService.dashboardDataChanged.subscribe((data: DashboardData) => {
      this.dashboardData = data;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
