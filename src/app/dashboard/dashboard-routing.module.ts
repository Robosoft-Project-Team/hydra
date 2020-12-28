import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import {
  HomeComponent,
  CvAnalysisComponent,
  CvStatsComponent,
  CvDetailsComponent,
  AssignBoardComponent,
  InviteComponent,
  CvRejectedComponent
} from './components';
import { NotificationsComponent } from './components/notifications/notifications.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'cv', component: CvAnalysisComponent },
      {
        path: 'cv/stats', component: CvStatsComponent,
        children: [
          { path: ':id', component: CvDetailsComponent },
        ]
      },
      { path: 'assign', component: AssignBoardComponent },
      {
        path: 'rejected', component: CvRejectedComponent,
        children: [
          { path: ':id', component: CvDetailsComponent },
        ]
      },
      { path: 'invite', component: InviteComponent },
      {path: 'notifications', component: NotificationsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
