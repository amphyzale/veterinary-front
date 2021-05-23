import { DxDataGridModule } from 'devextreme-angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsComponent } from './pets.component';



@NgModule({
  declarations: [PetsComponent],
  imports: [
    CommonModule,
    DxDataGridModule
  ],
  exports:[PetsComponent],
  bootstrap:[PetsComponent]
})
export class PetsModule { }
