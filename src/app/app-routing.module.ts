import { UpdateSpecialityComponent } from './specialities/update-speciality/update-speciality.component';
import { CreateSpecialityComponent } from './specialities/create-speciality/create-speciality.component';
import { CreateDoctorComponent } from './doctors/create-doctor/create-doctor.component';
import { EditPatientComponent } from './patients/edit-patient/edit-patient.component';
import { UpdatePatientComponent } from './patients/update-patient/update-patient.component';
import { CreatePatientComponent } from './patients/create-patient/create-patient.component';
import { PatientListComponent } from './patients/patient-list/patient-list.component';


import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsListComponent } from './doctors/doctors-list/doctors-list.component';
import { UpdateDoctorComponent } from './doctors/update-doctor/update-doctor.component';
import { EditDoctorComponent } from './doctors/edit-doctor/edit-doctor.component';
import { SpecialityListComponent } from './specialities/speciality-list/speciality-list.component';

const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:"full"},
  {path:"home" , component: HomeComponent},
  {path:"patientList" , component: PatientListComponent},
  {path:"create-patient" , component: CreatePatientComponent},
  {path:"update-patient/:id",component:UpdatePatientComponent},
  {path:"edit-patient/:id",component:EditPatientComponent},
  {path:"doctorsList",component:DoctorsListComponent},
  {path:"create-doctor",component: CreateDoctorComponent},
  {path:"update-doctor/:id",component:UpdateDoctorComponent},
  {path:"edit-doctor/:id",component:EditDoctorComponent},
  {path:"specialityList",component:SpecialityListComponent},
  {path:"create-speciality",component: CreateSpecialityComponent},
  {path:"update-speciality/:id",component:UpdateSpecialityComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
