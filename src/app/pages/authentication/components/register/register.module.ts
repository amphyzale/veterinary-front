import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { DxSelectBoxModule, DxTextBoxModule, DxButtonModule, DxDateBoxModule, DxValidatorModule } from 'devextreme-angular';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxButtonModule,
    DxDateBoxModule,
    DxValidatorModule
  ]
})
export class RegisterModule { }
