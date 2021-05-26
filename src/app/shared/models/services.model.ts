import { DoctorModel } from "./doctor.model";

export interface ServicesModel {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: number;
  doctors: DoctorModel[];
  image: string;
}
