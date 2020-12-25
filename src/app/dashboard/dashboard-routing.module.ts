import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent, CvAnalysisComponent, CvStatsComponent, CvStatsBodyComponent, CvDetailsComponent } from './components';

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
      { path: 'cv/details', component: CvDetailsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
