import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from './../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import {
  HomeComponent,
  StatisticsComponent,
  SummaryComponent,
  NotificationItemComponent,
  OrganizerListComponent,
  CvAnalysisComponent,
  CvStatsComponent,
  CvStatsBodyComponent,
  CvDetailsComponent,
  ApplicantCardComponent,
  LeftSidebarComponent,
  AssignBoardComponent,
  InviteComponent,
  InviteHeaderComponent,
  InviteBodyComponent,
  CvRejectedComponent,
  InviteSentBodyComponent
} from './components';

import {
  SidebarComponent,
  HeaderComponent,
  TableComponent,
} from './shared';

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
    CvStatsBodyComponent,
    CvDetailsComponent,
    ApplicantCardComponent,
    LeftSidebarComponent,
    AssignBoardComponent,
    InviteComponent,
    InviteHeaderComponent,
    InviteBodyComponent,
    CvRejectedComponent,
    InviteSentBodyComponent
  ],
  imports: [
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
