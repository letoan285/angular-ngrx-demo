import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { PatientAddComponent } from './patient-add/patient-add.component';

const routes: Routes = [
  {
    path: '',
    component: PatientComponent
  },
  {
    path: 'list',
    component: PatientListComponent
  },
  {
    path: 'detail/:id',
    component: PatientDetailComponent
  },
  {
    path: 'edit/:id',
    component: PatientEditComponent
  },
  {
    path: 'add',
    component: PatientAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
