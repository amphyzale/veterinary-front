import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

import { DxSelectBoxModule, DxTextBoxModule, DxButtonModule, DxValidatorModule } from 'devextreme-angular';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxButtonModule,
    DxValidatorModule
  ]
})
export class LoginModule { }
