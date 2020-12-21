import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { StatisticsComponent } from './components/home/statistics/statistics.component';
import { SummaryComponent } from './components/home/summary/summary.component';
import { NotificationItemComponent } from './components/home/notification-item/notification-item.component';
import { OrganizerListComponent } from './components/home/organizer-list/organizer-list.component';
import { CvAnalysisComponent } from './components/cv-analysis/cv-analysis.component';
import { HeaderComponent } from './components/cv-analysis/header/header.component';
import { TableComponent } from './components/cv-analysis/table/table.component';


@NgModule({
  declarations: [DashboardComponent, SidebarComponent, HomeComponent, StatisticsComponent, SummaryComponent, NotificationItemComponent, OrganizerListComponent, CvAnalysisComponent, HeaderComponent, TableComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
