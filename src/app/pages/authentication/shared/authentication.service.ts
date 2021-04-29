import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { tap } from "rxjs/operators";

import { ApiHelperService } from "src/app/helpers/api-hepler.service";
import { TokenStorageService } from "src/app/helpers/token-storage.service";

import {
  LoginResponse,
  UserLoginInfo,
  UserRegisterInfo,
} from "../models/authentication.model";

const METHOD_LOGIN = "/auth/login";
const METHOD_REGISTER = "/auth/register";

@Injectable()
export class AuthenticationService {
  
  private httpOption = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    }),
  };

  private logIn$ = new Subject<any>();

  constructor(
    private http: HttpClient,
    private apiHelper: ApiHelperService,
    private tokenStorageService: TokenStorageService
  ) {}

  login(loginInfo: UserLoginInfo): Observable<LoginResponse> {
    const body = loginInfo;
    return this.http
      .post<LoginResponse>(
        this.apiHelper.getUrl(METHOD_LOGIN),
        body,
        this.httpOption
      )
      .pipe(
        tap((res) => {
          this.tokenStorageService.saveToken(res.token);
          this.tokenStorageService.saveUser(res);
          this.logIn$.next();
        })
      );
  }

  register(registerInfo: UserRegisterInfo): Observable<void> {
    const body = { ...registerInfo };
    body.gender = body.gender.toUpperCase();
    return this.http.post<any>(
      this.apiHelper.getUrl(METHOD_REGISTER),
      body,
      this.httpOption
    );
  }

  observeLogIn(): Observable<any> {
    return this.logIn$.asObservable();
  }
}
