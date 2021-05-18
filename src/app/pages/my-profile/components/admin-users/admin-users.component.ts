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

  dataSource: User[];

  constructor(private service: UsersService) {
    this.service.getAllUsers().subscribe((users) => {
      this.dataSource = users;
    });
}
}

