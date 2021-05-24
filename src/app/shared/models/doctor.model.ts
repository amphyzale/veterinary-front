import { UserModel } from "src/app/shared/models/user.model";

export interface DoctorModel extends UserModel {
  specialization: string;
  startOfPractice: Date;
}
