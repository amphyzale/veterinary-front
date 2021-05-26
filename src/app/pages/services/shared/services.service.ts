import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiHelperService } from "src/app/helpers/api-hepler.service";
import { ServicesModel } from "../../../shared/models/services.model";

const METHOD_GET_ALL_SERVICES = "/index/all_services";

/** сервис для получения услуг из апи */
@Injectable()
export class ServicesService {
  private httpOption = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    }),
  };

  constructor(private http: HttpClient, private apiHelper: ApiHelperService) {}

  getServices(): Observable<ServicesModel[]> {
    return this.http.get<ServicesModel[]>(
      this.apiHelper.getUrl(METHOD_GET_ALL_SERVICES),
      this.httpOption
    );
  }
}
