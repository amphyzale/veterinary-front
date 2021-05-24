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

  dataSource: DoctorModel[] = [];

  constructor(private service: DoctorService) {
    this.service.getDoctors().subscribe((doctors) => this.dataSource = doctors);

  }



}
