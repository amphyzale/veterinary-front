import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiHelperService } from "src/app/helpers/api-hepler.service";
import { ServicesModel } from "../../../shared/models/services.model";


/** сервис для получения услуг из апи */
@Injectable()
export class ServicesService {
  constructor(private http: HttpClient, private apiHelper: ApiHelperService) {}


}
