import { PatientService } from './../../patients/patient.service';
import { Component, OnInit } from '@angular/core';
import { Speciality } from '../speciality';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-speciality',
  templateUrl: './create-speciality.component.html',
  styleUrls: ['./create-speciality.component.css']
})
export class CreateSpecialityComponent implements OnInit {
 speciality=new Speciality();
  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit(): void {
  }
  onAdd(){
    this.patientService.createSpeciality(this.speciality).subscribe(data =>{
      console.log("A speciality has been created")
      this.router.navigate(['specialityList']);
    });

  }
}
