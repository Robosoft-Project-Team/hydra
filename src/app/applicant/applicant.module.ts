import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { ApplicantRoutingModule } from './applicant-routing.module';
import { ApplicantComponent } from './applicant.component';
import { FormOneComponent, FormTwoComponent, FormThreeComponent, ApplySuccessComponent } from './components';


@NgModule({
  declarations: [ApplicantComponent, FormOneComponent, FormTwoComponent, FormThreeComponent, ApplySuccessComponent],
  imports: [
    ApplicantRoutingModule,
    SharedModule
  ]
})
export class ApplicantModule { }
