import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvAnalysisComponent } from './components/cv-analysis/cv-analysis.component';
import { HomeComponent } from './components/home/home.component';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent,
  children: [
    {path: '', component: HomeComponent},
    {path: 'cv', component: CvAnalysisComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
