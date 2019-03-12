import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientComponent } from './patient/patient.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';

@NgModule({
  imports: [
    CommonModule,
    PatientsRoutingModule
  ],
  declarations: [PatientComponent, PatientListComponent, PatientAddComponent, PatientDetailComponent, PatientEditComponent]
})
export class PatientsModule { }
