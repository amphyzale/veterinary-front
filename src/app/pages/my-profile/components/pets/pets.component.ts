import { MyProfileService } from './../../shared/my-profile.service';
import { Component, } from '@angular/core';
import { PetsService } from 'src/app/shared/services/pets.service';
import { dateTimeFormat } from 'src/app/shared/functions/date-time-format';
import { PetModel } from 'src/app/shared/models/pet.model';
import { UserModel } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.less'],
  providers: [PetsService]
})
export class PetsComponent {

  dateTimeFormat = dateTimeFormat;

  searchQuery: string = "";

  dataSource: PetModel[] = [];

  users: UserModel[] = [];

  constructor(private service: PetsService,
    private profileService: MyProfileService) {
    this.service.getPetsByUser(this.profileService.getCurrentUserId()).subscribe((pets) => this.dataSource = pets);
  }
}
