import { Component } from "@angular/core";
import { ApiHelperService } from "./helpers/api-hepler.service";
import { TokenStorageService } from "./helpers/token-storage.service";
import { AuthenticationService } from "./pages/authentication/shared/authentication.service";
import { Roles } from "./shared/enums/role";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
  providers: [ApiHelperService, AuthenticationService],
})
export class AppComponent {
  title: string;

  private roles: string[] = [];

  isLoggedIn = false;

  showAdminBoard = false;

  showModeratorBoard = false;

  username: string = "";

  constructor(
    private tokenStorageService: TokenStorageService,
    private authService: AuthenticationService
  ) {
    this.authService.observeLogIn().subscribe((_) => {
      this.loggedInCheck();
    });
  }

  ngOnInit() {
    this.loggedInCheck();
  }

  loggedInCheck() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes(Roles.Grand) && this.roles.includes(Roles.Admin);
      this.username = user.username;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    this.loggedInCheck();
  }
}
