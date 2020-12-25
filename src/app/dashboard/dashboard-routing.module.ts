import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent, CvAnalysisComponent, CvStatsComponent, CvStatsBodyComponent, CvDetailsComponent , CvRejectedComponent} from './components';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'cv', component: CvAnalysisComponent },
      {
        path: 'cv/stats', component: CvStatsComponent,
        children: [
          { path: ':designation', component: CvStatsBodyComponent },
        ]
      },
      { path: 'cv/details', component: CvDetailsComponent },
      {path:'cv/rejected', component: CvRejectedComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
