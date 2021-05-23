import { Component } from '@angular/core';
import { dateTimeFormat } from 'src/app/shared/functions/date-time-format';

import { UserRegisterInfo } from '../../models/authentication.model';
import { AuthenticationService } from '../../shared/authentication.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent {

  dateTimeFormat = dateTimeFormat;

  phonePattern: any = /^\+\s*7\s*\(\s*[9-9]\d{2}\)\s*\d{3}\s*-\s*\d{4}$/;

  phoneRules: any = {
    X: /[9-9]/
  }

  /** Список полов необходимый для заполнения select-box'а */
  genders: string[] = ['Male', 'Female'];

  maxDate: Date = new Date();

  user: UserRegisterInfo;

  isDisabled: boolean;

  validatedEmail: boolean;

  validatedPhone: boolean;

  validatedPassword: boolean;

  validatedConfirmPassword: boolean;

  validatedLastName: boolean;

  validatedFirstName: boolean;

  constructor(private authenticationService: AuthenticationService) {
    this.maxDate = new Date(this.maxDate.setFullYear(this.maxDate.getFullYear()-18));
    this.user = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      patronymic: '',
      gender: this.genders[0],
      phone: '',
      birthDate: dateTimeFormat(new Date().toDateString()),
      locale: 'RU'
    };
  }

  passwordComparison = () => {
    return this.user.password;
  };

  onRegister() {
    this.user.birthDate = dateTimeFormat(this.user.birthDate);
    this.authenticationService.register(this.user).toPromise();
  }

  onValidatedEmail(isValid: boolean) {
    this.validatedEmail = isValid;
    this.validate();
  }

  onValidatedPhone(isValid: boolean) {
    this.validatedPhone = isValid;
    this.validate();
  }
  onValidatedPassword(isValid: boolean) {
    this.validatedPassword = isValid;
    this.validate();
  }

  onValidatedConfirmPassword(isValid: boolean) {
    this.validatedConfirmPassword = isValid;
    this.validate();
  }

  onValidatedLastName(isValid: boolean) {
    this.validatedLastName = isValid;
    this.validate();
  }

  onValidatedFirstName(isValid: boolean) {
    this.validatedFirstName = isValid;
    this.validate();
  }

  private validate() {
    this.isDisabled = this.validatedEmail && this.validatedPhone && this.validatedPassword &&
      this.validatedConfirmPassword && this.validatedLastName && this.validatedFirstName;
  }
}
