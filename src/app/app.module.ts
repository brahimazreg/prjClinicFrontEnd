import { VisitsModule } from './visits/visits.module';
import { SpecialitiesModule } from './specialities/specialities.module';
import { DoctorsModule } from './doctors/doctors.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PatientsModule } from './patients/patients.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    PatientsModule,NgxPaginationModule,
    HttpClientModule,FormsModule,DoctorsModule,SpecialitiesModule,VisitsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
