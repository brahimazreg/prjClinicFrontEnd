import { Doctor } from "../doctors/doctor";
import { Patient } from "../patients/patient";

export  class Visit {
  id: number=0;
  date_Visit?: Date;
  patient?: Patient;
  doctor?: Doctor;

}
