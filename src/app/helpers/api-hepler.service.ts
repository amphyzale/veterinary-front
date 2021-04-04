import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiHelperService {

  constructor() { }

  getUrl(method: string) {
    return environment.apiEndpoint + method;
  }
}
