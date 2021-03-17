import { Patient } from "../patients/patient";
import { Speciality } from "../specialities/speciality";
import { Visit } from "../visits/visit";

export  class Doctor {
  id: number=0;
  fname:  string='';
  lname: string='';
  phone: string='';
 // patients?: Patient[];
 // visits?: Visit[];
  speciality?: string;



}
