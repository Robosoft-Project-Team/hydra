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
  InviteSentBodyComponent,
  ChartComponent
} from './components';

import {
  SidebarComponent,
  HeaderComponent,
  TableComponent,
} from './shared';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { NotificationsListComponent } from './components/notifications/notifications-list/notifications-list.component';
import { CreateEventFormComponent } from './components/notifications/create-event-form/create-event-form.component';

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
    InviteSentBodyComponent,
    NotificationsComponent,
    NotificationsListComponent,
    CreateEventFormComponent,
    ChartComponent
  ],
  imports: [
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
