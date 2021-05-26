import { Component, OnInit } from '@angular/core';
import { DoctorModel } from 'src/app/shared/models/doctor.model';
import { ServicesModel } from 'src/app/shared/models/services.model';
import { ServicesService } from './shared/services.service';

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.less"],
  providers: [ServicesService],
})
export class ServicesComponent {
  dataSource: ServicesModel[] = [];

  constructor(private service: ServicesService) {
    this.service.getServices().subscribe((services) => this.dataSource = services);
  }
}
