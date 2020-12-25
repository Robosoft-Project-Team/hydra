import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from './../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import {
  SidebarComponent,
  HomeComponent,
  StatisticsComponent,
  SummaryComponent,
  NotificationItemComponent,
  OrganizerListComponent,
  CvAnalysisComponent,
  HeaderComponent,
  TableComponent,
  CvStatsComponent,
  CvStatsHeaderComponent,
  CvStatsBodyComponent,
  CvDetailsComponent,
  ApplicantCardComponent,
  LeftSidebarComponent,
} from './components';
import { CvRejectedComponent } from './components/cv-rejected/cv-rejected.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    HomeComponent,
    StatisticsComponent,
    SummaryComponent,
    NotificationItemComponent,
    OrganizerListComponent,
    CvAnalysisComponent,
    HeaderComponent,
    TableComponent,
    CvStatsComponent,
    CvStatsHeaderComponent,
    CvStatsBodyComponent,
    CvDetailsComponent,
    ApplicantCardComponent,
    LeftSidebarComponent,
    CvRejectedComponent
  ],
  imports: [
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
