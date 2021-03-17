import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialityListComponent } from './speciality-list/speciality-list.component';
import { CreateSpecialityComponent } from './create-speciality/create-speciality.component';
import { UpdateSpecialityComponent } from './update-speciality/update-speciality.component';



@NgModule({
  declarations: [SpecialityListComponent, CreateSpecialityComponent, UpdateSpecialityComponent],
  imports: [
    CommonModule,FormsModule
  ],
  exports :[
    SpecialityListComponent, CreateSpecialityComponent, UpdateSpecialityComponent
  ]
})
export class SpecialitiesModule { }
