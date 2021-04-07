import { PatientService } from './../patient.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';


@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {
currentPatient = new Patient();
currentId: number=0;
doctors?:any[];
doctorId:any;
  constructor(private  activatedRoute: ActivatedRoute, private patientService: PatientService,private router: Router) { }

  ngOnInit(): void {
    this.currentId =this.activatedRoute.snapshot.params.id;
    this.patientService.getPatientById(this.currentId).subscribe(
      data =>{
            this.currentPatient=data;
     });

     this.patientService.getSelectDoctor().subscribe(data =>{
       this.doctors=data;
     });
  }

  onSave(updatePatientForm: any){
   this.patientService.updatePatient(this.currentId,this.doctorId,updatePatientForm.value).subscribe(data=>{
     console.log("a patient has been updated");
     this.router.navigate(['patientList']);
   });
  }

}
