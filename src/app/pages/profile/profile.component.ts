import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.less"],
})
export class ProfileComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToMyAccount() {
    this.router.navigate(["/profile", "my-account"]);
  }

  goToChat() {
    this.router.navigate(["/profile", "chat"]);
  }
}
