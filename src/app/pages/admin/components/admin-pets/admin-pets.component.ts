import { UsersService } from './../admin-users/shared/admin-users.service';
import { PetModel } from '../../../../shared/models/pet.model';
import { PetsService } from '../../../../shared/services/pets.service';
import { Component, OnInit } from '@angular/core';
import { dateTimeFormat } from 'src/app/shared/functions/date-time-format';
import { UserModel } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-admin-pets',
  templateUrl: './admin-pets.component.html',
  styleUrls: ['./admin-pets.component.less'],
  providers: [PetsService, UsersService]
})
export class AdminPetsComponent {

  dateTimeFormat = dateTimeFormat;

  searchQuery: string = "";

  dataSource: PetModel[] = [];

  users: UserModel[] = [];

  constructor(private service: PetsService,
    private usersService: UsersService) {
      this.usersService.getAllUsers().subscribe(users => this.users = users);
      this.service.getPets().subscribe((pets) => this.dataSource = pets);
  }
}
