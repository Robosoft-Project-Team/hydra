import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import {
  HomeComponent,
  CvAnalysisComponent,
  CvStatsComponent,
  CvStatsBodyComponent,
  CvDetailsComponent,
  AssignBoardComponent,
  InviteComponent
} from './components';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'cv', component: CvAnalysisComponent },
      { path: 'cv/stats/:designation', component: CvStatsComponent },
      { path: 'cv/details', component: CvDetailsComponent },
      { path: 'assign', component: AssignBoardComponent },
      { path: 'invite', component: InviteComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
