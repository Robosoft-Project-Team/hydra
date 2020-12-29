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
import { ImagePipePipe } from './shared/pipes/image-pipe.pipe';

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
    ImagePipePipe
  ],
  imports: [
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
