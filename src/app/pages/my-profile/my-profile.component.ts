import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/shared/models/user.model';
import { MyProfileService } from './shared/my-profile.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.less'],
  providers: [MyProfileService]
})
export class MyProfileComponent implements OnInit {

  showAccount: boolean;

  showPets: boolean;

  showChat: boolean;

  userProfile: UserModel;

  constructor(public service: MyProfileService) {
    this.showAccount = true;
    this.service.getProfile().subscribe((info) => this.userProfile = info);
  }

  ngOnInit(): void {
  }

  goToAccount() {
    this.showAccount = true;
    this.showChat = this.showPets = false;
  }

  goToPets() {
    this.showAccount = this.showChat = false;
    this.showPets = true;
  }

  goToChat() {
    this.showAccount = this.showPets = false;
    this.showChat = true;
  }

}
