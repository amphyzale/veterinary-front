export interface UserLoginInfo {

  email: string;

  password: string;
}

export interface UserRegisterInfo extends UserLoginInfo {

  firstName: string;

  lastName: string;

  patronymic: string;

  phone: string;

  userPic?: string;

  locale?: string;

  gender: string;

  birthDate: string;
}

export interface LoginResponse {

  roles: string[];

  token: string;

  username: string;
}