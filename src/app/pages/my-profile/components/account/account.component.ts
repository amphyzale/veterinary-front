/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less']
})
export class AccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/

//пример с сайта https://js.devexpress.com/Demos/WidgetsGallery/Demo/Popup/Overview/Angular/Light/

import { Component } from "@angular/core";
import { UserProfile, AccountService } from "../../shared/account.service";
import notify from 'devextreme/ui/notify';

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.less"],
  providers: [AccountService],
})
export class AccountComponent {

  userProfile: UserProfile;
  popupVisible = false;
  updateButtonOptions: any;
  closeButtonOptions: any;
  positionOf: string;

  userProfileUpdate: UserProfile;
  genders: string[] = ['Male', 'Female'];

  constructor(public service: AccountService) {
    this.userProfile = {
      firstName: '',
      lastName: '',
      patronymic: '',
      userPic: '',
      email: '',
      phone: '',
      locale: '',
      //gender: this.genders[0],
      gender: ''
    };
    this.service.getProfile().subscribe((info) => {  
      this.userProfile.firstName = info.firstName;
      this.userProfile.lastName = info.lastName;
      this.userProfile.patronymic = info.patronymic;
      this.userProfile.userPic = info.userPic;
      this.userProfile.email = info.email;
      this.userProfile.phone = info.phone;
      this.userProfile.locale = info.locale;
      this.userProfile.gender = info.gender;  
    });

    //const that = this;
    this.updateButtonOptions = {
      text: "Save",
      onClick: function (e) {
        //тут нужно отправлять запрос
        console.log(this.userProfile);
        this.service.updateProfile(this.userProfile);

        const message = `Updated data for ${this.userProfile.firstName} ${this.userProfile.lastName}`;
        notify({
          message: message,
          position: {
            my: "center top",
            at: "center top"
          }
        }, "success", 3000);
      }
    };
    this.closeButtonOptions = {
      text: "Close",
      onClick: function (e) {
        this.popupVisible = false;
      }
    };
  }
  detailsButtonMouseEnter() {
    this.positionOf = ``;
  }
  showInfo(userProfile) {
    this.userProfile = userProfile;
    this.popupVisible = true;
  }
}
