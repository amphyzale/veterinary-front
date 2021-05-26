import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiHelperService } from "src/app/helpers/api-hepler.service";
import { DoctorModel } from "../models/doctor.model";

const METHOD_GET_ALL = "/index/all_doctors";
const METHOD_FIND = "/doctors/doctor";

@Injectable()
export class DoctorService {
  private httpOption = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    }),
  };

  constructor(private http: HttpClient, private apiHelper: ApiHelperService) {}

  getDoctors(): Observable<DoctorModel[]> {
    return this.http.get<DoctorModel[]>(
      this.apiHelper.getUrl(METHOD_GET_ALL),
      this.httpOption
    );
  }

  findDoctor(userSearchQuery: string): Observable<DoctorModel[]> {
    const params: any = { searchQuery: userSearchQuery };
    return this.http.get<DoctorModel[]>(this.apiHelper.getUrl(METHOD_FIND), {
      params: params,
    });
  }
}
