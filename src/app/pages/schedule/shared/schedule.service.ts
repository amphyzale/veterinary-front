import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiHelperService } from 'src/app/helpers/api-hepler.service';
import { Appointment } from './model';

const METHOD_GET_ALL_APPOINTS =  "/index/all_appointments";

@Injectable()
export class ScheduleService {
  
  private httpOption = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    }),
  };

  constructor(private http: HttpClient, private apiHelper: ApiHelperService) { }

  getSchedule(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.apiHelper.getUrl(METHOD_GET_ALL_APPOINTS), this.httpOption);
}
}
