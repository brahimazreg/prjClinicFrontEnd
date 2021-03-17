import { Doctor } from "../doctors/doctor";
import { Visit } from "../visits/visit";

export  class Patient {
  id?: number;
  firstName:  string='';
  lastName: string='';
  phone?: string;
  doctor?: Doctor;
  visits?:Visit[]

}
