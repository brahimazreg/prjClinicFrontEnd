import { PatientService } from './../patient.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {
 currentId:number=0;
 patient?:Patient;
  constructor(private activatedRoute: ActivatedRoute, private patientService: PatientService,private router: Router) { }

  ngOnInit(): void {
    this.currentId=this.activatedRoute.snapshot.params.id;
    this.patientService.getPatientById(this.currentId).subscribe(data => {
      this.patient=data;
    });

  }
 onBack(){
   this.router.navigate(['patientList']);
 }
}
