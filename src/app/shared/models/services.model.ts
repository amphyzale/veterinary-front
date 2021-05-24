import { DoctorModel } from "./doctor.model";

export interface ServicesModel {
  name: string;
  description: string;
  price: number;
  duration: number;
  doctors: DoctorModel[];
}
