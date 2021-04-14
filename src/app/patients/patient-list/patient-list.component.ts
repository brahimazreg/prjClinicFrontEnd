import { PatientService } from './../patient.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { PatientDetails } from '../patientDetails';
import { Patient } from '../patient';


@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patientsDetails?: PatientDetails[];
  deletedPatient?: Patient;
  totalRecords?: number; // for pagination
  page:number=1; // for pagination

  constructor(private patientService: PatientService,private router: Router) { }

  ngOnInit(): void {
    this.patientService.getAllPatients().subscribe(data =>{
      this.patientsDetails=data;
      this.totalRecords=this.patientsDetails.length // memorize the length of data
      console.log(this.totalRecords);
    });
  }

  // this method call create component
  onAddPatient(){
     this.router.navigate(['create-patient'])
    // console.log("test")
  }

  onUpdate(id:number){

    this.router.navigate([('update-patient/'+id)]);

  }

  onDelete(id:number){

   this.patientService.deletePatientById(id).subscribe(data =>{
    // this.deletedPatient=data;
    // console.log("A patient has been deleted");
    this.ngOnInit();
   });

  }

  onEdit(id:number){

   this.router.navigate([('edit-patient/'+id)]);

  }

}
