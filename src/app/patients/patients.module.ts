import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientListComponent } from './patient-list/patient-list.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [PatientListComponent, CreatePatientComponent, UpdatePatientComponent, EditPatientComponent],
  imports: [
    CommonModule,FormsModule,NgxPaginationModule
  ],
  exports: [
    PatientListComponent,CreatePatientComponent,UpdatePatientComponent,EditPatientComponent
  ]
})
export class PatientsModule { }
