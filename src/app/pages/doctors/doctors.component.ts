import { Component, OnInit } from '@angular/core';
import { DoctorModel } from 'src/app/shared/models/doctor.model';
import { DoctorService } from 'src/app/shared/services/admin-doctors.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.less'],
  providers: [DoctorService]
})
export class DoctorsComponent {

  popupVisible = false;
  closeButtonOptions: any;
  positionOf: string;

  dataSource: DoctorModel[] = [];
  desc: string;

  constructor(private service: DoctorService) {
    this.service.getDoctors().subscribe((doctors) => this.dataSource = doctors);
  }

  closePopup() {
    this.popupVisible = false;
  }

  detailsButtonMouseEnter() {
    this.positionOf = '';
  }

  showInfo() {
    //this.dataSource = dataSource;
    //this.desc = this.dataSource;
    this.popupVisible = true;
  }

}
