import { PatientService } from './../../patients/patient.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Speciality } from '../speciality';

@Component({
  selector: 'app-update-speciality',
  templateUrl: './update-speciality.component.html',
  styleUrls: ['./update-speciality.component.css']
})
export class UpdateSpecialityComponent implements OnInit {
  specialityId: number=0
  myspeciality=new Speciality();
  constructor(private activatedRoute: ActivatedRoute,private patientService: PatientService,private router:Router) { }

  ngOnInit(): void {
    this.specialityId=this.activatedRoute.snapshot.params.id;
    this.patientService.getSpecialityById(this.specialityId).subscribe(data => {
      this.myspeciality=data;
    });
  }

  onSave(updateSpeciality:any){
   this.patientService.updateSpeciality(this.specialityId,updateSpeciality.value).subscribe(data =>{
     this.router.navigate(['specialityList']);
     console.log("A speciality has been updated")
   });
  }

}
