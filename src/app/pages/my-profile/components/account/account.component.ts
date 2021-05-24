import { Component, Input } from "@angular/core";
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

  @Input()
  userProfile: UserModel;

  constructor(public service: MyProfileService) { }

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
