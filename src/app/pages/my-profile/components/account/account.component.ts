import { Component } from "@angular/core";
import { MyProfileService } from "../../shared/my-profile.service";
import notify from 'devextreme/ui/notify';
import { UserModel } from "src/app/shared/models/user.model";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.less"]
})
export class AccountComponent {

  popupVisible = false;
  updateButtonOptions: any;
  closeButtonOptions: any;
  positionOf: string;

  userProfile: UserModel = {
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

  genders: string[] = ['Male', 'Female'];

  constructor(public service: MyProfileService) {
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
  }

  closePopup() {
    this.popupVisible = false;
  }

  detailsButtonMouseEnter() {
    this.positionOf = '';
  }

  showInfo(userProfile) {
    this.userProfile = userProfile;
    this.popupVisible = true;
  }

  updateUserProfile() {
    this.service.updateProfile(this.userProfile).subscribe((response) => {
      console.log('response', response)
    });
    const message = `Updated data for ${this.userProfile.firstName} ${this.userProfile.lastName}`;
    notify({
      message: message,
      position: {
        my: "center top",
        at: "center top"
      }
    }, "success", 3000);
  }
}
