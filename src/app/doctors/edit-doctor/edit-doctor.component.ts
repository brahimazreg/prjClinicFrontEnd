import { PatientService } from './../../patients/patient.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent implements OnInit {
  doctorId: number=0;
  doctor?:Doctor;

  constructor(private activatedRoute: ActivatedRoute,private patientService: PatientService,private router:Router) { }

  ngOnInit(): void {
    this.doctorId=this.activatedRoute.snapshot.params.id;

     this.patientService.getDoctorWithHisSpeciality(this.doctorId).subscribe(

      data => {
        console.log(data);
        this.doctor=data;
      }
    );

  }
  backToList(){
   this.router.navigate(['doctorsList']);
  }
}
