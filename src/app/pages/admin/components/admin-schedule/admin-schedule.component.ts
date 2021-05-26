import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/pages/schedule/shared/model';
import { ScheduleService } from 'src/app/pages/schedule/shared/schedule.service';
import { ServicesService } from 'src/app/pages/services/shared/services.service';
import { dateTimeFormat } from 'src/app/shared/functions/date-time-format';
import { DoctorModel } from 'src/app/shared/models/doctor.model';
import { PetModel } from 'src/app/shared/models/pet.model';
import { ServicesModel } from 'src/app/shared/models/services.model';
import { UserModel } from 'src/app/shared/models/user.model';
import { DoctorService } from 'src/app/shared/services/admin-doctors.service';
import { PetsService } from 'src/app/shared/services/pets.service';
import { UsersService } from '../admin-users/shared/admin-users.service';

@Component({
  selector: 'app-admin-schedule',
  templateUrl: './admin-schedule.component.html',
  styleUrls: ['./admin-schedule.component.less'],
  providers: [ScheduleService, UsersService, PetsService, DoctorService, ServicesService]
})
export class AdminScheduleComponent {

  dateTimeFormat = dateTimeFormat;

  dataSource: Appointment[] = [];
  users: UserModel[] = [];
  pets: PetModel[] = [];
  doctors: DoctorModel[] = [];
  services: ServicesModel[] = [];

  constructor(private service: ScheduleService,
    private usersService: UsersService,
    private petsService: PetsService,
    private doctorsService: DoctorService,
    private servicesService: ServicesService,) {
    this.service.getSchedule().subscribe((info) => this.dataSource = info);
    this.usersService.getAllUsers().subscribe(users => this.users = users);
    this.petsService.getPets().subscribe((pets) => this.pets = pets);
    this.doctorsService.getDoctors().subscribe((doctors) => this.doctors = doctors);
    this.servicesService.getServices().subscribe((services) => this.services = services);
  }
}
