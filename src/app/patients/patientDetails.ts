import { Doctor } from "../doctors/doctor";
import { Visit } from "../visits/visit";

export  class PatientDetails {
  id: number=0;
  firstName:  string='';
  lastName: string='';
  phone?: string;
  date_visit?: string
  fname: string='';
  doctor?: Doctor;
  visits?: Visit[];

}
