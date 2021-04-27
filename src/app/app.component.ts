import { Component } from '@angular/core';
import { ApiHelperService } from './helpers/api-hepler.service';
import { TokenStorageService } from './helpers/token-storage.service';
import { AuthenticationService } from './pages/authentication/shared/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [ApiHelperService, AuthenticationService]
})
export class AppComponent {
  title: string;

  private roles: string[] = [];

  isLoggedIn = false;

  showAdminBoard = false;

  showModeratorBoard = false;

  username: string = '';

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      //this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      //this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      
      this.username = user.username;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
