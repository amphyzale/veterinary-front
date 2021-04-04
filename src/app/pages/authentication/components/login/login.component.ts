import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginInfo } from '../../models/authentication.model';
import { AuthenticationService } from '../../shared/authentication.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  user: UserLoginInfo = { email: '', password: '' };

  isDisabled: boolean;

  validatedEmail: boolean;

  validatedPassword: boolean;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  onLogIn() {
    this.authenticationService.login(this.user)
      .subscribe(_ => this.router.navigate(['']));
  }

  onValidatedEmail(isValid: boolean) {
    this.validatedEmail = isValid;
    this.validate();
  }

  onValidatedPassword(isValid: boolean) {
    this.validatedPassword = isValid;
    this.validate();
  }

  onForgotPassword() {
    this.router.navigate(['forgot-password']);
  }

  onSignUp(){
    this.router.navigate(['register']);
  }

  private validate() {
    this.isDisabled = this.validatedEmail && this.validatedPassword;
  }
}
