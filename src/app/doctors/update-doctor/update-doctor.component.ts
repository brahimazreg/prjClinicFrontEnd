import { PatientService } from './../../patients/patient.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Speciality } from 'src/app/specialities/speciality';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css']
})
export class UpdateDoctorComponent implements OnInit {
  doctor= new Doctor;
   currentDoctorId: number=0;
   specialities?: Speciality[];// to fil the dropdown list
   currentSpecialityId?: any;

  constructor(private activatedRoutr: ActivatedRoute, private patientService: PatientService,private router: Router) { }

  ngOnInit(): void {
    this.currentDoctorId=this.activatedRoutr.snapshot.params.id;
    //get the doctor with the help of currentDoctorId
    this.patientService.getDoctorById(this.currentDoctorId).subscribe(data =>{
      this.doctor=data;
    });
    //  get the list of specialities to fill the dropdown list
    this.patientService.getSelectSpeciality().subscribe(data =>{
      this.specialities=data;
    });
  }

  onSave(updateDoctor:any){
     this.patientService.updateDoctor(this.currentDoctorId,this.currentSpecialityId,updateDoctor.value).subscribe(data =>{
       console.log("A doctor has been updated");
       this.router.navigate(['doctorsList']);
     });
  }

}
