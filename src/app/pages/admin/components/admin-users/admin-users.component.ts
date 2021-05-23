import { Component } from "@angular/core";
import { UserModel } from "../../../../shared/models/user.model";
import { UsersService } from "./shared/admin-users.service";

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.less'],
  providers: [UsersService],
})
export class AdminUsersComponent {

 searchQuery: string = '';

  dataSource: UserModel[];

  constructor(private service: UsersService) {
    this.getAllUsers();
  }

  getAllUsers(){
    this.service.getAllUsers().subscribe((users) => {
      this.dataSource = users;
    });
  }

  findAnyUser() {
    this.service.findUser(this.searchQuery).subscribe((users) => {
      this.dataSource = users;
    });
  }

}

