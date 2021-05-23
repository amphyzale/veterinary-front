import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) {
    this.showAccount = true;
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
