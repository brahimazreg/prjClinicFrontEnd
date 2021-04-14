import { Doctor } from 'src/app/doctors/doctor';
import { PatientService } from './../../patients/patient.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css']
})
export class DoctorsListComponent implements OnInit {
  doctors?: Doctor[];
  currentSpecialityId: any;
  totalRecords?: number; // for pagination
   page:number=1; // for pagination
  constructor(private patientService: PatientService,private router: Router) { }

  ngOnInit(): void {
    this.patientService.getDoctorsAndSpeciality().subscribe(data =>{
      this.doctors=data;
      console.log(data);
    });
  }

  onAdd(){
   this.router.navigate(['create-doctor']);
  }

  onUpdate(id: number){
      this.router.navigate(['update-doctor/'+id]);
  }
  onDelete(id: number){
    this.patientService.deleteDoctorById(id).subscribe(data =>{
      console.log("A doctor has been deleted")
      this.ngOnInit();
    });
  }
  onEdit(id: number){
    this.router.navigate(['edit-doctor/'+id]);
  }

}
