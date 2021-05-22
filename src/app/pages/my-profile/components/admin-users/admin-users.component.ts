/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.less']
})
export class AdminUsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/

import { Component } from "@angular/core";
import { DxDataGridModule } from 'devextreme-angular';
import { User, UsersService } from "../../shared/admin-users.service";

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.less'],
  providers: [UsersService],
})
export class AdminUsersComponent {

  /*id: number = 2;
  email: string = 'maltceva@gmail.com';*/

  searchQuery: string = '';

  dataSource: User[];

  constructor(private service: UsersService) {
    /*this.service.getAllUsers().subscribe((users) => {
      this.dataSource = users;
    });*/
    this.getAllUsers();
  }

  getAllUsers(){
    this.service.getAllUsers().subscribe((users) => {
      this.dataSource = users;
    });
  }

  findAnyUser() {
    //тут нужно отправлять запрос
    this.service.findUser(this.searchQuery).subscribe((users) => {
      this.dataSource = users;
    });
  }
}

