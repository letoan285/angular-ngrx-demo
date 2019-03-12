import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Patient } from './patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patientsUrl = 'http://localhost:3030/api/patients';

  constructor(private http: HttpClient) {}

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientsUrl);
  }

  getPatientById(payload: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.patientsUrl}/${payload}`);
  }

  createPatient(payload: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.patientsUrl, payload);
  }

  updatePatient(patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(
      `${this.patientsUrl}/${patient.id}`,
      patient
    );
  }

  deletePatient(payload: string) {
    return this.http.delete(`${this.patientsUrl}/${payload}`);
  }
}
