import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';



@NgModule({
  declarations: [DoctorsListComponent, CreateDoctorComponent, EditDoctorComponent, UpdateDoctorComponent],
  imports: [
    CommonModule,FormsModule,NgxPaginationModule
  ],
  exports: [
    DoctorsListComponent, CreateDoctorComponent, EditDoctorComponent,UpdateDoctorComponent
  ]
})
export class DoctorsModule { }
