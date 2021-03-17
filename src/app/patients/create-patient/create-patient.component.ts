import { PatientService } from './../patient.service';
import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/doctors/doctor';
import { Speciality } from 'src/app/specialities/speciality';
import { Visit } from 'src/app/visits/visit';
import { Patient } from '../patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {
  patient=new  Patient();
  currentDoctorId: any; // the id of the doctor selected in dropdown list
  doctors?: any[]; // this to populate the select


  constructor(private patientService: PatientService,private router: Router) { }

  ngOnInit(): void {
    // this to populate the select with id and name of doctors
   this.patientService.getSelectDoctor().subscribe(
     data => {
       this.doctors=data;
     }
   );
  }

  onAdd(){

   console.log(this.currentDoctorId)
   this.patientService.createPatient(this.patient,this.currentDoctorId).subscribe(
     data => {
         console.log("a patient has been adde");
         this.router.navigate(['patientList']);
     });




  } // end onAdd



}// end class
