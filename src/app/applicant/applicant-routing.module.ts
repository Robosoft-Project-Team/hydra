import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicantComponent } from './applicant.component';
import { FormOneComponent, FormTwoComponent, FormThreeComponent, ApplySuccessComponent } from './components';

const routes: Routes = [
  {
    path: '', component: ApplicantComponent,
    children: [
      { path: '', redirectTo: 'form-1' },
      { path: 'form-1', component: FormOneComponent },
      { path: 'form-2', component: FormTwoComponent },
      { path: 'form-3', component: FormThreeComponent },
      { path: 'apply-success', component: ApplySuccessComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantRoutingModule { }
