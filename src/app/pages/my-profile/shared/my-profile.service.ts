import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ApiHelperService } from 'src/app/helpers/api-hepler.service';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/shared/models/user.model';
import { tap } from 'rxjs/operators';

const METHOD_GET_PROFILE = "/users/profile";
const METHOD_UPDATE_PROFILE = "/users/update_profile";

/** сервис для получения профиля из апи */
@Injectable()
export class MyProfileService {

  private httpOption = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    }),
  };

  private currentUserId: number;

  constructor(private http: HttpClient, private apiHelper: ApiHelperService) { }

  getProfile(): Observable<UserModel> {
    return this.http.get<UserModel>(this.apiHelper.getUrl(METHOD_GET_PROFILE), this.httpOption)
      .pipe(tap(user => {this.currentUserId = user.id;
      console.log(user.id)}));
  }

  updateProfile(profileInfo: UserModel): Observable<void> {
    const body = { ...profileInfo };
    //body.gender = body.gender.toUpperCase();
    return this.http
      .patch<any>(
        this.apiHelper.getUrl(METHOD_UPDATE_PROFILE),
        body,
        this.httpOption
      );
  }

  getCurrentUserId(): number {
    return this.currentUserId;
  }
}
