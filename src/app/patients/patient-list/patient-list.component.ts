import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  public patients: any = [];
  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.getPatientList();
  }
  public getPatientList() {
    this.patientService.getPatients().subscribe(
      res => {
        this.patients = res;
      },
      error => console.log(error)
    );
  }

  deletePatient(id: string) {
    this.patientService.deletePatient(id).subscribe(
      res => {
        console.log(res);
        this.getPatientList();
      },
      err => console.log(err)
    );
  }

}
