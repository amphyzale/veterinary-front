import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiHelperService } from 'src/app/helpers/api-hepler.service';
import { ServicesModel } from '../../../shared/models/services.model';

const METHOD_GET_PROMO_SERVICES = "/index/promo_services";

@Injectable()
export class HomeService {

  constructor(private http: HttpClient, private apiHelper: ApiHelperService) {}

  getPromoServices(): Observable<ServicesModel[]> {
    return this.http.get<ServicesModel[]>(
      this.apiHelper.getUrl(METHOD_GET_PROMO_SERVICES)
    );
  }
}
