import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminScheduleComponent } from './admin-schedule.component';
import { DxDataGridModule } from "devextreme-angular";


@NgModule({
  declarations: [AdminScheduleComponent],
  imports: [
    CommonModule,
    DxDataGridModule
  ],
  bootstrap: [AdminScheduleComponent]
})
export class AdminScheduleModule { }
