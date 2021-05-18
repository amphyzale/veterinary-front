import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ApiHelperService } from 'src/app/helpers/api-hepler.service';
import { Observable } from 'rxjs';

export interface UserProfile {
  firstName: string;
  lastName: string;
  patronymic: string;
  userPic?: string;
  email: string;
  phone: string;
  locale: string;
  gender: string;
}

const METHOD_GET_PROFILE = "/users/profile";
const METHOD_UPDATE_PROFILE = "/users/update_profile";

/** сервис для получения профиля из апи */
@Injectable()
export class AccountService {

  private httpOption = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    }),
  };

  constructor(private http: HttpClient, private apiHelper: ApiHelperService) { }

  getProfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>(
      this.apiHelper.getUrl(METHOD_GET_PROFILE),
      this.httpOption
    );
  }

  updateProfile(profileInfo: UserProfile): Observable<void> {
    const body = { ...profileInfo};
    //body.gender = body.gender.toUpperCase();
    return this.http
      .patch<any>(
        this.apiHelper.getUrl(METHOD_UPDATE_PROFILE),
        body,
        this.httpOption
      );
  }
}