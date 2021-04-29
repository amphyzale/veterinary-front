import { Component, OnInit } from '@angular/core';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

/*export interface DialogData {
  info: string;
}*/

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.less']
})
export class MyAccountComponent /*implements OnInit */{

  info: string;
  /*firstName: string;
  last_name: string;
  email: string;
  phone: string;
  login: string;
  password: string;*/

  // constructor(public dialog: MatDialog) { }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(MyAccountUpdateDialogComponent, {
  //     width: '70%',
  //     data: {
  //       info: this.info,
  //       //firstName: this.firstName, 
  //       /*last_name: this.last_name,
  //       email: this.email,
  //       phone: this.phone,
  //       login: this.login,
  //       password: this.password*/
  //     }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.info = result;
  //     //this.firstName = result;
  //     /*this.last_name = result;
  //     this.email = result;
  //     this.phone = result;
  //     this.login = result;
  //     this.password = result;*/
  //   });

  // //ngOnInit(): void {
  // }
}
