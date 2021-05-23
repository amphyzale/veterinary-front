import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPetsComponent } from './admin-pets.component';
import { DxDataGridModule } from "devextreme-angular";


@NgModule({
  declarations: [AdminPetsComponent],
  imports: [
    CommonModule,
    DxDataGridModule
  ],
  bootstrap: [AdminPetsComponent]
})
export class AdminPetsModule { }
