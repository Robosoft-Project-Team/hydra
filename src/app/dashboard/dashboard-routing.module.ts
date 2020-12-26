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
      { path: 'rejected', component: CvRejectedComponent },
      { path: 'invite', component: InviteComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
