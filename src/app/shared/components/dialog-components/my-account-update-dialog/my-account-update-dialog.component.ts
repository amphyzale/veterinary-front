import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  info: string;
  //firstName: string;
}

@Component({
  selector: 'app-my-account-update-dialog',
  templateUrl: './my-account-update-dialog.component.html',
  styleUrls: ['./my-account-update-dialog.component.less']
})
export class MyAccountUpdateDialogComponent /*implements OnInit*/ {

  constructor(public dialogRef: MatDialogRef<MyAccountUpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  //ngOnInit(): void {
  //}
  onNoClick(): void {
    this.dialogRef.close();
  }
  /*isDisabled: boolean;

  validatedEmail: boolean;

  validatedPhone: boolean;

  validatedPassword: boolean;

  validatedLastName: boolean;

  validatedFirstName: boolean;

  onValidatedFirstName(isValid: boolean) {
    this.validatedFirstName = isValid;
    this.validate();
  }

  private validate() {
    //this.isDisabled = this.validatedEmail && this.validatedPhone && this.validatedPassword &&
    //  this.validatedLastName && this.validatedFirstName;
    this.isDisabled = this.validatedFirstName;
  }*/

}
