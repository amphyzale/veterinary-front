import { UserModel } from './user.model';

export interface PetModel {
  birthDate: Date;
  breed: string;
  gender: string;
  id: 11
  kind: string;
  nickname: string;
  owner: UserModel;
  petPic: string;
}
