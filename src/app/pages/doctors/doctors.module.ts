import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsComponent } from './doctors.component';
import { DxButtonModule, DxPopupModule, DxScrollViewModule, DxTemplateModule, DxTextBoxModule } from 'devextreme-angular';

@NgModule({
  declarations: [DoctorsComponent],
  imports: [
    CommonModule,
    DxPopupModule,
    DxButtonModule,
    DxTemplateModule,
    DxTextBoxModule,
    DxScrollViewModule,
  ]
})
export class DoctorsModule { }
