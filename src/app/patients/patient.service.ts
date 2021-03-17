import { Doctor } from 'src/app/doctors/doctor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { Doctor } from '../doctors/doctor';
import { Speciality } from '../specialities/speciality';
import { Visit } from '../visits/visit';
import { Patient } from './patient';

import { PatientDetails } from './patientDetails';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  baseUrl="http://localhost:5000/";
  constructor(private httpClient : HttpClient) { }

  getAllPatients():Observable<PatientDetails[]>{
   return  this.httpClient.get<PatientDetails[]>(this.baseUrl+'patientsDetails');

  }
   // get doctors just id and fname to populate the select
  getSelectDoctor():Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>(this.baseUrl+ 'selectdoctors')

  }


  // create Patient
  createPatient(patient: Patient,docId: number):Observable<Patient>{
    return this.httpClient.post<Patient>(this.baseUrl +'patients/'+docId,patient)
  }

  // get a patient by id
  getPatientById(id:number):Observable<Patient>{
    return this.httpClient.get<Patient>(this.baseUrl+'patients/' +id)
  }

  updatePatient(id: number,doctorId:number,patient:Patient):Observable<Patient>{
   return this.httpClient.put<Patient>(this.baseUrl+ 'patients/' +id +'/'+doctorId,patient);

  }

  deletePatientById(id: number):Observable<Patient>{
    return this.httpClient.delete<Patient>(this.baseUrl+'patients/'+id)
  }

  getDoctorsAndSpeciality():Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>(this.baseUrl +'doctorAndSpeciality');
  }

  getSelectSpeciality():Observable<Speciality[]>{
    return this.httpClient.get<Speciality[]>(this.baseUrl+'selectSpecialities')
  }

  createDoctor(currentSpecialityId: number,doctor: Doctor):Observable<Doctor>{
    return this.httpClient.post<Doctor>(this.baseUrl+'doctors/' + currentSpecialityId,doctor)
  }

  getDoctorById(id: number):Observable<Doctor>{
    return this.httpClient.get<Doctor>(this.baseUrl+'doctors/'+id)
  }

  updateDoctor(id: number,spId: number,doctor: Doctor):Observable<Doctor>{
    return this.httpClient.put<Doctor>(this.baseUrl+'doctors/'+id +'/' +spId,doctor);

  }

  deleteDoctorById(id: number):Observable<Doctor>{
    return this.httpClient.delete<Doctor>(this.baseUrl+'doctors/'+id);
  }
  getAllSpecialities():Observable<Speciality[]>{
    return this.httpClient.get<Speciality[]>(this.baseUrl+'specialities');
  }

  createSpeciality(speciality: Speciality):Observable<Speciality>{
    return this.httpClient.post<Speciality>(this.baseUrl+'specialities',speciality);
  }
  getSpecialityById(id: number):Observable<Speciality>{
    return this.httpClient.get<Speciality>(this.baseUrl+'specialities/'+id);
  }

  updateSpeciality(spId: number,speciality: Speciality):Observable<Speciality>{
    return this.httpClient.put<Speciality>(this.baseUrl +'specialities/'+spId,speciality)
  }

  deleteSpeciality(spId: number):Observable<Speciality>{
    return this.httpClient.delete<Speciality>(this.baseUrl+'specialities/'+spId);
  }

  getDoctorWithHisSpeciality(doctorId:number):Observable<Doctor>{
    return this.httpClient.get<Doctor>(this.baseUrl+'doctorAndSpeciality/'+doctorId);
  }
}
