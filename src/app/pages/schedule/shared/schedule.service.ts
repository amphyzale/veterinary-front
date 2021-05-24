import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiHelperService } from 'src/app/helpers/api-hepler.service';

@Injectable()
export class ScheduleService {

  constructor(private http: HttpClient, private apiHelper: ApiHelperService) { }
}
