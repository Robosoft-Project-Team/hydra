import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';


import { ApplicantRoutingModule } from './applicant-routing.module';
import { ApplicantComponent } from './applicant.component';
import { FormOneComponent, FormTwoComponent, FormThreeComponent, ApplySuccessComponent } from './components';
import { DragDirective } from './directives/drag.directive';
import { CustomDropdownComponent } from './shared/custom-dropdown/custom-dropdown.component';


@NgModule({
  declarations: [ApplicantComponent, FormOneComponent, FormTwoComponent, FormThreeComponent, ApplySuccessComponent, DragDirective, CustomDropdownComponent],
  imports: [
    ApplicantRoutingModule,
    SharedModule
  ]
})
export class ApplicantModule { }
