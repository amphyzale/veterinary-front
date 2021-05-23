import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { PetModel } from '../models/pet.model';
import { HttpClient } from '@angular/common/http';
import { ApiHelperService } from 'src/app/helpers/api-hepler.service';

const METHOD_GET_ALL = "/pets/all";
const METHOD_GET_PET_BY_ID = "/pets/user_pets";

@Injectable()
export class PetsService {

  constructor(private http: HttpClient, private apiHelper: ApiHelperService) { }

  getPets(): Observable<PetModel[]> {
    return this.http.get<PetModel[]>(this.apiHelper.getUrl(METHOD_GET_ALL));
  }

  getPetsByUser(currentUserId: number): Observable<PetModel[]> {
    const params: any = { id: currentUserId };
    return this.http.get<PetModel[]>(this.apiHelper.getUrl(METHOD_GET_PET_BY_ID), { params: params });
  }
}
