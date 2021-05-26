import { DoctorModel } from "src/app/shared/models/doctor.model";
import { PetModel } from "src/app/shared/models/pet.model";
import { ServicesModel } from "src/app/shared/models/services.model";
import { UserModel } from "src/app/shared/models/user.model";

export interface Appointment {
  id: number;
  startDate: Date;
  endDate: Date;
  service: ServicesModel;
  user: UserModel;
  doctor: DoctorModel;
  pet: PetModel;
  status: string;
}
