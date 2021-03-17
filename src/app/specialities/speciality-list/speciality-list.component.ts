import { PatientService } from './../../patients/patient.service';
import { Component, OnInit } from '@angular/core';
import { Speciality } from '../speciality';
import { Router } from '@angular/router';

@Component({
  selector: 'app-speciality-list',
  templateUrl: './speciality-list.component.html',
  styleUrls: ['./speciality-list.component.css']
})
export class SpecialityListComponent implements OnInit {
specialities?: Speciality[];
  constructor(private patientService : PatientService,private router:Router) { }

  ngOnInit(): void {
    this.patientService.getAllSpecialities().subscribe(data =>{
      this.specialities = data;
    });
  }
   onAdd(){
   this.router.navigate(['create-speciality']);
   }

   onUpdate(id:number){
    this.router.navigate(['update-speciality/'+id]);
   }
   onDelete(id: number){
    this.patientService.deleteSpeciality(id).subscribe(data =>{
      this.ngOnInit();
      console.log("A speciality has been deleted")
    });
   }
}
