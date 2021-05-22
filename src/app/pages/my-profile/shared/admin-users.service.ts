import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ApiHelperService } from 'src/app/helpers/api-hepler.service';
import { Observable } from 'rxjs';

export interface User {
  /*id: number;
  firstName: string;
  lastName: string;
  userPic: string;
  email: string;
  phone: string;
  login: string;*/
  email: string;
  fio: string;
  firstName: string;
  gender: string;
  id: number;
  lastName: string;
  lastVisit: string;
  locale: string;
  patronymic: string;
  phone: string;
  roles: string[];
  status: string;
  userPic?: string;
}

const METHOD_GET_ALL_USERS = "/users/all_users";
const METHOD_GET_FIND_USER = "/users/user";

/** сервис для получения пользователей из апи */
@Injectable()
export class UsersService {

  private httpOption = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    }),
  };

  constructor(private http: HttpClient, private apiHelper: ApiHelperService) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(
      this.apiHelper.getUrl(METHOD_GET_ALL_USERS),
      this.httpOption
    );
  }

  findUser(userSearchQuery: string): Observable<User[]> {
    if (!isNaN(Number(userSearchQuery))) {
      return this.http.get<User[]>(
        this.apiHelper.getUrl(METHOD_GET_FIND_USER + '?searchQuery=' + Number(userSearchQuery)),
        this.httpOption
      );
    }
    else {
      return this.http.get<User[]>(
        this.apiHelper.getUrl(METHOD_GET_FIND_USER + '?searchQuery=' + userSearchQuery),
        this.httpOption
      );
    }
  }
}