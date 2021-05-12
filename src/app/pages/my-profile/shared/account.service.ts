import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ApiHelperService } from 'src/app/helpers/api-hepler.service';
import { Observable } from 'rxjs';

export interface UserProfile {
  firstName: string;
  lastName: string;
  userPic: string;
  email: string;
  phone: string;
  login: string;
}

/*let userInfo: UserInfo = {
    "FirstName": "Kate",
    "LastName": "Maltceva",
    "UserPic": "#",
    "BirthDate": "1974/11/15",
    "Email": "maltceva@gmail.com",
    "Phone": "89000000000",
    "login": "maltceva@gmail.com",
    "password": "123"
};*/

/*@Injectable()
export class Service {
    getUserInfo(): UserInfo {
        return userInfo;
    }
}*/

const METHOD_GET_PROFILE = "/users/profile";

/** сервис для получения профиля из апи */
@Injectable()
export class AccountService {

  private httpOption = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    }),
  };

  constructor(private http: HttpClient, private apiHelper: ApiHelperService) {}

  getProfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>(
      this.apiHelper.getUrl(METHOD_GET_PROFILE),
      this.httpOption
    );
  }
}