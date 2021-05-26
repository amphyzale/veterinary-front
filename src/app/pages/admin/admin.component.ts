import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDoctors() {
    this.router.navigate(["/admin", "admin-doctors"]);
  }

  goToUsers() {
    this.router.navigate(["/admin", "admin-users"]);
  }

  goToPets() {
    this.router.navigate(["/admin", "admin-pets"]);
  }

  goToSchedule() {
    this.router.navigate(["/admin", "admin-schedule"]);
  }

  goToChat() {
    this.router.navigate(["/admin", "chat"]);
  }
}
