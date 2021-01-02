import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from './../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { MAT_DATE_FORMATS } from '@angular/material/core';

const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY, MMMM DD',
  },
  display: {
    dateInput: 'YYYY, MMMM DD',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

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
  NotificationsComponent,
  NotificationsListComponent,
  CreateEventFormComponent,
  ChartComponent
} from './components';

import {
  SidebarComponent,
  HeaderComponent,
  TableComponent,
  ImagePipePipe
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
    InviteSentBodyComponent,
    NotificationsComponent,
    NotificationsListComponent,
    CreateEventFormComponent,
    ChartComponent,
    ImagePipePipe
  ],
  imports: [
    DashboardRoutingModule,
    SharedModule
  ],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }]
})
export class DashboardModule { }
