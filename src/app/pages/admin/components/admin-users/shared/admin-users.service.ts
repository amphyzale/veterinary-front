import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ApiHelperService } from "src/app/helpers/api-hepler.service";
import { Observable } from "rxjs";
import { UserModel } from "../../../../../shared/models/user.model";

const METHOD_GET_ALL_USERS = "/users/all_users";
const METHOD_GET_FIND_USER = "/users/user";

/** сервис для получения пользователей из апи */
@Injectable()
export class UsersService {

  constructor(private http: HttpClient, private apiHelper: ApiHelperService) {}

  getAllUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.apiHelper.getUrl(METHOD_GET_ALL_USERS));
  }

  findUser(userSearchQuery: string): Observable<UserModel[]> {
    const params: any = { searchQuery: userSearchQuery };
    return this.http.get<UserModel[]>(this.apiHelper.getUrl(METHOD_GET_FIND_USER), {
      params: params,
    });
  }
}
