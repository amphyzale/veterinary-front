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

  constructor(public service: AccountService) {
    this.service.getProfile().subscribe((info) => {
      this.userProfile = info;
    });
    /*this.userInfo = service.getUserInfo();
      this.updateButtonOptions = {
          text: "Save",
          onClick: function(e) {
            const message = `Update data for ${that.userInfo.FirstName} ${that.userInfo.LastName}`;
            notify({
              message: message,
                  position: {
                      my: "center top",
                      at: "center top"
                  }
            }, "success", 3000);
          }
      };*/
    /*this.closeButtonOptions = {
          text: "Close",
          onClick: function(e) {
              that.popupVisible = false;
          }
      };*/
  }
  /*detailsButtonMouseEnter() {
      this.positionOf = ``;
  }*/
  /*showInfo(userInfo) {
      this.userInfo = userInfo;
      this.popupVisible = true;
  }*/
}
