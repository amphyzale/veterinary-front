import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.less']
})
export class MyProfileComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  goToAccount() {
    this.router.navigate(["/my-profile", "account"]);
  }

  goToDoctors() {
    this.router.navigate(["/my-profile", "admin-doctors"]);
  }

  goToChat() {
    this.router.navigate(["/my-profile", "chat"]);
  }

}
