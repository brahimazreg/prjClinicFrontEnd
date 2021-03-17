import { PatientService } from './../../patients/patient.service';
import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent implements OnInit {
  doctor=new Doctor();
  specialities?: any[];
  currentSpecialityId: any;
  constructor(private patientService: PatientService,private router: Router) { }

  ngOnInit(): void {
    this.patientService.getSelectSpeciality().subscribe(data => {
      this.specialities=data;
    });
  }

  onAdd(){
    // call method with doctor and currentSpecialityId
    this.patientService.createDoctor(this.currentSpecialityId,this.doctor).subscribe(data =>{
       this.router.navigate([('doctorsList')]);

    });
    console.log(this.currentSpecialityId)
    console.log(this.doctor)
  }

}
