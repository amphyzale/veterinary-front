import { DxScrollViewModule } from 'devextreme-angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule.component';
import { DxSchedulerModule } from 'devextreme-angular';

@NgModule({
  declarations: [ScheduleComponent],
  imports: [
    CommonModule,
    DxSchedulerModule,
    DxScrollViewModule
  ],
  exports:[ScheduleComponent]
})
export class ScheduleModule { }
