import { Appointment } from './shared/model';
import { Subject } from 'rxjs';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { off, on } from 'devextreme/events';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.less']
})
export class ScheduleComponent implements AfterViewInit, OnDestroy {

  private ngUnsubscribe$ = new Subject<void>();

  dataSource: Appointment[] = [];

  currentDate = new Date(Date.now());

  selectDate = new Date(Date.now());

  focus$ = new Subject<boolean>();

  appointmentData: any;

  constructor() {
    this.downHandler = this.downHandler.bind(this);
    this.upHandler = this.upHandler.bind(this);
  }

  /** @inheritdoc */
  ngAfterViewInit() {
   // on(document.documentElement, 'dxpointerdown', e => setTimeout(() => this.downHandler(e), 200));
   // on(document.documentElement, 'dxpointerup', e => setTimeout(() => this.upHandler(e), 200));
  }

  /** @inheritdoc */
  ngOnDestroy() {
    //off(document.documentElement, 'dxpointerdown', this.downHandler);
    //off(document.documentElement, 'dxpointerup', this.upHandler);

    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

  /** Обрабатывает нажатие на событие */
  onAppointmentClick(e: any) {
    this.focus$.next(true);
    this.appointmentData = <any>(e.appointmentData);
  }

  /** Обрабатывает нажатие на ячейку */
  onCellClick(e: any) {
    this.selectDate = e.cellData.startDate;
   // e.cancel = true;
  }

  onAppointmentFormOpening(e: any) {
 //   e.cancel = true;
  }

  onAdd() {

  }

  onEdit() {

  }

  onDelete() {

  }

  /**
  * Обработка нажатия клавиши мыши.
  * @param e событие с html элементом.
  */
  private downHandler(e: any) {
    if (!(e.target.classList.contains('dx-scheduler-appointment-title') ||
      e.target.classList.contains('dx-tooltip-appointment-item-content-subject'))) {
      this.focus$.next(false);
    }
  }

  /**
   * Обработка отпуска нажатия клавиши мыши.
   * @param e событие с html элементом.
   */
  private upHandler(e: any) {
    if (!e.target.classList.contains('dx-scheduler-date-table-cell')) {
      this.selectDate = new Date(Date.now());
    }
  }
}

